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
import nagualsData from '../data/naguals.json';
import { useTuraStore } from '../store/useStore';

const TABS = [
  { key: 'quote', label: 'Mesaj', color: Colors.gold },
  { key: 'stone', label: 'Taş', color: Colors.purple },
  { key: 'animal', label: 'Hayvan', color: Colors.teal },
  { key: 'nagual', label: 'Nagual', color: Colors.ember },
] as const;

type TabKey = typeof TABS[number]['key'];

interface HomeScreenProps {
  onNavigateToProfile?: () => void;
}

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats, getLevelTitle } = useTuraStore();

  const [activeTab, setActiveTab] = useState<TabKey>('quote');
  const [isFlipped, setIsFlipped] = useState({ quote: false, stone: false, animal: false, nagual: false });
  const [currentReading, setCurrentReading] = useState(dailyReading);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const hintOpacity = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.05, duration: 1400, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1400, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  React.useEffect(() => {
    if (currentReading) {
      Animated.timing(hintOpacity, { toValue: 0, duration: 400, useNativeDriver: true }).start();
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
    const nagualIds = nagualsData.map(n => n.id);

    const reading = await generateDailyReading(quoteIds, stoneIds, animalIds, nagualIds);
    setCurrentReading(reading);

    const quote = quotesData.find(q => q.id === reading.quoteId)!;
    await updateStats(quote.id, quote.source, reading.stoneId, reading.animalId, reading.nagualId);

    setTimeout(() => {
      setIsFlipped(prev => ({ ...prev, [activeTab]: true }));
    }, 100);
  }, [activeTab, currentReading, generateDailyReading, updateStats]);

  const quote = currentReading ? quotesData.find(q => q.id === currentReading.quoteId) : null;
  const stone = currentReading ? stonesData.find(s => s.id === currentReading.stoneId) : null;
  const animal = currentReading ? animalsData.find(a => a.id === currentReading.animalId) : null;
  const nagual = currentReading ? nagualsData.find(n => n.id === currentReading.nagualId) : null;

  const renderCardFront = (tabKey: TabKey) => {
    const tab = TABS.find(t => t.key === tabKey)!;
    return (
      <CardBack
        label={tab.label.toUpperCase()}
        emoji={tabKey === 'quote' ? '📜' : tabKey === 'stone' ? '💎' : tabKey === 'animal' ? '🐺' : '🌑'}
        accentColor={tab.color}
      />
    );
  };

  const renderCardBack = (tabKey: TabKey) => {
    if (tabKey === 'quote' && quote) return <QuoteCardContent quote={quote} />;
    if (tabKey === 'stone' && stone) return <StoneCardContent stone={stone} />;
    if (tabKey === 'animal' && animal) return <AnimalCardContent animal={animal} />;
    if (tabKey === 'nagual' && nagual) return <NagualCardContent nagual={nagual} />;
    return null;
  };

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 6) return 'Gece';
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  const levelTitle = profile ? getLevelTitle(profile.level) : '';
  const activeTab_ = TABS.find(t => t.key === activeTab)!;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{greeting()}</Text>
          <Text style={styles.username}>{profile?.name || 'Yolcu'}</Text>
          {profile && (
            <Text style={styles.levelBadge}>{levelTitle} · {profile.streak} gün</Text>
          )}
        </View>
        <TouchableOpacity onPress={onNavigateToProfile} style={styles.profileBtn}>
          <Text style={styles.profileInitial}>
            {profile?.name?.charAt(0).toUpperCase() || '·'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            style={[
              styles.tab,
              activeTab === tab.key && [styles.tabActive, { borderBottomColor: tab.color }],
            ]}
          >
            <Text style={[
              styles.tabLabel,
              { color: activeTab === tab.key ? tab.color : Colors.textMuted }
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardArea}>
          {TABS.map(tab => (
            <View
              key={tab.key}
              style={[styles.cardWrapper, activeTab !== tab.key && styles.cardHidden]}
              pointerEvents={activeTab === tab.key ? 'auto' : 'none'}
            >
              <FlipCard
                isFlipped={isFlipped[tab.key]}
                onFlip={activeTab === tab.key ? handleReveal : undefined}
                front={renderCardFront(tab.key)}
                back={renderCardBack(tab.key) || <View />}
                accentColor={tab.color}
              />
            </View>
          ))}
        </View>

        {!currentReading && (
          <Animated.View style={[styles.hintContainer, { opacity: hintOpacity }]}>
            <Animated.Text style={[styles.hintText, { transform: [{ scale: pulseAnim }] }]}>
              Kartına dokun
            </Animated.Text>
            <Text style={styles.hintSub}>Günün rehberliğini al</Text>
          </Animated.View>
        )}

        {currentReading && isFlipped[activeTab] && (
          <ReadingMeta
            tab={activeTab}
            tabColor={activeTab_.color}
            quote={quote}
            stone={stone}
            animal={animal}
            nagual={nagual}
          />
        )}
      </ScrollView>
    </View>
  );
}

