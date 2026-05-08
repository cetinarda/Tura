import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { FlipCard, CARD_WIDTH } from '../components/FlipCard';
import { CardBack } from '../components/CardBack';
import quotesData from '../data/quotes.json';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';
import { useTuraStore } from '../store/useStore';

const TABS = [
  { key: 'quote', label: 'Günün Mesajı', emoji: '📜', color: Colors.gold },
  { key: 'stone', label: 'Kristal Taş', emoji: '💎', color: Colors.purple },
  { key: 'animal', label: 'Rehber Hayvan', emoji: '🐺', color: Colors.teal },
] as const;

type TabKey = typeof TABS[number]['key'];

interface HomeScreenProps {
  onNavigateToProfile?: () => void;
}

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats, getLevelTitle } = useTuraStore();
  const [activeTab, setActiveTab] = useState<TabKey>('quote');
  const [isFlipped, setIsFlipped] = useState({ quote: false, stone: false, animal: false });
  const [currentReading, setCurrentReading] = useState(dailyReading);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const hintOpacity = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.06, duration: 1200, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1200, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  React.useEffect(() => {
    if (currentReading) {
      Animated.timing(hintOpacity, { toValue: 0, duration: 500, useNativeDriver: true }).start();
    }
  }, [currentReading]);

  const handleReveal = useCallback(async () => {
    if (currentReading) {
      setIsFlipped(prev => ({ ...prev, [activeTab]: true }));
      return;
    }
    const quoteIds = quotesData.map(q => q.id);
    const stoneIds = stonesData.map(s => s.id);
    const animalIds = animalsData.map(a => a.id);
    const reading = await generateDailyReading(quoteIds, stoneIds, animalIds);
    setCurrentReading(reading);
    const quote = quotesData.find(q => q.id === reading.quoteId)!;
    await updateStats(quote.id, quote.source, reading.stoneId, reading.animalId);
    setTimeout(() => setIsFlipped(prev => ({ ...prev, [activeTab]: true })), 100);
  }, [activeTab, currentReading, generateDailyReading, updateStats]);

  const quote = currentReading ? quotesData.find(q => q.id === currentReading.quoteId) : null;
  const stone = currentReading ? stonesData.find(s => s.id === currentReading.stoneId) : null;
  const animal = currentReading ? animalsData.find(a => a.id === currentReading.animalId) : null;

  const renderCardFront = (tabKey: TabKey) => {
    const tab = TABS.find(t => t.key === tabKey)!;
    return <CardBack label={tab.label.toUpperCase()} emoji={tab.emoji} accentColor={tab.color} />;
  };

  const renderCardBack = (tabKey: TabKey) => {
    if (tabKey === 'quote' && quote) return <QuoteCardContent quote={quote} />;
    if (tabKey === 'stone' && stone) return <StoneCardContent stone={stone} />;
    if (tabKey === 'animal' && animal) return <AnimalCardContent animal={animal} />;
    return null;
  };

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 6) return 'Derin gece';
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  const levelTitle = profile ? getLevelTitle(profile.level) : '';

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{greeting()},</Text>
          <Text style={styles.username}>{profile?.name || 'Yolcu'}</Text>
          {profile && <Text style={styles.levelBadge}>{levelTitle} · {profile.streak} gün silsile 🔥</Text>}
        </View>
        <TouchableOpacity onPress={onNavigateToProfile} style={styles.profileBtn}>
          <Text style={styles.profileEmoji}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab.key} onPress={() => setActiveTab(tab.key)}
            style={[styles.tab, activeTab === tab.key && [styles.tabActive, { borderColor: tab.color }]]}>
            <Text style={styles.tabEmoji}>{tab.emoji}</Text>
            <Text style={[styles.tabLabel, { color: activeTab === tab.key ? tab.color : Colors.textMuted }]}>
              {tab.key === 'quote' ? 'Mesaj' : tab.key === 'stone' ? 'Taş' : 'Hayvan'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardArea}>
          {TABS.map(tab => (
            <View key={tab.key}
              style={[styles.cardWrapper, activeTab !== tab.key && styles.cardHidden]}
              pointerEvents={activeTab === tab.key ? 'auto' : 'none'}>
              <FlipCard isFlipped={isFlipped[tab.key]}
                onFlip={activeTab === tab.key ? handleReveal : undefined}
                front={renderCardFront(tab.key)}
                back={renderCardBack(tab.key) || <View />}
                accentColor={tab.color} />
            </View>
          ))}
        </View>

        {!currentReading && (
          <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
            <Animated.Text style={[styles.hintText, { transform: [{ scale: pulseAnim }] }]}>Kartına dokun</Animated.Text>
            <Text style={styles.hintSub}>Günün mesajını al</Text>
          </Animated.View>
        )}

        {currentReading && isFlipped[activeTab] && (
          <ReadingMeta tab={activeTab} quote={quote} stone={stone} animal={animal} />
        )}
      </ScrollView>
    </View>
  );
}

