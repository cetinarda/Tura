import React, { useState, useCallback, useRef } from 'react';
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
import quotesData from '../data/quotes.json';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';
import nagualsData from '../data/naguals.json';
import { useTuraStore } from '../store/useStore';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  onNavigateToProfile?: () => void;
}

// ─── Kilim dekoratif bileşenler ──────────────────────────────────────────────

function KilimRow({ color, style }: { color: string; style?: any }) {
  const symbols = ['◆', '▲', '◆', '▲', '◆', '▲', '◆'];
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6 }, style]}>
      {symbols.map((s, i) => (
        <Text key={i} style={{ color, fontSize: 7, opacity: 0.7 }}>{s}</Text>
      ))}
    </View>
  );
}

function SunSymbol({ color, size = 32 }: { color: string; size?: number }) {
  return (
    <Text style={{ fontSize: size, color, lineHeight: size + 4 }}>☀</Text>
  );
}

function KilimCorner({ position, color }: { position: 'TL' | 'TR' | 'BL' | 'BR'; color: string }) {
  const isTop = position.startsWith('T');
  const isLeft = position.endsWith('L');
  return (
    <View style={{
      position: 'absolute',
      top: isTop ? 10 : undefined,
      bottom: isTop ? undefined : 10,
      left: isLeft ? 10 : undefined,
      right: isLeft ? undefined : 10,
      alignItems: isLeft ? 'flex-start' : 'flex-end',
    }}>
      <Text style={{ color, fontSize: 10, opacity: 0.6, lineHeight: 12 }}>◆</Text>
      <Text style={{ color, fontSize: 7, opacity: 0.4, lineHeight: 10 }}>{isLeft ? '▲' : '▲'}</Text>
    </View>
  );
}

// ─── Tek kart bileşeni ───────────────────────────────────────────────────────

interface RevealCardProps {
  title: string;
  subtitle: string;
  accentColor: string;
  isRevealed: boolean;
  isLocked: boolean;
  onReveal: () => void;
  children: React.ReactNode;
}

function RevealCard({ title, subtitle, accentColor, isRevealed, isLocked, onReveal, children }: RevealCardProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.97)).current;

  React.useEffect(() => {
    if (isRevealed) {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 8, useNativeDriver: true }),
      ]).start();
    }
  }, [isRevealed]);

  return (
    <TouchableOpacity
      onPress={!isRevealed && !isLocked ? onReveal : undefined}
      activeOpacity={isRevealed ? 1 : 0.85}
      style={[styles.card, { borderColor: isRevealed ? accentColor + '60' : Colors.divider }]}
    >
      <KilimCorner position="TL" color={accentColor} />
      <KilimCorner position="TR" color={accentColor} />
      <KilimCorner position="BL" color={accentColor} />
      <KilimCorner position="BR" color={accentColor} />

      <KilimRow color={accentColor} style={{ marginBottom: Spacing.sm }} />

      {!isRevealed ? (
        <View style={styles.cardLocked}>
          <SunSymbol color={isLocked ? Colors.textMuted : accentColor} size={28} />
          <Text style={[styles.cardLockedTitle, { color: isLocked ? Colors.textMuted : accentColor }]}>
            {title}
          </Text>
          <Text style={styles.cardLockedSub}>{subtitle}</Text>
          {!isLocked && (
            <Text style={[styles.cardTapHint, { color: accentColor }]}>dokunarak aç</Text>
          )}
          {isLocked && (
            <Text style={styles.cardTapHint}>öncekini önce aç</Text>
          )}
        </View>
      ) : (
        <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
          <View style={styles.cardRevealedHeader}>
            <SunSymbol color={accentColor} size={16} />
            <Text style={[styles.cardRevealedTitle, { color: accentColor }]}>{title}</Text>
          </View>
          {children}
        </Animated.View>
      )}

      <KilimRow color={accentColor} style={{ marginTop: Spacing.sm }} />
    </TouchableOpacity>
  );
}

