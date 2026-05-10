import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PREMIUM_KEY = '@tura_premium';

export type PremiumTier = 'free' | 'monthly' | 'yearly';

export interface PremiumState {
  tier: PremiumTier;
  expiresAt?: string;
  willRenew: boolean;
}

const FREE_STATE: PremiumState = { tier: 'free', willRenew: false };

export async function getPremiumState(): Promise<PremiumState> {
  try {
    const raw = await AsyncStorage.getItem(PREMIUM_KEY);
    if (!raw) return FREE_STATE;
    const parsed = JSON.parse(raw) as PremiumState;
    if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) {
      return FREE_STATE;
    }
    return parsed;
  } catch {
    return FREE_STATE;
  }
}

export async function setPremiumState(state: PremiumState): Promise<void> {
  await AsyncStorage.setItem(PREMIUM_KEY, JSON.stringify(state));
}

export async function activateMockPremium(tier: 'monthly' | 'yearly'): Promise<PremiumState> {
  const expires = new Date();
  if (tier === 'monthly') expires.setMonth(expires.getMonth() + 1);
  else expires.setFullYear(expires.getFullYear() + 1);
  const next: PremiumState = { tier, willRenew: true, expiresAt: expires.toISOString() };
  await setPremiumState(next);
  return next;
}

export async function clearPremium(): Promise<void> {
  await AsyncStorage.removeItem(PREMIUM_KEY);
}

export function usePremium() {
  const [state, setState] = useState<PremiumState>(FREE_STATE);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    const s = await getPremiumState();
    setState(s);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    ...state,
    isPremium: state.tier !== 'free',
    loading,
    refresh,
  };
}
