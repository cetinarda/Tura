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
import animalsData from '../data/animals.json';
import nagualsData from '../data/naguals.json';

type Panel = 'hub' | 'library' | 'finder' | 'nagual' | 'myths';

interface PanelDef {
  key: Exclude<Panel, 'hub'>;
  title: string;
  subtitle: string;
  description: string;
  symbol: string;
  color: string;
  helpKey?: string;
}

const PANELS: PanelDef[] = [
  {
    key: 'library',
    title: 'Hayvanlar Kitabı',
    subtitle: 'Tüm hayvanlar, alfabetik',
    description: `${animalsData.length} hayvanın derin rehberliği — Anadolu'dan Mısır'a, Jung'tan Şamanizme.`,
    symbol: '⊕',
    color: Colors.teal,
    helpKey: 'totem',
  },
  {
    key: 'finder',
    title: 'Rehber Hayvanını Bul',
    subtitle: 'Sorularla veya doğum tarihinle',
    description: 'Kişiliğinin ve enerjinin yansıdığı totem hayvanını keşfet.',
    symbol: '✦',
    color: Colors.gold,
    helpKey: 'rehber',
  },
  {
    key: 'nagual',
    title: 'Nagual — Bu Haftanın Rehberi',
    subtitle: 'Dönemsel yol gösteren',
    description: 'Şu an seninle olan geçici rehberin. Her hafta değişir.',
    symbol: '◈',
    color: Colors.ember,
    helpKey: 'nagual',
  },
  {
    key: 'myths',
    title: 'Mitler Sözlüğü',
    subtitle: 'Sembolik güçler',
    description: `Ruhun karşılaştığı ${nagualsData.length} sembolik güç — Gölge, Ayna, Şimşek, Eşik... her biri ayrı bir ders.`,
    symbol: '⚡',
    color: Colors.sakinLavender,
    helpKey: 'mit',
  },
];

export function AnimalsHubScreen() {
  const insets = useSafeAreaInsets();
  const { profile } = useTuraStore();
  const [panel, setPanel] = useState<Panel>('hub');

  if (panel === 'library') return <AnimalLibraryScreen onClose={() => setPanel('hub')} />;
  if (panel === 'nagual')  return <NagualScreen onClose={() => setPanel('hub')} />;
  if (panel === 'myths')   return <MythsScreen onClose={() => setPanel('hub')} />;
  if (panel === 'finder') {
    return (
      <AnimalFinderScreen
        onClose={() => setPanel('hub')}
        prefillBirthDate={profile?.birthDate}
      />
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>SAKİN AİLESİ</Text>
          <Text style={styles.title}>Hayvan Rehberi</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>
            Anadolu'dan dünyaya — totem, nagual,{'\n'}mit ve gölge.
          </Text>
        </View>

        <View style={styles.panels}>
          {PANELS.map(p => (
            <TouchableOpacity
              key={p.key}
              style={[styles.panel, { borderColor: p.color + '50' }]}
              onPress={() => setPanel(p.key)}
              activeOpacity={0.85}
            >
              <View style={styles.panelHead}>
                <View style={[styles.symbolBox, { borderColor: p.color + '40', backgroundColor: p.color + '12' }]}>
                  <Text style={[styles.symbol, { color: p.color }]}>{p.symbol}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.panelTitleRow}>
                    <Text style={styles.panelTitle}>{p.title}</Text>
                    {p.helpKey && <HelpButton termKey={p.helpKey} />}
                  </View>
                  <Text style={[styles.panelSubtitle, { color: p.color + 'CC' }]}>{p.subtitle}</Text>
                </View>
                <Text style={[styles.arrow, { color: p.color }]}>→</Text>
              </View>
              <Text style={styles.panelDesc}>{p.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.footer}>
          Her hayvanın derinine in — bir hayvan,{'\n'}bin tradisyon.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.xxxl },
  header: { alignItems: 'center', paddingVertical: Spacing.xl },
  eyebrow: { fontSize: 10, color: Colors.sakinLavender, letterSpacing: 4, marginBottom: Spacing.sm },
  title: { fontSize: Typography.size.xxxl, fontWeight: Typography.weight.light, color: Colors.textPrimary, letterSpacing: 3 },
  divider: { width: 32, height: 1, backgroundColor: Colors.gold, opacity: 0.4, marginVertical: Spacing.md },
  subtitle: { fontSize: Typography.size.sm, color: Colors.textMuted, textAlign: 'center', letterSpacing: 0.5, lineHeight: Typography.size.sm * 1.7, fontStyle: 'italic' },
  panels: { gap: Spacing.md, marginVertical: Spacing.md },
  panel: { borderWidth: 1, borderRadius: BorderRadius.lg, padding: Spacing.lg, backgroundColor: Colors.backgroundCard },
  panelHead: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, marginBottom: Spacing.sm },
  symbolBox: { width: 48, height: 48, borderWidth: 1, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  symbol: { fontSize: 22 },
  panelTitle: { fontSize: Typography.size.md, fontWeight: Typography.weight.semibold, color: Colors.textPrimary, letterSpacing: 0.5 },
  panelTitleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  panelSubtitle: { fontSize: Typography.size.xs, letterSpacing: 0.5, marginTop: 2 },
  arrow: { fontSize: 20 },
  panelDesc: { fontSize: Typography.size.xs, color: Colors.textSecondary, lineHeight: Typography.size.xs * 1.8, fontWeight: Typography.weight.light, paddingLeft: 60 },
  footer: { fontSize: Typography.size.xs, color: Colors.textMuted, textAlign: 'center', letterSpacing: 1, lineHeight: Typography.size.xs * 1.8, marginTop: Spacing.xl, fontStyle: 'italic', opacity: 0.7 },
});
