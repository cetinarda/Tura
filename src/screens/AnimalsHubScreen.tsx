import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { HelpButton } from '../components/HelpButton';
import { AnimalLibraryScreen } from './AnimalLibraryScreen';
import { AnimalFinderScreen } from './AnimalFinderScreen';
import { NagualScreen } from './NagualScreen';
import { MythsScreen } from './MythsScreen';
import { useTuraStore } from '../store/useStore';

type Panel = 'library' | 'finder' | 'nagual' | 'myths';

interface PanelDef {
  key: Panel;
  title: string;
  symbol: string;
  color: string;
  helpKey?: string;
}

const PANELS: PanelDef[] = [
  { key: 'library', title: 'Hayvanlar', symbol: '⊕', color: Colors.tealLight,    helpKey: 'totem' },
  { key: 'finder',  title: 'Bul',       symbol: '✦', color: Colors.gold,         helpKey: 'rehber' },
  { key: 'nagual',  title: 'Nagual',    symbol: '◈', color: Colors.ember,        helpKey: 'nagual' },
  { key: 'myths',   title: 'Mitler',    symbol: '⚡', color: Colors.sakinLavender, helpKey: 'mit' },
];

export function AnimalsHubScreen() {
  const insets = useSafeAreaInsets();
  const { profile } = useTuraStore();
  const [panel, setPanel] = useState<Panel>('library');

  const active = PANELS.find(p => p.key === panel)!;
  const noClose = () => {};

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <View style={styles.headerBar}>
        <Text style={styles.eyebrow}>SAKİN · HAYVAN</Text>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{active.title}</Text>
          {active.helpKey && <HelpButton termKey={active.helpKey} />}
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
      >
        {PANELS.map(p => {
          const isActive = p.key === panel;
          return (
            <TouchableOpacity
              key={p.key}
              style={[
                styles.chip,
                isActive && {
                  borderColor: p.color,
                  backgroundColor: p.color + '18',
                },
              ]}
              onPress={() => setPanel(p.key)}
              activeOpacity={0.8}
            >
              <Text style={[styles.chipSymbol, { color: isActive ? p.color : Colors.textMuted }]}>
                {p.symbol}
              </Text>
              <Text style={[
                styles.chipLabel,
                { color: isActive ? p.color : Colors.textMuted },
                isActive && { fontWeight: Typography.weight.semibold },
              ]}>
                {p.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.divider} />

      <View style={styles.body}>
        {panel === 'library' && <AnimalLibraryScreen onClose={noClose} embedded />}
        {panel === 'finder'  && <AnimalFinderScreen  onClose={noClose} embedded prefillBirthDate={profile?.birthDate} />}
        {panel === 'nagual'  && <NagualScreen        onClose={noClose} embedded />}
        {panel === 'myths'   && <MythsScreen         onClose={noClose} embedded />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  headerBar: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.sm, paddingBottom: Spacing.xs },
  eyebrow: { fontSize: 9, color: Colors.sakinLavender, letterSpacing: 3, opacity: 0.7 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginTop: 4 },
  title: { fontSize: Typography.size.xl, fontWeight: Typography.weight.light, color: Colors.textPrimary, letterSpacing: 1 },
  chipRow: { paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, gap: Spacing.sm },
  chip: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.xs,
    borderWidth: 1, borderColor: Colors.cardBorder,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.backgroundCard,
  },
  chipSymbol: { fontSize: 13 },
  chipLabel: { fontSize: Typography.size.xs, letterSpacing: 0.8 },
  divider: { height: 1, backgroundColor: Colors.divider, opacity: 0.5 },
  body: { flex: 1 },
});