function QuoteCardContent({ quote }: { quote: typeof quotesData[0] }) {
  const rarityColor = quote.rarity === 'rare' ? Colors.gold :
    quote.rarity === 'uncommon' ? Colors.purpleLight : 'transparent';
  return (
    <View style={[cardStyles.container, { backgroundColor: Colors.backgroundCard }]}>
      <View style={[cardStyles.cornerTL, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerTR, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerBL, { borderColor: Colors.gold }]} />
      <View style={[cardStyles.cornerBR, { borderColor: Colors.gold }]} />

      {quote.rarity !== 'common' && (
        <View style={[cardStyles.rarityBadge, { borderColor: rarityColor }]}>
          <Text style={[cardStyles.rarityText, { color: rarityColor }]}>
            {quote.rarity === 'rare' ? 'nadir' : 'değerli'}
          </Text>
        </View>
      )}

      <Text style={cardStyles.quoteText}>{quote.text}</Text>
      <View style={[cardStyles.divider, { backgroundColor: Colors.gold }]} />
      <Text style={cardStyles.source}>{quote.source}</Text>
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

      <Text style={cardStyles.illustrationEmoji}>{stone.emoji}</Text>
      <Text style={[cardStyles.cardTitle, { color: Colors.purpleLight }]}>{stone.name}</Text>
      <Text style={cardStyles.cardSubtitle}>{stone.chakra}</Text>
      <View style={[cardStyles.divider, { backgroundColor: Colors.purple }]} />
      <Text style={cardStyles.cardMessage}>{stone.dailyMessage}</Text>
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

      <View style={[cardStyles.illustrationFrame, { borderColor: Colors.teal + '40' }]}>
        <Text style={cardStyles.illustrationEmoji}>{animal.emoji}</Text>
      </View>
      <Text style={[cardStyles.cardTitle, { color: Colors.tealLight }]}>{animal.name}</Text>
      <Text style={cardStyles.cardSubtitle}>{animal.element}</Text>
      <View style={[cardStyles.divider, { backgroundColor: Colors.teal }]} />
      <Text style={cardStyles.cardMessage}>{animal.dailyMessage}</Text>
    </View>
  );
}

function NagualCardContent({ nagual }: { nagual: typeof nagualsData[0] }) {
  return (
    <View style={[cardStyles.container, { backgroundColor: '#1A1218' }]}>
      <View style={[cardStyles.cornerTL, { borderColor: Colors.ember }]} />
      <View style={[cardStyles.cornerTR, { borderColor: Colors.ember }]} />
      <View style={[cardStyles.cornerBL, { borderColor: Colors.ember }]} />
      <View style={[cardStyles.cornerBR, { borderColor: Colors.ember }]} />

      <Text style={cardStyles.nagualAspect}>{nagual.aspect}</Text>
      <View style={[cardStyles.illustrationFrame, { borderColor: Colors.ember + '40' }]}>
        <Text style={cardStyles.illustrationEmoji}>{nagual.emoji}</Text>
      </View>
      <Text style={[cardStyles.cardTitle, { color: Colors.emberLight }]}>{nagual.name}</Text>
      <View style={[cardStyles.divider, { backgroundColor: Colors.ember }]} />
      <Text style={cardStyles.cardMessage}>{nagual.dailyMessage}</Text>
    </View>
  );
}

