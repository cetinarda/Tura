import { useMemo } from 'react';
import { useTuraStore } from '../store/useStore';
import type { Lang } from './index';

import animalsData from '../data/animals.json';
import quotesData from '../data/quotes.json';
import nagualsData from '../data/naguals.json';
import stonesData from '../data/stones.json';
import philosophersData from '../data/philosophers.json';

const EN_SUFFIX_FIELDS = [
  'name', 'element', 'symbolism', 'anatolianMeaning', 'dailyMessage', 'guidance',
  'text', 'aspect', 'origin', 'tradition', 'chakra', 'properties', 'plant',
  'howToUse', 'affirmation', 'category',
] as const;

export function localize<T extends Record<string, any>>(item: T, lang: Lang): T {
  if (lang === 'tr' || !item) return item;
  const result: any = { ...item };
  for (const field of EN_SUFFIX_FIELDS) {
    const enKey = `${field}En`;
    if (enKey in item && (item as any)[enKey] != null) {
      result[field] = (item as any)[enKey];
    }
  }
  return result as T;
}

export function localizeAll<T extends Record<string, any>>(items: T[], lang: Lang): T[] {
  if (lang === 'tr') return items;
  return items.map(i => localize(i, lang));
}

export function useLang(): Lang {
  const { language } = useTuraStore();
  return language ?? 'tr';
}

export function useLocalizedAnimals() {
  const lang = useLang();
  return useMemo(() => localizeAll(animalsData as any[], lang), [lang]);
}

export function useLocalizedQuotes() {
  const lang = useLang();
  return useMemo(() => localizeAll(quotesData as any[], lang), [lang]);
}

export function useLocalizedNaguals() {
  const lang = useLang();
  return useMemo(() => localizeAll(nagualsData as any[], lang), [lang]);
}

export function useLocalizedStones() {
  const lang = useLang();
  return useMemo(() => localizeAll(stonesData as any[], lang), [lang]);
}

export function useLocalizedPhilosophers() {
  const lang = useLang();
  return useMemo(() => {
    if (lang === 'tr') return philosophersData as Record<string, any>;
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(philosophersData)) {
      result[k] = localize(v as any, lang);
    }
    return result;
  }, [lang]);
}
