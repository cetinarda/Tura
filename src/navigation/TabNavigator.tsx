import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { HomeScreen } from '../screens/HomeScreen';
import { AnimalsHubScreen } from '../screens/AnimalsHubScreen';
import { ArchiveScreen } from '../screens/ArchiveScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { GlossaryFAB } from '../components/HelpButton';

type Tab = 'home' | 'animals' | 'archive' | 'profile';

const TABS: { key: Tab; label: string; symbol: string; activeColor: string }[] = [
  { key: 'home',    label: 'Bugün',     symbol: '✦',  activeColor: Colors.gold },
  { key: 'animals', label: 'Hayvanlar', symbol: '⊕',  activeColor: Colors.tealLight },
  { key: 'archive', label: 'Arşiv',     symbol: '◈',  activeColor: Colors.purple },
  { key: 'profile', label: 'Profil',    symbol: '⊙',  activeColor: Colors.sakinLavender },
];

export function TabNavigator() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const insets = useSafeAreaInsets();

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigateToProfile={() => setActiveTab('profile')} />;
      case 'animals':
        return <AnimalsHubScreen />;
      case 'archive':
        return <ArchiveScreen />;
      case 'profile':
        return <ProfileScreen />;
    }
  };

  return (
    <View style={styles.webRoot}>
      <View style={styles.container}>
        <View style={styles.screen}>{renderScreen()}</View>

        <GlossaryFAB />

        <View style={[styles.tabBar, { paddingBottom: insets.bottom + 4 }]}>
          {TABS.map(tab => {
            const isActive = activeTab === tab.key;
            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabItem}
                onPress={() => setActiveTab(tab.key)}
                activeOpacity={0.7}
              >
                <View style={[styles.tabIndicator, isActive && { backgroundColor: tab.activeColor }]} />
                <Text style={[
                  styles.tabSymbol,
                  { color: isActive ? tab.activeColor : Colors.textMuted },
                  !isActive && styles.tabSymbolInactive,
                ]}>
                  {tab.symbol}
                </Text>
                <Text style={[
                  styles.tabLabel,
                  { color: isActive ? tab.activeColor : Colors.textMuted },
                ]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const MAX_W = 480;

const styles = StyleSheet.create({
  webRoot: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#070510' : Colors.background,
    alignItems: Platform.OS === 'web' ? 'center' : undefined,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: '100%',
    maxWidth: Platform.OS === 'web' ? MAX_W : undefined,
  },
  screen: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundSecondary,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    paddingTop: Spacing.sm,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: Spacing.xs,
    position: 'relative',
  },
  tabIndicator: {
    position: 'absolute',
    top: -Spacing.sm - 1,
    width: 24,
    height: 2,
    borderRadius: BorderRadius.round,
    backgroundColor: 'transparent',
  },
  tabSymbol: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 2,
    fontWeight: '300',
  },
  tabSymbolInactive: {
    opacity: 0.35,
  },
  tabLabel: {
    fontSize: Typography.size.xs,
    letterSpacing: 0.3,
    fontWeight: Typography.weight.medium,
  },
});