function QuoteCardContent({ quote }: { quote: typeof quotesData[0] }) {
  const rarityColor = quote.rarity === 'rare' ? Colors.gold : quote.rarity === 'uncommon' ? Colors.purple : Colors.textMuted;
  return (
    <View style={cardStyles.container}>
      <View style={[cardStyles.cornerTL, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerTR, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerBL, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerBR, { borderColor: Colors.gold }]} />
      <Text style={[cardStyles.rarity, { color: rarityColor }]}>{quote.rarity === 'rare' ? '✦ NADİR ✦' : quote.rarity === 'uncommon' ? '· değerli ·' : ''}</Text>
      <Text style={cardStyles.quoteText}>❝{quote.text}❞</Text>
      <View style={cardStyles.divider} />
      <Text style={cardStyles.source}>{quote.source}</Text>
      <Text style={cardStyles.category}>#{quote.category}</Text>
    </View>
  );
}

function StoneCardContent({ stone }: { stone: typeof stonesData[0] }) {
  return (
    <View style={[cardStyles.container, { backgroundColor: Colors.backgroundCard }]}>
      <View style={[cardStyles.cornerTL, { borderColor: Colors.purple }]} />
      <View style={[cardStyles.cornerTR, { borderColor: Colors.purple }]} />
      <View style={[cardStyles.cornerBL, { borderColor: Colors.purple }]} />
      <View style={[cardStyles.cornerBR, { borderColor: Colors.purple }]} />
      <Text style={cardStyles.stoneEmoji}>{stone.emoji}</Text>
      <Text style={[cardStyles.stoneName, { color: Colors.purpleLight }]}>{stone.name}</Text>
      <Text style={cardStyles.stoneChakra}>{stone.chakra}</Text>
      <View style={cardStyles.divider} />
      <Text style={cardStyles.stoneMessage}>{stone.dailyMessage}</Text>
      <View style={cardStyles.propertiesRow}>
        {stone.properties.slice(0, 3).map(p => (
          <View key={p} style={[cardStyles.tag, { borderColor: Colors.purple }]}>
            <Text style={[cardStyles.tagText, { color: Colors.purpleLight }]}>{p}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function AnimalCardContent({ animal }: { animal: typeof animalsData[0] }) {
  return (
    <View style={[cardStyles.container, { backgroundColor: Colors.backgroundCard }]}>
      <View style={[cardStyles.cornerTL, { borderColor: Colors.teal }]} />
      <View style={[cardStyles.cornerTR, { borderColor: Colors.teal }]} />
      <View style={[cardStyles.cornerBL, { borderColor: Colors.teal }]} />
      <View style={[cardStyles.cornerBR, { borderColor: Colors.teal }]} />
      <Text style={cardStyles.stoneEmoji}>{animal.emoji}</Text>
      <Text style={[cardStyles.stoneName, { color: Colors.tealLight }]}>{animal.name}</Text>
      <Text style={cardStyles.stoneChakra}>{animal.element} unsuru</Text>
      <View style={cardStyles.divider} />
      <Text style={cardStyles.stoneMessage}>{animal.dailyMessage}</Text>
      <View style={cardStyles.propertiesRow}>
        {animal.symbolism.slice(0, 3).map(s => (
          <View key={s} style={[cardStyles.tag, { borderColor: Colors.teal }]}>
            <Text style={[cardStyles.tagText, { color: Colors.tealLight }]}>{s}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function ReadingMeta({ tab, quote, stone, animal }: { tab: TabKey; quote: any; stone: any; animal: any }) {
  if (tab === 'quote' && quote) return (
    <View style={metaStyles.container}>
      <Text style={metaStyles.title}>Bugünün Rehberi</Text>
      <Text style={metaStyles.subtitle}>{quote.source}</Text>
      <Text style={metaStyles.detail}>{quote.category} kategorisi</Text>
    </View>
  );
  if (tab === 'stone' && stone) return (
    <View style={metaStyles.container}>
      <Text style={metaStyles.title}>{stone.name}</Text>
      <Text style={metaStyles.subtitle}>{stone.origin}</Text>
      <Text style={metaStyles.detail}>{stone.howToUse}</Text>
      <View style={[metaStyles.affirmationBox, { borderColor: Colors.purple }]}>
        <Text style={[metaStyles.affirmation, { color: Colors.purpleLight }]}>"{stone.affirmation}"</Text>
      </View>
    </View>
  );
  if (tab === 'animal' && animal) return (
    <View style={metaStyles.container}>
      <Text style={metaStyles.title}>{animal.name}</Text>
      <Text style={metaStyles.subtitle}>{animal.element} unsuru</Text>
      <Text style={metaStyles.detail}>{animal.anatolianMeaning}</Text>
      <View style={[metaStyles.affirmationBox, { borderColor: Colors.teal }]}>
        <Text style={[metaStyles.affirmation, { color: Colors.tealLight }]}>Rehberlik: "{animal.guidance}"</Text>
      </View>
    </View>
  );
  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: Spacing.lg, paddingVertical: Spacing.md },
  greeting: { fontSize: Typography.size.sm, color: Colors.textMuted, letterSpacing: 1 },
  username: { fontSize: Typography.size.xxl, fontWeight: Typography.weight.semibold, color: Colors.textPrimary, letterSpacing: 0.5 },
  levelBadge: { fontSize: Typography.size.xs, color: Colors.gold, marginTop: 2, letterSpacing: 0.5 },
  profileBtn: { width: 42, height: 42, borderRadius: 21, backgroundColor: Colors.surface, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.cardBorder },
  profileEmoji: { fontSize: 18 },
  tabContainer: { flexDirection: 'row', paddingHorizontal: Spacing.md, marginBottom: Spacing.md, gap: Spacing.sm },
  tab: { flex: 1, paddingVertical: Spacing.sm, paddingHorizontal: Spacing.sm, borderRadius: BorderRadius.md, backgroundColor: Colors.backgroundSecondary, alignItems: 'center', borderWidth: 1, borderColor: 'transparent' },
  tabActive: { backgroundColor: Colors.backgroundCard, borderWidth: 1 },
  tabEmoji: { fontSize: 18 },
  tabLabel: { fontSize: Typography.size.xs, marginTop: 2, fontWeight: Typography.weight.medium },
  scrollContent: { alignItems: 'center', paddingBottom: Spacing.xxxl },
  cardArea: { width: CARD_WIDTH, alignItems: 'center', minHeight: CARD_WIDTH * 1.55 },
  cardWrapper: { position: 'absolute', top: 0 },
  cardHidden: { opacity: 0 },
  hintContainer: { marginTop: Spacing.xl, alignItems: 'center' },
  hintText: { fontSize: Typography.size.xl, color: Colors.gold, fontWeight: Typography.weight.semibold, letterSpacing: 1 },
  hintSub: { fontSize: Typography.size.sm, color: Colors.textMuted, marginTop: Spacing.xs, letterSpacing: 0.5 },
});

const cardStyles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.lg, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.backgroundCard },
  cornerTL: { position: 'absolute', top: 12, left: 12, width: 16, height: 16, borderTopWidth: 1.5, borderLeftWidth: 1.5 },
  cornerTR: { position: 'absolute', top: 12, right: 12, width: 16, height: 16, borderTopWidth: 1.5, borderRightWidth: 1.5 },
  cornerBL: { position: 'absolute', bottom: 12, left: 12, width: 16, height: 16, borderBottomWidth: 1.5, borderLeftWidth: 1.5 },
  cornerBR: { position: 'absolute', bottom: 12, right: 12, width: 16, height: 16, borderBottomWidth: 1.5, borderRightWidth: 1.5 },
  rarity: { fontSize: Typography.size.xs, letterSpacing: 3, marginBottom: Spacing.md },
  quoteText: { fontSize: Typography.size.md, color: Colors.textPrimary, textAlign: 'center', lineHeight: Typography.size.md * Typography.lineHeight.relaxed, fontStyle: 'italic' },
  divider: { width: 40, height: 1, backgroundColor: Colors.gold, opacity: 0.4, marginVertical: Spacing.md },
  source: { fontSize: Typography.size.sm, color: Colors.gold, fontWeight: Typography.weight.semibold, letterSpacing: 1 },
  category: { fontSize: Typography.size.xs, color: Colors.textMuted, marginTop: Spacing.xs, letterSpacing: 0.5 },
  stoneEmoji: { fontSize: 40, marginBottom: Spacing.sm },
  stoneName: { fontSize: Typography.size.xl, fontWeight: Typography.weight.bold, letterSpacing: 1, marginBottom: Spacing.xs },
  stoneChakra: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 1, textTransform: 'uppercase' },
  stoneMessage: { fontSize: Typography.size.sm, color: Colors.textSecondary, textAlign: 'center', lineHeight: Typography.size.sm * Typography.lineHeight.relaxed, marginBottom: Spacing.md },
  propertiesRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: Spacing.xs },
  tag: { paddingHorizontal: Spacing.sm, paddingVertical: 3, borderRadius: BorderRadius.round, borderWidth: 1 },
  tagText: { fontSize: Typography.size.xs, letterSpacing: 0.5 },
});

const metaStyles = StyleSheet.create({
  container: { marginTop: Spacing.xl, paddingHorizontal: Spacing.xl, alignItems: 'center', width: '100%' },
  title: { fontSize: Typography.size.xl, fontWeight: Typography.weight.bold, color: Colors.textPrimary, textAlign: 'center', letterSpacing: 0.5 },
  subtitle: { fontSize: Typography.size.sm, color: Colors.gold, marginTop: Spacing.xs, letterSpacing: 1 },
  detail: { fontSize: Typography.size.sm, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.md, lineHeight: Typography.size.sm * Typography.lineHeight.relaxed },
  affirmationBox: { marginTop: Spacing.md, borderWidth: 1, borderRadius: BorderRadius.md, padding: Spacing.md, width: '100%' },
  affirmation: { fontSize: Typography.size.sm, textAlign: 'center', fontStyle: 'italic', lineHeight: Typography.size.sm * Typography.lineHeight.relaxed },
});
