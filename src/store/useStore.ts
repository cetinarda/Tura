import { useState, useEffect, useCallback } from 'react';
import { useLanguage, type Lang } from '../i18n/LanguageContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';

export type ReadingType = 'quote' | 'stone' | 'animal' | 'nagual';

export interface DailyReading {
  date: string;
  quoteId: string;
  stoneId: string;
  animalId: string;
  nagualId: string;
  quoteSaved: boolean;
  stoneSaved: boolean;
  animalSaved: boolean;
  nagualSaved: boolean;
}

export interface UserProfile {
  name: string;
  fullName?: string;
  birthDate?: string;   // YYYY-MM-DD
  birthHour?: number;   // 0-23
  birthMinute?: number; // 0-59
  birthCity?: string;
  element?: 'ateş' | 'su' | 'toprak' | 'hava';
  hdTypeOverride?: string;
  createdAt: string;
  streak: number;
  lastOpenDate?: string;
  totalReadings: number;
  level: number;
}

export interface ArchiveEntry {
  date: string;
  quoteId: string;
  stoneId: string;
  animalId: string;
  nagualId: string;
}

export interface Stats {
  quoteCounts: Record<string, number>;
  stoneCounts: Record<string, number>;
  animalCounts: Record<string, number>;
  nagualCounts: Record<string, number>;
  sourceCounts: Record<string, number>;
}

const STORAGE_KEYS = {
  PROFILE: '@tura_profile',
  DAILY: '@tura_daily',
  ARCHIVE: '@tura_archive',
  STATS: '@tura_stats',
  LANGUAGE: '@tura_language',
};