// ─── Ana ekran ───────────────────────────────────────────────────────────────

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats, getLevelTitle } = useTuraStore();

  const [currentReading, setCurrentReading] = useState(dailyReading);
  const [revealed, setRevealed] = useState({ quote: !!dailyReading, stone: !!dailyReading, animal: !!dailyReading });

  const quote = currentReading ? quotesData.find(q => q.id === currentReading.quoteId) : null;
  const stone = currentReading ? stonesData.find(s => s.id === currentReading.stoneId) : null;
  const animal = currentReading ? animalsData.find(a => a.id === currentReading.animalId) : null;
  const nagual = currentReading ? nagualsData.find(n => n.id === currentReading.nagualId) : null;

  const ensureReading = useCallback(async () => {
    if (currentReading) return currentReading;
    const quoteIds = quotesData.map(q => q.id);
    const stoneIds = stonesData.map(s => s.id);
    const animalIds = animalsData.map(a => a.id);
    const nagualIds = nagualsData.map(n => n.id);
    const reading = await generateDailyReading(quoteIds, stoneIds, animalIds, nagualIds);
    setCurrentReading(reading);
    const q = quotesData.find(x => x.id === reading.quoteId)!;
    await updateStats(q.id, q.source, reading.stoneId, reading.animalId, reading.nagualId);
    return reading;
  }, [currentReading, generateDailyReading, updateStats]);

  const handleReveal = useCallback(async (key: 'quote' | 'stone' | 'animal') => {
    await ensureReading();
    setRevealed(prev => ({ ...prev, [key]: true }));
  }, [ensureReading]);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 6) return 'Gece';
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  const levelTitle = profile ? getLevelTitle(profile.level) : '';

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Başlık */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{greeting()}</Text>
          <Text style={styles.username}>{profile?.name || 'Yolcu'}</Text>
          {profile && <Text style={styles.level}>{levelTitle}</Text>}
        </View>
        <TouchableOpacity onPress={onNavigateToProfile} style={styles.profileBtn}>
          <Text style={styles.profileInitial}>{profile?.name?.charAt(0).toUpperCase() || '☀'}</Text>
        </TouchableOpacity>
      </View>

      {/* Güneş motifi */}
      <View style={styles.sunRow}>
        <View style={styles.sunLine} />
        <SunSymbol color={Colors.gold} size={22} />
        <View style={styles.sunLine} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Bilgenin Sözü */}
        <RevealCard
          title="Bilgenin Sözü"
          subtitle="Anadolu bilgeliğinden"
          accentColor={Colors.gold}
          isRevealed={revealed.quote}
          isLocked={false}
          onReveal={() => handleReveal('quote')}
        >
          {quote && <QuoteContent quote={quote} />}
        </RevealCard>

        <KilimDivider />

        {/* 2. Kristal Taş */}
        <RevealCard
          title="Kristal Rehber"
          subtitle="Taşın enerjisinden"
          accentColor={Colors.purple}
          isRevealed={revealed.stone}
          isLocked={!revealed.quote}
          onReveal={() => handleReveal('stone')}
        >
          {stone && <StoneContent stone={stone} />}
        </RevealCard>

        <KilimDivider />

        {/* 3. Ruh Hayvan */}
        <RevealCard
          title="Ruh Hayvanın"
          subtitle="Şamanik gelenekten"
          accentColor={Colors.teal}
          isRevealed={revealed.animal}
          isLocked={!revealed.stone}
          onReveal={() => handleReveal('animal')}
        >
          {animal && <AnimalContent animal={animal} />}
        </RevealCard>

        <View style={{ height: Spacing.xxxl }} />
      </ScrollView>
    </View>
  );
}

// ─── Kilim ara deseni ─────────────────────────────────────────────────────────

function KilimDivider() {
  return (
    <View style={divStyles.container}>
      <View style={divStyles.line} />
      <View style={divStyles.symbols}>
        {['◇', '◆', '◇'].map((s, i) => (
          <Text key={i} style={divStyles.symbol}>{s}</Text>
        ))}
      </View>
      <View style={divStyles.line} />
    </View>
  );
}

const divStyles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginVertical: Spacing.md, paddingHorizontal: Spacing.lg },
  line: { flex: 1, height: 1, backgroundColor: Colors.divider },
  symbols: { flexDirection: 'row', gap: 6, paddingHorizontal: Spacing.md },
  symbol: { color: Colors.gold, fontSize: 10, opacity: 0.5 },
});

// ─── Kart içerikleri ──────────────────────────────────────────────────────────

function QuoteContent({ quote }: { quote: typeof quotesData[0] }) {
  return (
    <View style={contentStyles.container}>
      <Text style={contentStyles.quoteText}>{quote.text}</Text>
      <View style={contentStyles.divider} />
      <Text style={[contentStyles.sourceText, { color: Colors.gold }]}>{quote.source}</Text>
    </View>
  );
}

