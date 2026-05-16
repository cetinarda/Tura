import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchEntitlement, isIapAvailable, purchase as iapPurchase, restore as iapRestore, type PlanKey } from './iap';

const PREMIUM_CACHE_KEY = '@tura_premium_cache';

export type PremiumTier = 'free' | 'monthly' | 'yearly';

export interface PremiumState {
  tier: PremiumTier;
  expiresAt?: string;
  willRenew: boolean;
}

const FREE_STATE: PremiumState = { tier: 'free', willRenew: false };

function planFromProductId(productId?: string): PremiumTier {
  if (!productId) return 'free';
  if (productId.includes('yearly')) return 'yearly';
  return 'monthly';
}

async function readCache(): Promise<PremiumState> {
  try {
    const raw = await AsyncStorage.getItem(PREMIUM_CACHE_KEY);
    if (!raw) return FREE_STATE;
    const parsed = JSON.parse(raw) as PremiumState;
    if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) return FREE_STATE;
    return parsed;
  } catch {
    return FREE_STATE;
  }
}

async function writeCache(state: PremiumState): Promise<void> {
  await AsyncStorage.setItem(PREMIUM_CACHE_KEY, JSON.stringify(state));
}

export async function getPremiumState(): Promise<PremiumState> {
  if (!isIapAvailable()) return readCache();
  const ent = await fetchEntitlement();
  const state: PremiumState = ent.active
    ? { tier: planFromProductId(ent.productId), expiresAt: ent.expiresAt, willRenew: ent.willRenew }
    : FREE_STATE;
  await writeCache(state);
  return state;
}

export async function purchasePlan(plan: PlanKey): Promise<PremiumState> {
  const ent = await iapPurchase(plan);
  const state: PremiumState = ent.active
    ? { tier: planFromProductId(ent.productId), expiresAt: ent.expiresAt, willRenew: ent.willRenew }
    : FREE_STATE;
  await writeCache(state);
  return state;
}

export async function restorePurchases(): Promise<PremiumState> {
  const ent = await iapRestore();
  const state: PremiumState = ent.active
    ? { tier: planFromProductId(ent.productId), expiresAt: ent.expiresAt, willRenew: ent.willRenew }
    : FREE_STATE;
  await writeCache(state);
  return state;
}

/** Dev-only: clear cached premium state. Has no effect on real RevenueCat subscription. */
export async function devClearPremiumCache(): Promise<void> {
  await AsyncStorage.removeItem(PREMIUM_CACHE_KEY);
}

/** Dev-only: write a fake premium state to cache so paid surfaces can be tested without StoreKit sandbox. */
export async function devSetMockPremium(tier: 'monthly' | 'yearly'): Promise<PremiumState> {
  if (!__DEV__) return FREE_STATE;
  const expires = new Date();
  if (tier === 'monthly') expires.setMonth(expires.getMonth() + 1);
  else expires.setFullYear(expires.getFullYear() + 1);
  const next: PremiumState = { tier, willRenew: true, expiresAt: expires.toISOString() };
  await writeCache(next);
  return next;
}

export function usePremium() {
  const [state, setState] = useState<PremiumState>(FREE_STATE);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const s = await getPremiumState();
    setState(s);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    ...state,
    isPremium: state.tier !== 'free',
    loading,
    refresh,
  };
}
