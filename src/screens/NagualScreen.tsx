import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import nagualsData from '../data/naguals.json';
import animalsData from '../data/animals.json';
import { useTuraStore } from '../store/useStore';
import { calcLifePath } from '../utils/numerology';
import { calcHDType } from '../utils/humanDesign';

interface Props { onClose: () => void; }
type Nagual = typeof nagualsData[0];
type Animal = typeof animalsData[0];

function getWeeklyNagual(): Nagual {
  const week = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  return nagualsData[week % nagualsData.length];
}

function getDaysRemaining(): number {
  const now = new Date();
  const day = now.getDay();
  const daysToMonday = (8 - day) % 7 || 7;
  return daysToMonday;
}

function getPersonalNagual(
  birthDate: string,
  element: string,
): { animal: Animal; lifePath: number; hdType: string; reason: string } | null {
  const pool = animalsData.filter(a => a.element === element);
  if (pool.length === 0) return null;

  const lifePath = calcLifePath(birthDate);
  const hdType = calcHDType(birthDate);
  const week = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));

  // Seed: life path anchors which animals in the pool resonate (modular offset),
  // week rotates slowly so the guide changes monthly-ish but stays consistent.
  const seed = (lifePath * 11 + week) % pool.length;
  const animal = pool[seed];

  const hdReasons: Record<string, string> = {
    'Jeneratör': 'yanıtlama gücünü',
    'Manifesting Jeneratör': 'çok boyutlu enerjini',
    'Projektör': 'yönlendirme sezgini',
    'Manifestor': 'başlatma gücünü',
    'Reflektör': 'yansıtma bilgeliğini',
  };
  const hdReason = hdReasons[hdType] || 'içsel gücünü';

  const reason = `${element.charAt(0).toUpperCase() + element.slice(1)} unsuru · Yaşam yolu ${lifePath} · ${hdType} tipi — bu dönemde ${hdReason} desteklemek için seninle.`;

  return { animal, lifePath, hdType, reason };
}