const todayStr = () => new Date().toISOString().split('T')[0];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function useTuraStore() {
  const { language, setLanguage } = useLanguage();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [dailyReading, setDailyReading] = useState<DailyReading | null>(null);
  const [archive, setArchive] = useState<ArchiveEntry[]>([]);
  const [stats, setStats] = useState<Stats>({
    quoteCounts: {},
    stoneCounts: {},
    animalCounts: {},
    nagualCounts: {},
    sourceCounts: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(!isSupabaseConfigured);

  useEffect(() => {
    loadAll();
    if (!isSupabaseConfigured) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event: unknown, s: Session | null) => {
      setSession(s);
    });
    return () => { sub.subscription.unsubscribe(); };
  }, []);

  const signOut = useCallback(async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setSession(null);
  }, []);

  const loadAll = async () => {
    try {
      const [profileRaw, dailyRaw, archiveRaw, statsRaw] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.PROFILE),
        AsyncStorage.getItem(STORAGE_KEYS.DAILY),
        AsyncStorage.getItem(STORAGE_KEYS.ARCHIVE),
        AsyncStorage.getItem(STORAGE_KEYS.STATS),
      ]);

      if (!profileRaw) {
        setIsNewUser(true);
      } else {
        setProfile(JSON.parse(profileRaw));
      }

      if (dailyRaw) {
        const parsed: DailyReading = JSON.parse(dailyRaw);
        if (parsed.date === todayStr()) {
          setDailyReading(parsed);
        }
      }

      if (archiveRaw) setArchive(JSON.parse(archiveRaw));
      if (statsRaw) {
        const s = JSON.parse(statsRaw);
        setStats({ nagualCounts: {}, ...s });
      }
    } catch (e) {
      console.error('Load error:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const saveProfile = useCallback(async (p: UserProfile) => {
    setProfile(p);
    await AsyncStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(p));
  }, []);

  const createProfile = useCallback(async (
    name: string,
    element: UserProfile['element'],
    birthDate?: string,
    fullName?: string,
    birthHour?: number,
    birthMinute?: number,
    birthCity?: string,
  ) => {
    const p: UserProfile = {
      name,
      element,
      birthDate,
      fullName,
      birthHour,
      birthMinute,
      birthCity,
      createdAt: new Date().toISOString(),
      streak: 0,
      totalReadings: 0,
      level: 1,
    };
    await saveProfile(p);
    setIsNewUser(false);
  }, [saveProfile]);

  const updateBirthData = useCallback(async (
    fullName: string,
    birthDate: string,
    birthHour?: number,
    birthMinute?: number,
    birthCity?: string,
  ) => {
    if (!profile) return;
    await saveProfile({ ...profile, fullName, birthDate, birthHour, birthMinute, birthCity });
  }, [profile, saveProfile]);

  const updateHDType = useCallback(async (hdTypeOverride: string) => {
    if (!profile) return;
    await saveProfile({ ...profile, hdTypeOverride });
  }, [profile, saveProfile]);

  const generateDailyReading = useCallback(async (
    quoteIds: string[],
    stoneIds: string[],
    animalIds: string[],
    nagualIds: string[]
  ) => {
    const today = todayStr();
    const reading: DailyReading = {
      date: today,
      quoteId: pickRandom(quoteIds),
      stoneId: pickRandom(stoneIds),
      animalId: pickRandom(animalIds),
      nagualId: pickRandom(nagualIds),
      quoteSaved: false,
      stoneSaved: false,
      animalSaved: false,
      nagualSaved: false,
    };

    setDailyReading(reading);
    await AsyncStorage.setItem(STORAGE_KEYS.DAILY, JSON.stringify(reading));

    const entry: ArchiveEntry = {
      date: today,
      quoteId: reading.quoteId,
      stoneId: reading.stoneId,
      animalId: reading.animalId,
      nagualId: reading.nagualId,
    };
    const newArchive = [entry, ...archive.filter(a => a.date !== today)];
    setArchive(newArchive);
    await AsyncStorage.setItem(STORAGE_KEYS.ARCHIVE, JSON.stringify(newArchive));

    if (profile) {
      const last = profile.lastOpenDate;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      const newStreak = last === yesterdayStr ? profile.streak + 1 : 1;
      const updated: UserProfile = {
        ...profile,
        streak: newStreak,
        lastOpenDate: today,
        totalReadings: profile.totalReadings + 1,
        level: Math.floor((profile.totalReadings + 1) / 7) + 1,
      };
      await saveProfile(updated);
    }

    return reading;
  }, [archive, profile, saveProfile]);

  const updateStats = useCallback(async (
    quoteId: string,
    source: string,
    stoneId: string,
    animalId: string,
    nagualId: string
  ) => {
    const newStats: Stats = {
      quoteCounts: { ...stats.quoteCounts, [quoteId]: (stats.quoteCounts[quoteId] || 0) + 1 },
      stoneCounts: { ...stats.stoneCounts, [stoneId]: (stats.stoneCounts[stoneId] || 0) + 1 },
      animalCounts: { ...stats.animalCounts, [animalId]: (stats.animalCounts[animalId] || 0) + 1 },
      nagualCounts: { ...stats.nagualCounts, [nagualId]: (stats.nagualCounts[nagualId] || 0) + 1 },
      sourceCounts: { ...stats.sourceCounts, [source]: (stats.sourceCounts[source] || 0) + 1 },
    };
    setStats(newStats);
    await AsyncStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(newStats));
  }, [stats]);

  const getTopStat = useCallback((counts: Record<string, number>): string | null => {
    const entries = Object.entries(counts);
    if (entries.length === 0) return null;
    return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }, []);

  const getLevelTitle = useCallback((level: number): string => {
    const titles = ['Talip', 'Mürit', 'Derviş', 'Eren', 'Veli', 'Pir', 'Kutup'];
    return titles[Math.min(level - 1, titles.length - 1)];
  }, []);

  return {
    language,
    setLanguage,
    profile,
    dailyReading,
    archive,
    stats,
    isLoading,
    isNewUser,
    session,
    authReady,
    isAuthenticated: !!session || !isSupabaseConfigured,
    signOut,
    createProfile,
    saveProfile,
    updateBirthData,
    generateDailyReading,
    updateStats,
    getTopStat,
    getLevelTitle,
    updateHDType,
    todayStr,
  };
}
