import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { useTuraStore } from '../store/useStore';
import quotesData from '../data/quotes.json';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';

type FilterType = 'all' | 'quote' | 'stone' | 'animal';

const FILTERS = [
  { key: 'all' as FilterType, label: 'Tümü', emoji: '🌀', color: Colors.gold },
  { key: 'quote' as FilterType, label: 'Mesaj', emoji: '📜', color: Colors.gold },
  { key: 'stone' as FilterType, label: 'Taş', emoji: '💎', color: Colors.purple },
  { key: 'animal' as FilterType, label: 'Hayvan', emoji: '🐺', color: Colors.teal },
];

export function ArchiveScreen() {
  const insets = useSafeAreaInsets();
  const { archive, stats, getTopStat } = useTuraStore();
  const [filter, setFilter] = useState<FilterType>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const topStoneId = getTopStat(stats.stoneCounts);
  const topAnimalId = getTopStat(stats.animalCounts);
  const topSource = getTopStat(stats.sourceCounts);
  const topStone = topStoneId ? stonesData.find(s => s.id === topStoneId) : null;
  const topAnimal = topAnimalId ? animalsData.find(a => a.id === topAnimalId) : null;

  const formattedDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

  const renderEntry = ({ item }: { item: typeof archive[0] }) => {
    const quote = quotesData.find(q => q.id === item.quoteId);
    const stone = stonesData.find(s => s.id === item.stoneId);
    const animal = animalsData.find(a => a.id === item.animalId);
    const isExpanded = expanded === item.date;
    return (
      <TouchableOpacity style={styles.entryCard} onPress={() => setExpanded(isExpanded ? null : item.date)} activeOpacity={0.85}>
        <View style={styles.entryHeader}>
          <Text style={styles.entryDate}>{formattedDate(item.date)}</Text>
          <Text style={styles.entryChevron}>{isExpanded ? '▲' : '▼'}</Text>
        </View>
        <View style={styles.entryPills}>
          {(filter === 'all' || filter === 'quote') && <View style={[styles.pill, { borderColor: Colors.gold }]}><Text style={styles.pillEmoji}>📜</Text><Text style={[styles.pillText, { color: Colors.gold }]} numberOfLines={1}>{quote?.source || '—'}</Text></View>}
          {(filter === 'all' || filter === 'stone') && <View style={[styles.pill, { borderColor: Colors.purple }]}><Text style={styles.pillEmoji}>{stone?.emoji || '💎'}</Text><Text style={[styles.pillText, { color: Colors.purpleLight }]} numberOfLines={1}>{stone?.name || '—'}</Text></View>}
          {(filter === 'all' || filter === 'animal') && <View style={[styles.pill, { borderColor: Colors.teal }]}><Text style={styles.pillEmoji}>{animal?.emoji || '🐾'}</Text><Text style={[styles.pillText, { color: Colors.tealLight }]} numberOfLines={1}>{animal?.name || '—'}</Text></View>}
        </View>
        {isExpanded && (
          <View style={styles.entryExpanded}>
            {quote && (filter === 'all' || filter === 'quote') && <View style={styles.expandSection}><Text style={[styles.expandLabel, { color: Colors.gold }]}>📜 Günün Mesajı</Text><Text style={styles.expandText}>❝{quote.text}❞</Text><Text style={styles.expandSource}>— {quote.source}</Text></View>}
            {stone && (filter === 'all' || filter === 'stone') && <View style={styles.expandSection}><Text style={[styles.expandLabel, { color: Colors.purpleLight }]}>{stone.emoji} {stone.name}</Text><Text style={styles.expandText}>{stone.dailyMessage}</Text></View>}
            {animal && (filter === 'all' || filter === 'animal') && <View style={styles.expandSection}><Text style={[styles.expandLabel, { color: Colors.tealLight }]}>{animal.emoji} {animal.name}</Text><Text style={styles.expandText}>{animal.dailyMessage}</Text></View>}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Arşiv</Text>
        <Text style={styles.subtitle}>{archive.length} okuma</Text>
      </View>
      {archive.length > 0 && (
        <View style={styles.reportCard}>
          <Text style={styles.reportTitle}>✦ Ruhsal Haritanız ✦</Text>
          <View style={styles.reportRow}>
            {topSource && <View style={styles.reportItem}><Text style={styles.reportEmoji}>📜</Text><Text style={styles.reportLabel}>Rehber Şair</Text><Text style={[styles.reportValue, { color: Colors.gold }]}>{topSource}</Text></View>}
            {topStone && <View style={styles.reportItem}><Text style={styles.reportEmoji}>{topStone.emoji}</Text><Text style={styles.reportLabel}>Koruyucu Taş</Text><Text style={[styles.reportValue, { color: Colors.purpleLight }]}>{topStone.name}</Text></View>}
            {topAnimal && <View style={styles.reportItem}><Text style={styles.reportEmoji}>{topAnimal.emoji}</Text><Text style={styles.reportLabel}>Totem Hayvan</Text><Text style={[styles.reportValue, { color: Colors.tealLight }]}>{topAnimal.name}</Text></View>}
          </View>
        </View>
      )}
      <View style={styles.filterRow}>
        {FILTERS.map(f => (
          <TouchableOpacity key={f.key} style={[styles.filterBtn, filter === f.key && { borderColor: f.color, backgroundColor: Colors.backgroundCard }]} onPress={() => setFilter(f.key)}>
            <Text style={styles.filterEmoji}>{f.emoji}</Text>
            <Text style={[styles.filterLabel, { color: filter === f.key ? f.color : Colors.textMuted }]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {archive.length === 0 ? (
        <View style={styles.empty}><Text style={styles.emptyEmoji}>🌙</Text><Text style={styles.emptyText}>Henüz okuma yok.</Text><Text style={styles.emptySubtext}>Ana ekrandan kartını aç.</Text></View>
      ) : (
        <FlatList data={archive} keyExtractor={item => item.date} renderItem={renderEntry} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md },
  title: { fontSize: Typography.size.xxxl, fontWeight: Typography.weight.bold, color: Colors.textPrimary, letterSpacing: 1 },
  subtitle: { fontSize: Typography.size.sm, color: Colors.textMuted, marginTop: 2 },
  reportCard: { marginHorizontal: Spacing.lg, marginBottom: Spacing.md, backgroundColor: Colors.backgroundCard, borderRadius: BorderRadius.lg, padding: Spacing.md, borderWidth: 1, borderColor: Colors.cardBorder },
  reportTitle: { fontSize: Typography.size.sm, color: Colors.gold, textAlign: 'center', letterSpacing: 3, marginBottom: Spacing.md },
  reportRow: { flexDirection: 'row', justifyContent: 'space-around' },
  reportItem: { alignItems: 'center', flex: 1 },
  reportEmoji: { fontSize: 24, marginBottom: 4 },
  reportLabel: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 0.5, marginBottom: 2 },
  reportValue: { fontSize: Typography.size.xs, fontWeight: Typography.weight.semibold, textAlign: 'center' },
  filterRow: { flexDirection: 'row', paddingHorizontal: Spacing.md, marginBottom: Spacing.md, gap: Spacing.xs },
  filterBtn: { flex: 1, paddingVertical: Spacing.sm, borderRadius: BorderRadius.md, backgroundColor: Colors.backgroundSecondary, alignItems: 'center', borderWidth: 1, borderColor: 'transparent' },
  filterEmoji: { fontSize: 14 },
  filterLabel: { fontSize: Typography.size.xs, marginTop: 2 },
  list: { paddingHorizontal: Spacing.md, paddingBottom: Spacing.xxxl },
  entryCard: { backgroundColor: Colors.backgroundCard, borderRadius: BorderRadius.md, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.divider },
  entryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.sm },
  entryDate: { fontSize: Typography.size.sm, color: Colors.textPrimary, fontWeight: Typography.weight.medium },
  entryChevron: { fontSize: 10, color: Colors.textMuted },
  entryPills: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xs },
  pill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.round, borderWidth: 1, gap: 4 },
  pillEmoji: { fontSize: 12 },
  pillText: { fontSize: Typography.size.xs, letterSpacing: 0.3 },
  entryExpanded: { marginTop: Spacing.md, borderTopWidth: 1, borderTopColor: Colors.divider, paddingTop: Spacing.md, gap: Spacing.md },
  expandSection: { gap: 4 },
  expandLabel: { fontSize: Typography.size.sm, fontWeight: Typography.weight.semibold, letterSpacing: 0.5 },
  expandText: { fontSize: Typography.size.sm, color: Colors.textSecondary, lineHeight: Typography.size.sm * 1.6, fontStyle: 'italic' },
  expandSource: { fontSize: Typography.size.xs, color: Colors.gold, marginTop: 2 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: Spacing.sm },
  emptyEmoji: { fontSize: 48 },
  emptyText: { fontSize: Typography.size.lg, color: Colors.textPrimary, fontWeight: Typography.weight.medium },
  emptySubtext: { fontSize: Typography.size.sm, color: Colors.textMuted },
});
