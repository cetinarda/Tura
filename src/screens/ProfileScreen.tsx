import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { useTuraStore } from '../store/useStore';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';
import nagualsData from '../data/naguals.json';

const ELEMENTS = ['ateş', 'su', 'toprak', 'hava'] as const;
const ELEMENT_EMOJIS: Record<string, string> = {
  ateş: '🔥', su: '💧', toprak: '🌿', hava: '🌬️'
};

const BADGES = [
  { id: 'b001', title: 'Yol Başlangıcı', desc: 'İlk 7 okuma', emoji: '🌙', required: 7 },
  { id: 'b002', title: 'Ateş Dervişi', desc: '21 gün silsile', emoji: '🔥', required: 21 },
  { id: 'b003', title: 'Mesnevi Yolcusu', desc: '30 okuma', emoji: '🌹', required: 30 },
  { id: 'b004', title: 'Tesbih Tamamlandı', desc: '33 taş görüldü', emoji: '📿', required: 33 },
  { id: 'b005', title: 'Hak Dostu', desc: '100 okuma', emoji: '✦', required: 100 },
  { id: 'b006', title: 'Işık Yolcusu', desc: '365 okuma', emoji: '☀️', required: 365 },
];

const LEVELS = [
  { min: 1, title: 'Talip', desc: 'Yolu yeni keşfediyor' },
  { min: 2, title: 'Mürit', desc: 'Öğrenmeye adandı' },
  { min: 3, title: 'Derviş', desc: 'Yolda ilerledi' },
  { min: 5, title: 'Eren', desc: 'Manevi olgunlaştı' },
  { min: 8, title: 'Veli', desc: 'Hakikat ehli' },
  { min: 12, title: 'Pir', desc: 'Rehber ruh' },
];

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const { profile, isNewUser, createProfile, stats, getTopStat, getLevelTitle } = useTuraStore();
  const [showOnboarding, setShowOnboarding] = useState(isNewUser);
  const [name, setName] = useState('');
  const [element, setElement] = useState<typeof ELEMENTS[number]>('ateş');
  const [step, setStep] = useState(1);

  const topStoneId = getTopStat(stats.stoneCounts);
  const topAnimalId = getTopStat(stats.animalCounts);
  const topSource = getTopStat(stats.sourceCounts);
  const topNagualId = getTopStat(stats.nagualCounts || {});

  const topStone = topStoneId ? stonesData.find(s => s.id === topStoneId) : null;
  const topAnimal = topAnimalId ? animalsData.find(a => a.id === topAnimalId) : null;
  const topNagual = topNagualId ? nagualsData.find(n => n.id === topNagualId) : null;

  const totalReadings = profile?.totalReadings || 0;
  const streak = profile?.streak || 0;
  const level = profile?.level || 1;
  const levelTitle = getLevelTitle(level);

  const levelProgress = () => {
    const nextLevelAt = level * 7;
    const currentLevelAt = (level - 1) * 7;
    const progress = (totalReadings - currentLevelAt) / (nextLevelAt - currentLevelAt);
    return Math.min(Math.max(progress, 0), 1);
  };

  const handleCreateProfile = async () => {
    if (step === 1 && name.trim().length > 0) {
      setStep(2);
    } else if (step === 2) {
      await createProfile(name.trim(), element);
      setShowOnboarding(false);
    }
  };

  if (showOnboarding || isNewUser) {
    return (
      <View style={[styles.container, styles.onboarding, { paddingTop: insets.top }]}>
        <Text style={styles.onboardingEmoji}>🌙</Text>
        <Text style={styles.onboardingTitle}>Hoş Geldin</Text>
        <Text style={styles.onboardingSubtitle}>
          Anadolu'nun kadim geleneğinden günlük rehberlik
        </Text>

        {step === 1 ? (
          <>
            <Text style={styles.onboardingQuestion}>Adın nedir, yolcu?</Text>
            <TextInput
              style={styles.nameInput}
              value={name}
              onChangeText={setName}
              placeholder="Adını yaz..."
              placeholderTextColor={Colors.textMuted}
              autoFocus
            />
          </>
        ) : (
          <>
            <Text style={styles.onboardingQuestion}>Hangi unsura yakın hissediyorsun?</Text>
            <View style={styles.elementsGrid}>
              {ELEMENTS.map(el => (
                <TouchableOpacity
                  key={el}
                  style={[
                    styles.elementBtn,
                    element === el && { borderColor: Colors.gold, backgroundColor: Colors.goldGlow }
                  ]}
                  onPress={() => setElement(el)}
                >
                  <Text style={styles.elementEmoji}>{ELEMENT_EMOJIS[el]}</Text>
                  <Text style={[styles.elementName, { color: element === el ? Colors.gold : Colors.textSecondary }]}>
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        <TouchableOpacity
          style={[styles.onboardingBtn, { opacity: step === 1 && name.trim().length === 0 ? 0.4 : 1 }]}
          onPress={handleCreateProfile}
          disabled={step === 1 && name.trim().length === 0}
        >
          <Text style={styles.onboardingBtnText}>
            {step === 1 ? 'Devam Et' : 'Yola Çık'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!profile) return null;

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.avatarRing}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>{ELEMENT_EMOJIS[profile.element || 'ateş']}</Text>
          </View>
        </View>
        <Text style={styles.heroName}>{profile.name}</Text>
        <Text style={styles.heroLevel}>{levelTitle}</Text>
        <Text style={styles.heroElement}>
          {profile.element || 'Unsur seçilmedi'}
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{totalReadings}</Text>
          <Text style={styles.statLabel}>Okuma</Text>
        </View>
        <View style={[styles.statBox, styles.statBoxCenter]}>
          <Text style={[styles.statValue, { color: Colors.ember }]}>{streak}</Text>
          <Text style={styles.statLabel}>Gün Silsile</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{level}</Text>
          <Text style={styles.statLabel}>Seviye</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Seviye</Text>
          <Text style={styles.sectionMeta}>{levelTitle} → {getLevelTitle(level + 1)}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${levelProgress() * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {totalReadings} / {level * 7}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ruhsal Harita</Text>

        {topSource && (
          <View style={[styles.spiritCard, { borderColor: Colors.gold }]}>
            <Text style={styles.spiritEmoji}>📜</Text>
            <View style={styles.spiritInfo}>
              <Text style={styles.spiritLabel}>Rehber Şair</Text>
              <Text style={[styles.spiritValue, { color: Colors.gold }]}>{topSource}</Text>
              <Text style={styles.spiritCount}>
                {stats.sourceCounts[topSource] || 0} kez
              </Text>
            </View>
          </View>
        )}

        {topStone && (
          <View style={[styles.spiritCard, { borderColor: Colors.purple }]}>
            <Text style={styles.spiritEmoji}>{topStone.emoji}</Text>
            <View style={styles.spiritInfo}>
              <Text style={styles.spiritLabel}>Koruyucu Taş</Text>
              <Text style={[styles.spiritValue, { color: Colors.purpleLight }]}>{topStone.name}</Text>
              <Text style={styles.spiritCount}>
                {stats.stoneCounts[topStone.id] || 0} kez · {topStone.chakra}
              </Text>
            </View>
          </View>
        )}

        {topAnimal && (
          <View style={[styles.spiritCard, { borderColor: Colors.teal }]}>
            <Text style={styles.spiritEmoji}>{topAnimal.emoji}</Text>
            <View style={styles.spiritInfo}>
              <Text style={styles.spiritLabel}>Totem Hayvan</Text>
              <Text style={[styles.spiritValue, { color: Colors.tealLight }]}>{topAnimal.name}</Text>
              <Text style={styles.spiritCount}>
                {stats.animalCounts[topAnimal.id] || 0} kez
              </Text>
            </View>
          </View>
        )}

        {topNagual && (
          <View style={[styles.spiritCard, { borderColor: Colors.ember }]}>
            <Text style={styles.spiritEmoji}>{topNagual.emoji}</Text>
            <View style={styles.spiritInfo}>
              <Text style={styles.spiritLabel}>Nagual Rehber</Text>
              <Text style={[styles.spiritValue, { color: Colors.emberLight }]}>{topNagual.name}</Text>
              <Text style={styles.spiritCount}>
                {(stats.nagualCounts || {})[topNagual.id] || 0} kez · {topNagual.aspect}
              </Text>
            </View>
          </View>
        )}

        {totalReadings === 0 && (
          <Text style={styles.emptyHint}>İlk kartını aç, ruhsal haritanız oluşmaya başlasın.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rozetler</Text>
        <View style={styles.badgesGrid}>
          {BADGES.map(badge => {
            const earned = totalReadings >= badge.required || streak >= badge.required;
            return (
              <View
                key={badge.id}
                style={[
                  styles.badgeCard,
                  earned ? { borderColor: Colors.gold, backgroundColor: Colors.goldGlow } : styles.badgeLocked
                ]}
              >
                <Text style={[styles.badgeEmoji, !earned && styles.badgeLocked]}>
                  {earned ? badge.emoji : '🔒'}
                </Text>
                <Text style={[styles.badgeTitle, { color: earned ? Colors.gold : Colors.textMuted }]}>
                  {badge.title}
                </Text>
                <Text style={styles.badgeDesc}>{badge.desc}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: Spacing.xxxl,
  },
  onboarding: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  onboardingEmoji: { fontSize: 48, marginBottom: Spacing.sm },
  onboardingTitle: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    letterSpacing: 1,
  },
  onboardingSubtitle: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.6,
  },
  onboardingQuestion: {
    fontSize: Typography.size.lg,
    color: Colors.gold,
    marginTop: Spacing.xl,
    textAlign: 'center',
    fontWeight: Typography.weight.medium,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    fontSize: Typography.size.lg,
    color: Colors.textPrimary,
    backgroundColor: Colors.backgroundCard,
    width: '100%',
    textAlign: 'center',
  },
  elementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
  elementBtn: {
    width: 130,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.backgroundCard,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.divider,
    gap: Spacing.xs,
  },
  elementEmoji: { fontSize: 28 },
  elementName: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    letterSpacing: 0.5,
  },
  onboardingBtn: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.gold,
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.round,
  },
  onboardingBtnText: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.semibold,
    color: Colors.textOnGold,
    letterSpacing: 0.5,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
  },
  avatarRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 1,
    borderColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.backgroundCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 32 },
  heroName: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
  },
  heroLevel: {
    fontSize: Typography.size.xs,
    color: Colors.gold,
    letterSpacing: 2,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  heroElement: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 4,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.divider,
    overflow: 'hidden',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  statBoxCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.divider,
  },
  statValue: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
  },
  statLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
    letterSpacing: 0.3,
  },
  section: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    letterSpacing: 0.5,
    marginBottom: Spacing.md,
  },
  sectionMeta: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.round,
    overflow: 'hidden',
    marginBottom: Spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.gold,
    borderRadius: BorderRadius.round,
  },
  progressText: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
  spiritCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    gap: Spacing.md,
  },
  spiritEmoji: { fontSize: 28 },
  spiritInfo: { flex: 1 },
  spiritLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  spiritValue: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.semibold,
    marginVertical: 2,
  },
  spiritCount: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
  },
  emptyHint: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: Spacing.md,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  badgeCard: {
    width: '30%',
    flex: 1,
    minWidth: 90,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.divider,
    gap: 4,
  },
  badgeLocked: {
    opacity: 0.4,
  },
  badgeEmoji: { fontSize: 22 },
  badgeTitle: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    textAlign: 'center',
  },
  badgeDesc: {
    fontSize: 10,
    color: Colors.textMuted,
    textAlign: 'center',
  },
});