export function NagualScreen({ onClose }: Props) {
  const insets = useSafeAreaInsets();
  const { profile } = useTuraStore();
  const [nagual] = useState<Nagual>(() => getWeeklyNagual());
  const [showAll, setShowAll] = useState(false);
  const daysLeft = getDaysRemaining();

  const personal = useMemo(() => {
    if (!profile?.birthDate || !profile?.element) return null;
    return getPersonalNagual(profile.birthDate, profile.element);
  }, [profile?.birthDate, profile?.element]);

  return (
    <View style={styles.root}>
      <View style={[styles.topBar, { paddingTop: insets.top + Spacing.sm }]}>
        <TouchableOpacity onPress={onClose} hitSlop={12}>
          <Text style={styles.back}>← Geri</Text>
        </TouchableOpacity>
        <Text style={styles.familyTag}>SAKİN · NAGUAL</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Nagual — Dönemsel Rehber</Text>
          <Text style={styles.introText}>
            Totem hayvanın seninle doğar, ömür boyu kalır. Nagual ise belirli bir
            döneminde sana eşlik eden geçici rehberdir. Bir sınav, bir dönüşüm,
            bir kriz anında yanına gelir. Görevini tamamlayınca yerini başka bir
            rehbere bırakır.
          </Text>
        </View>

        {/* Universal weekly nagual */}
        <View style={[styles.heroCard, { borderColor: Colors.ember + '60' }]}>
          <Text style={styles.weekTag}>BU HAFTA · EVRENSEL</Text>
          <Text style={styles.heroEmoji}>{nagual.emoji}</Text>
          <Text style={styles.heroName}>{nagual.name}</Text>
          <Text style={styles.heroAspect}>{(nagual as any).aspect}</Text>
          <View style={styles.divider} />
          <Text style={styles.dailyMsg}>{(nagual as any).dailyMessage}</Text>
          <View style={[styles.guideBox, { borderColor: Colors.ember + '40' }]}>
            <Text style={styles.guideLabel}>BU DÖNEMDE</Text>
            <Text style={styles.guideText}>{(nagual as any).guidance}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{nagual.element.toUpperCase()}</Text>
            <View style={styles.metaDot} />
            <Text style={styles.metaText}>{daysLeft} gün kaldı</Text>
          </View>
        </View>

        {/* Personal nagual */}
        {personal ? (
          <View style={[styles.personalCard, { borderColor: Colors.teal + '60' }]}>
            <Text style={styles.personalTag}>KİŞİSEL REHBERİM</Text>
            <Text style={styles.heroEmoji}>{personal.animal.emoji}</Text>
            <Text style={styles.heroName}>{personal.animal.name}</Text>
            <Text style={[styles.heroAspect, { color: Colors.tealLight }]}>
              {personal.animal.symbolism.slice(0, 2).join(' · ').toUpperCase()}
            </Text>
            <View style={[styles.divider, { backgroundColor: Colors.teal }]} />
            <Text style={styles.dailyMsg}>{personal.animal.dailyMessage}</Text>
            <View style={[styles.guideBox, { borderColor: Colors.teal + '40' }]}>
              <Text style={[styles.guideLabel, { color: Colors.tealLight }]}>REHBERLİK</Text>
              <Text style={styles.guideText}>{personal.animal.guidance}</Text>
            </View>
            <View style={[styles.reasonBox, { borderColor: Colors.teal + '25' }]}>
              <Text style={styles.reasonText}>{personal.reason}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.lockedCard}>
            <Text style={styles.lockedEmoji}>✦</Text>
            <Text style={styles.lockedTitle}>Kişisel Rehberim</Text>
            <Text style={styles.lockedText}>
              Doğum haritana göre sana özel dönemsel bir rehber hayvan belirlemek için
              profil bilgilerini tamamla.{'\n\n'}
              Profil → Kişisel Harita bölümünden doğum tarihi ve unsurunu ekleyebilirsin.
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={() => setShowAll(v => !v)} style={styles.toggleAllBtn} activeOpacity={0.7}>
          <Text style={styles.toggleAllText}>
            {showAll ? '▲ Tüm Nagual\'leri Gizle' : `▼ Tüm Nagual\'leri Gör (${nagualsData.length})`}
          </Text>
        </TouchableOpacity>

        {showAll && (
          <View style={styles.allList}>
            {nagualsData.map(n => (
              <View key={n.id} style={[styles.miniCard, n.id === nagual.id && styles.miniCardActive]}>
                <Text style={styles.miniEmoji}>{n.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.miniName}>{n.name}</Text>
                  <Text style={styles.miniAspect}>{(n as any).aspect}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={{ height: insets.bottom + Spacing.xl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Spacing.lg, paddingBottom: Spacing.sm },
  back: { fontSize: Typography.size.sm, color: Colors.emberLight, letterSpacing: 0.5 },
  familyTag: { fontSize: 9, color: Colors.textMuted, letterSpacing: 2 },
  scroll: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
  intro: { marginBottom: Spacing.lg },
  introTitle: { fontSize: Typography.size.lg, fontWeight: Typography.weight.semibold, color: Colors.textPrimary, letterSpacing: 0.5, marginBottom: Spacing.sm },
  introText: { fontSize: Typography.size.sm, color: Colors.textSecondary, lineHeight: Typography.size.sm * 1.8, fontWeight: Typography.weight.light },
  heroCard: { borderWidth: 1, borderRadius: BorderRadius.lg, padding: Spacing.lg, alignItems: 'center', backgroundColor: Colors.backgroundCard, marginBottom: Spacing.lg },
  weekTag: { fontSize: 9, letterSpacing: 4, color: Colors.emberLight, marginBottom: Spacing.md },
  heroEmoji: { fontSize: 56, marginBottom: Spacing.sm },
  heroName: { fontSize: Typography.size.xxl, fontWeight: Typography.weight.light, color: Colors.textPrimary, letterSpacing: 1 },
  heroAspect: { fontSize: Typography.size.xs, color: Colors.emberLight, letterSpacing: 2, marginTop: 4, textTransform: 'uppercase' },
  divider: { width: 28, height: 1, backgroundColor: Colors.ember, opacity: 0.3, marginVertical: Spacing.md },
  dailyMsg: { fontSize: Typography.size.sm, color: Colors.textSecondary, textAlign: 'center', lineHeight: Typography.size.sm * 1.85, fontStyle: 'italic', fontWeight: Typography.weight.light, marginBottom: Spacing.md },
  guideBox: { borderWidth: 1, borderRadius: BorderRadius.sm, padding: Spacing.md, width: '100%', marginBottom: Spacing.md },
  guideLabel: { fontSize: 9, color: Colors.emberLight, letterSpacing: 2, marginBottom: 4 },
  guideText: { fontSize: Typography.size.sm, color: Colors.textPrimary, lineHeight: Typography.size.sm * 1.7 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  metaText: { fontSize: 10, color: Colors.textMuted, letterSpacing: 1.5, textTransform: 'uppercase' },
  metaDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: Colors.textMuted },
  personalCard: { borderWidth: 1, borderRadius: BorderRadius.lg, padding: Spacing.lg, alignItems: 'center', backgroundColor: Colors.backgroundCard, marginBottom: Spacing.lg },
  personalTag: { fontSize: 9, letterSpacing: 4, color: Colors.tealLight, marginBottom: Spacing.md },
  reasonBox: { borderWidth: 1, borderRadius: BorderRadius.sm, padding: Spacing.md, width: '100%', borderStyle: 'dashed' },
  reasonText: { fontSize: Typography.size.xs, color: Colors.textMuted, textAlign: 'center', lineHeight: Typography.size.xs * 1.8, fontStyle: 'italic' },
  lockedCard: { borderWidth: 1, borderStyle: 'dashed', borderColor: Colors.cardBorder, borderRadius: BorderRadius.lg, padding: Spacing.xl, alignItems: 'center', marginBottom: Spacing.lg },
  lockedEmoji: { fontSize: 28, color: Colors.teal, marginBottom: Spacing.sm },
  lockedTitle: { fontSize: Typography.size.md, color: Colors.textMuted, fontWeight: Typography.weight.semibold, letterSpacing: 1, marginBottom: Spacing.sm },
  lockedText: { fontSize: Typography.size.xs, color: Colors.textMuted, textAlign: 'center', lineHeight: Typography.size.xs * 1.85, fontStyle: 'italic' },
  toggleAllBtn: { paddingVertical: Spacing.md, alignItems: 'center' },
  toggleAllText: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 1.5 },
  allList: { gap: Spacing.sm, marginBottom: Spacing.xl },
  miniCard: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, padding: Spacing.md, backgroundColor: Colors.backgroundCard, borderRadius: BorderRadius.sm, borderWidth: 1, borderColor: Colors.cardBorder },
  miniCardActive: { borderColor: Colors.ember + '80', backgroundColor: Colors.ember + '15' },
  miniEmoji: { fontSize: 22 },
  miniName: { fontSize: Typography.size.sm, color: Colors.textPrimary, fontWeight: Typography.weight.semibold },
  miniAspect: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 0.5, marginTop: 2 },
});