function ReadingMeta({
  tab, tabColor, quote, stone, animal, nagual
}: {
  tab: TabKey;
  tabColor: string;
  quote: typeof quotesData[0] | null | undefined;
  stone: typeof stonesData[0] | null | undefined;
  animal: typeof animalsData[0] | null | undefined;
  nagual: typeof nagualsData[0] | null | undefined;
}) {
  if (tab === 'quote' && quote) {
    return (
      <View style={metaStyles.container}>
        <Text style={[metaStyles.title, { color: Colors.gold }]}>{quote.source}</Text>
        <Text style={metaStyles.detail}>{quote.category}</Text>
      </View>
    );
  }
  if (tab === 'stone' && stone) {
    return (
      <View style={metaStyles.container}>
        <Text style={[metaStyles.title, { color: Colors.purpleLight }]}>{stone.name}</Text>
        <Text style={metaStyles.detail}>{stone.howToUse}</Text>
        <View style={[metaStyles.box, { borderColor: Colors.purple }]}>
          <Text style={[metaStyles.boxText, { color: Colors.purpleLight }]}>{stone.affirmation}</Text>
        </View>
      </View>
    );
  }
  if (tab === 'animal' && animal) {
    return (
      <View style={metaStyles.container}>
        <Text style={[metaStyles.title, { color: Colors.tealLight }]}>{animal.name}</Text>
        <Text style={metaStyles.detail}>{animal.anatolianMeaning}</Text>
        <View style={[metaStyles.box, { borderColor: Colors.teal }]}>
          <Text style={[metaStyles.boxText, { color: Colors.tealLight }]}>{animal.guidance}</Text>
        </View>
      </View>
    );
  }
  if (tab === 'nagual' && nagual) {
    return (
      <View style={metaStyles.container}>
        <Text style={[metaStyles.title, { color: Colors.emberLight }]}>{nagual.name}</Text>
        <Text style={metaStyles.detail}>{nagual.element} · {nagual.aspect}</Text>
        <View style={[metaStyles.box, { borderColor: Colors.ember }]}>
          <Text style={[metaStyles.boxText, { color: Colors.emberLight }]}>{nagual.guidance}</Text>
        </View>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  greeting: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  username: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  levelBadge: {
    fontSize: Typography.size.xs,
    color: Colors.gold,
    marginTop: 3,
    letterSpacing: 0.5,
  },
  profileBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  profileInitial: {
    fontSize: Typography.size.md,
    color: Colors.gold,
    fontWeight: Typography.weight.semibold,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    marginBottom: Spacing.md,
  },
  tab: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomWidth: 2,
  },
  tabLabel: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.medium,
    letterSpacing: 0.5,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: Spacing.xxxl,
  },
  cardArea: {
    width: CARD_WIDTH,
    alignItems: 'center',
    minHeight: CARD_WIDTH * 1.55,
  },
  cardWrapper: {
    position: 'absolute',
    top: 0,
  },
  cardHidden: {
    opacity: 0,
  },
  hintContainer: {
    marginTop: Spacing.xl,
    alignItems: 'center',
  },
  hintText: {
    fontSize: Typography.size.lg,
    color: Colors.gold,
    fontWeight: Typography.weight.medium,
    letterSpacing: 1,
  },
  hintSub: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: Spacing.xs,
    letterSpacing: 0.5,
  },
});

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerTL: {
    position: 'absolute', top: 14, left: 14,
    width: 14, height: 14,
    borderTopWidth: 1, borderLeftWidth: 1,
  },
  cornerTR: {
    position: 'absolute', top: 14, right: 14,
    width: 14, height: 14,
    borderTopWidth: 1, borderRightWidth: 1,
  },
  cornerBL: {
    position: 'absolute', bottom: 14, left: 14,
    width: 14, height: 14,
    borderBottomWidth: 1, borderLeftWidth: 1,
  },
  cornerBR: {
    position: 'absolute', bottom: 14, right: 14,
    width: 14, height: 14,
    borderBottomWidth: 1, borderRightWidth: 1,
  },
  rarityBadge: {
    borderWidth: 1,
    borderRadius: BorderRadius.round,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: Spacing.md,
  },
  rarityText: {
    fontSize: Typography.size.xs,
    letterSpacing: 2,
  },
  quoteText: {
    fontSize: Typography.size.md,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.md * 1.75,
    fontStyle: 'italic',
    fontWeight: Typography.weight.light,
  },
  divider: {
    width: 32,
    height: 1,
    opacity: 0.5,
    marginVertical: Spacing.md,
  },
  source: {
    fontSize: Typography.size.sm,
    color: Colors.gold,
    letterSpacing: 1,
    fontWeight: Typography.weight.medium,
  },
  illustrationFrame: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  illustrationEmoji: {
    fontSize: 52,
  },
  cardTitle: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  cardMessage: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.75,
    fontWeight: Typography.weight.light,
  },
  nagualAspect: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
});

const metaStyles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semibold,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  detail: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: Spacing.xs,
    letterSpacing: 0.5,
  },
  box: {
    marginTop: Spacing.md,
    borderWidth: 1,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    width: '100%',
  },
  boxText: {
    fontSize: Typography.size.sm,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.sm * 1.75,
    fontWeight: Typography.weight.light,
  },
});