function StoneContent({ stone }: { stone: typeof stonesData[0] }) {
  return (
    <View style={contentStyles.container}>
      <View style={[contentStyles.medallion, { borderColor: Colors.purple + '60' }]}>
        <View style={[contentStyles.medallionInner, { borderColor: Colors.purple + '40' }]}>
          <Text style={contentStyles.medallionEmoji}>{stone.emoji}</Text>
        </View>
        <Text style={[contentStyles.medallionDot, { top: 2, color: Colors.purple }]}>◆</Text>
        <Text style={[contentStyles.medallionDot, { bottom: 2, color: Colors.purple }]}>◆</Text>
      </View>
      <Text style={[contentStyles.cardName, { color: Colors.purpleLight }]}>{stone.name}</Text>
      <Text style={contentStyles.cardSub}>{stone.chakra}</Text>
      <View style={[contentStyles.divider, { backgroundColor: Colors.purple }]} />
      <Text style={contentStyles.cardMessage}>{stone.dailyMessage}</Text>
      <View style={[contentStyles.affirmBox, { borderColor: Colors.purple + '40' }]}>
        <Text style={[contentStyles.affirmText, { color: Colors.purpleLight }]}>{stone.affirmation}</Text>
      </View>
    </View>
  );
}

function AnimalContent({ animal }: { animal: typeof animalsData[0] }) {
  return (
    <View style={contentStyles.container}>
      {/* Şamanik madalyon — 3 halka */}
      <View style={[contentStyles.medallionOuter, { borderColor: Colors.teal + '30' }]}>
        <View style={[contentStyles.medallion, { borderColor: Colors.teal + '60' }]}>
          <View style={[contentStyles.medallionInner, { borderColor: Colors.teal + '40' }]}>
            <Text style={contentStyles.animalEmoji}>{animal.emoji}</Text>
          </View>
          <Text style={[contentStyles.medallionDot, { top: 2, color: Colors.teal }]}>◆</Text>
          <Text style={[contentStyles.medallionDot, { bottom: 2, color: Colors.teal }]}>◆</Text>
        </View>
      </View>

      <Text style={[contentStyles.cardName, { color: Colors.tealLight }]}>{animal.name}</Text>
      <Text style={contentStyles.cardSub}>{animal.element} · {animal.anatolianMeaning}</Text>
      <View style={[contentStyles.divider, { backgroundColor: Colors.teal }]} />
      <Text style={contentStyles.cardMessage}>{animal.dailyMessage}</Text>
      <View style={[contentStyles.affirmBox, { borderColor: Colors.teal + '40' }]}>
        <Text style={[contentStyles.affirmText, { color: Colors.tealLight }]}>{animal.guidance}</Text>
      </View>
    </View>
  );
}

// ─── Stiller ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
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
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  level: {
    fontSize: Typography.size.xs,
    color: Colors.gold,
    marginTop: 2,
    letterSpacing: 1,
  },
  profileBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  profileInitial: {
    fontSize: Typography.size.sm,
    color: Colors.gold,
    fontWeight: Typography.weight.semibold,
  },
  sunRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  sunLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.2,
  },
  scroll: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xs,
  },
  card: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    padding: Spacing.md,
    overflow: 'hidden',
  },
  cardLocked: {
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    gap: Spacing.xs,
  },
  cardLockedTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1,
    marginTop: Spacing.sm,
  },
  cardLockedSub: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.5,
  },
  cardTapHint: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1,
    marginTop: Spacing.sm,
    textTransform: 'uppercase',
  },
  cardRevealedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    marginBottom: Spacing.md,
  },
  cardRevealedTitle: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

const contentStyles = StyleSheet.create({
  container: { alignItems: 'center' },
  quoteText: {
    fontSize: Typography.size.md,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.md * 1.8,
    fontStyle: 'italic',
    fontWeight: Typography.weight.light,
    paddingHorizontal: Spacing.sm,
  },
  divider: {
    width: 28,
    height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.4,
    marginVertical: Spacing.md,
  },
  sourceText: {
    fontSize: Typography.size.sm,
    letterSpacing: 1,
    fontWeight: Typography.weight.medium,
  },
  medallionOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  medallion: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  medallionInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  medallionEmoji: {
    fontSize: 40,
  },
  animalEmoji: {
    fontSize: 48,
  },
  medallionDot: {
    position: 'absolute',
    fontSize: 8,
    left: '50%',
    marginLeft: -4,
  },
  cardName: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  cardSub: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cardMessage: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.8,
    fontWeight: Typography.weight.light,
    paddingHorizontal: Spacing.xs,
    marginBottom: Spacing.md,
  },
  affirmBox: {
    borderWidth: 1,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    width: '100%',
    marginBottom: Spacing.xs,
  },
  affirmText: {
    fontSize: Typography.size.sm,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.sm * 1.7,
    fontWeight: Typography.weight.light,
  },
});
