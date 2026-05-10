import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import nagualsData from '../data/naguals.json';

interface Props { onClose: () => void; }
type Nagual = typeof nagualsData[0];

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

export function NagualScreen({ onClose }: Props) {
  const insets = useSafeAreaInsets();
  const [nagual] = useState<Nagual>(() => getWeeklyNagual());
  const [showAll, setShowAll] = useState(false);
  const daysLeft = getDaysRemaining();

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

        <View style={[styles.heroCard, { borderColor: Colors.ember + '60' }]}>
          <Text style={styles.weekTag}>BU HAFTA</Text>
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
  toggleAllBtn: { paddingVertical: Spacing.md, alignItems: 'center' },
  toggleAllText: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 1.5 },
  allList: { gap: Spacing.sm, marginBottom: Spacing.xl },
  miniCard: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, padding: Spacing.md, backgroundColor: Colors.backgroundCard, borderRadius: BorderRadius.sm, borderWidth: 1, borderColor: Colors.cardBorder },
  miniCardActive: { borderColor: Colors.ember + '80', backgroundColor: Colors.ember + '15' },
  miniEmoji: { fontSize: 22 },
  miniName: { fontSize: Typography.size.sm, color: Colors.textPrimary, fontWeight: Typography.weight.semibold },
  miniAspect: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 0.5, marginTop: 2 },
});
