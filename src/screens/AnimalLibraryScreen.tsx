import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import animalsData from '../data/animals.json';
import { AnimalDetailScreen } from './AnimalDetailScreen';

interface Props {
  onClose: () => void;
  embedded?: boolean;
}

type Animal = typeof animalsData[0];

export function AnimalLibraryScreen({ onClose, embedded }: Props) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Animal | null>(null);

  const sorted = useMemo(() => {
    return [...animalsData].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.symbolism.some(s => s.toLowerCase().includes(q)) ||
      a.element.toLowerCase().includes(q)
    );
  }, [query, sorted]);

  // Group by first letter
  const groups = useMemo(() => {
    const map = new Map<string, Animal[]>();
    for (const a of filtered) {
      const letter = a.name[0].toLocaleUpperCase('tr');
      const list = map.get(letter) || [];
      list.push(a);
      map.set(letter, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  if (selected) {
    return <AnimalDetailScreen animal={selected as any} onClose={() => setSelected(null)} />;
  }

  return (
    <View style={styles.root}>
      {!embedded && (
        <View style={[styles.topBar, { paddingTop: insets.top + Spacing.sm }]}>
          <TouchableOpacity onPress={onClose} hitSlop={12}>
            <Text style={styles.back}>← Geri</Text>
          </TouchableOpacity>
          <Text style={styles.familyTag}>SAKİN · HAYVAN</Text>
        </View>
      )}

      <View style={styles.header}>
        <Text style={styles.subtitle}>
          Anadolu'dan dünyaya · {animalsData.length} hayvan rehberi
        </Text>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>✦</Text>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="İsim, sembol veya unsur ile ara..."
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')} hitSlop={12}>
            <Text style={styles.clearBtn}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {groups.length === 0 && (
          <Text style={styles.empty}>Arama sonucu yok.</Text>
        )}
        {groups.map(([letter, items]) => (
          <View key={letter} style={styles.group}>
            <View style={styles.groupHead}>
              <View style={styles.groupDot} />
              <Text style={styles.groupLetter}>{letter}</Text>
              <View style={styles.groupLine} />
            </View>
            {items.map(animal => (
              <AnimalRow
                key={animal.id}
                animal={animal}
                onPress={() => setSelected(animal)}
              />
            ))}
          </View>
        ))}
        <View style={{ height: insets.bottom + Spacing.xl }} />
      </ScrollView>
    </View>
  );
}

function AnimalRow({ animal, onPress }: { animal: Animal; onPress: () => void }) {
  const [imgErr, setImgErr] = useState(false);
  const url = (animal as any).imageUrl as string | undefined;

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.rowImgWrap}>
        {url && !imgErr ? (
          <Image source={{ uri: url }} style={styles.rowImg} onError={() => setImgErr(true)} />
        ) : (
          <Text style={styles.rowEmoji}>{animal.emoji}</Text>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowName}>{animal.name}</Text>
        <Text style={styles.rowMeta}>
          {animal.element} · {animal.symbolism.slice(0, 2).join(' · ')}
        </Text>
      </View>
      <Text style={styles.rowArrow}>→</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  back: {
    fontSize: Typography.size.sm,
    color: Colors.tealLight,
    letterSpacing: 0.5,
  },
  familyTag: {
    fontSize: 9,
    color: Colors.textMuted,
    letterSpacing: 2,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  title: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.light,
    color: Colors.textPrimary,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    marginTop: 4,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginHorizontal: Spacing.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.backgroundCard,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    borderRadius: BorderRadius.round,
    marginBottom: Spacing.md,
  },
  searchIcon: {
    fontSize: 14,
    color: Colors.gold,
    opacity: 0.5,
  },
  searchInput: {
    flex: 1,
    fontSize: Typography.size.sm,
    color: Colors.textPrimary,
    padding: 0,
  },
  clearBtn: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    paddingHorizontal: Spacing.xs,
  },
  scroll: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xl },
  empty: {
    textAlign: 'center',
    color: Colors.textMuted,
    fontSize: Typography.size.sm,
    marginTop: Spacing.xl,
    fontStyle: 'italic',
  },
  group: { marginBottom: Spacing.lg },
  groupHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  groupDot: {
    width: 4, height: 4,
    borderRadius: 2,
    backgroundColor: Colors.tealLight,
  },
  groupLetter: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semibold,
    color: Colors.tealLight,
    letterSpacing: 2,
  },
  groupLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  rowImgWrap: {
    width: 44, height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: Colors.teal + '40',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.backgroundCard,
  },
  rowImg: { width: 44, height: 44, borderRadius: 22 },
  rowEmoji: { fontSize: 22 },
  rowName: {
    fontSize: Typography.size.md,
    color: Colors.textPrimary,
    letterSpacing: 0.3,
  },
  rowMeta: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  rowArrow: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
  },
});
