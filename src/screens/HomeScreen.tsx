import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import quotesData from '../data/quotes.json';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';
import nagualsData from '../data/naguals.json';
import { useTuraStore } from '../store/useStore';

interface HomeScreenProps {
  onNavigateToProfile?: () => void;
}

function KilimRow({ color }: { color: string }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
      {['◆', '▲', '◆', '▲', '◆'].map((s, i) => (
        <Text key={i} style={{ color, fontSize: 8, opacity: 0.6 }}>{s}</Text>
      ))}
    </View>
  );
}

function SunSymbol({ color, size = 32 }: { color: string; size?: number }) {
  return <Text style={{ fontSize: size, color, lineHeight: size + 4 }}>☀</Text>;
}

function QuoteContent({ quote }: { quote: typeof quotesData[0] }) {
  return (
    <View style={cs.container}>
      <Text style={cs.quoteText}>{quote.text}</Text>
      <View style={cs.divider} />
      <Text style={[cs.source, { color: Colors.gold }]}>{quote.source}</Text>
    </View>
  );
}

function StoneContent({ stone }: { stone: typeof stonesData[0] }) {
  return (
    <View style={cs.container}>
      <View style={[cs.medallion, { borderColor: Colors.purple + '50' }]}>
        <View style={[cs.medallionInner, { borderColor: Colors.purple + '30' }]}>
          <Text style={cs.stoneEmoji}>{stone.emoji}</Text>
        </View>
      </View>
      <Text style={[cs.name, { color: Colors.purpleLight }]}>{stone.name}</Text>
      <Text style={cs.meta}>{stone.chakra}</Text>
      <View style={[cs.divider, { backgroundColor: Colors.purple }]} />
      <Text style={cs.body}>{stone.dailyMessage}</Text>
      <View style={[cs.affirmBox, { borderColor: Colors.purple + '40' }]}>
        <Text style={[cs.affirmText, { color: Colors.purpleLight }]}>{stone.affirmation}</Text>
      </View>
    </View>
  );
}

function AnimalContent({ animal }: { animal: typeof animalsData[0] }) {
  return (
    <View style={cs.container}>
      <View style={[cs.medallionOuter, { borderColor: Colors.teal + '25' }]}>
        <View style={[cs.medallion, { borderColor: Colors.teal + '50' }]}>
          <View style={[cs.medallionInner, { borderColor: Colors.teal + '30' }]}>
            <Text style={cs.animalEmoji}>{animal.emoji}</Text>
          </View>
        </View>
      </View>
      <Text style={[cs.name, { color: Colors.tealLight }]}>{animal.name}</Text>
      <Text style={cs.meta}>{animal.element} · {animal.anatolianMeaning}</Text>
      <View style={[cs.divider, { backgroundColor: Colors.teal }]} />
      <Text style={cs.body}>{animal.dailyMessage}</Text>
      <View style={[cs.affirmBox, { borderColor: Colors.teal + '40' }]}>
        <Text style={[cs.affirmText, { color: Colors.tealLight }]}>{animal.guidance}</Text>
      </View>
    </View>
  );
}

const CARDS = [
  { title: 'Bilgenin Sözü',  subtitle: 'Anadolu bilgeliğinden', color: Colors.gold },
  { title: 'Kristal Rehber', subtitle: 'Taşın enerjisinden',    color: Colors.purple },
  { title: 'Ruh Hayvanın',   subtitle: 'Şamanik gelenekten',    color: Colors.teal },
];

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats, getLevelTitle } = useTuraStore();

  const [reading, setReading] = useState(dailyReading);
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const backFade  = useRef(new Animated.Value(1)).current;
  const frontFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!reading) {
      const qIds = quotesData.map(q => q.id);
      const sIds = stonesData.map(s => s.id);
      const aIds = animalsData.map(a => a.id);
      const nIds = nagualsData.map(n => n.id);
      generateDailyReading(qIds, sIds, aIds, nIds).then(r => {
        const q = quotesData.find(x => x.id === r.quoteId)!;
        updateStats(q.id, q.source, r.stoneId, r.animalId, r.nagualId);
        setReading(r);
      });
    }
  }, []);

  const quote  = reading ? quotesData.find(q => q.id === reading.quoteId)  : null;
  const stone  = reading ? stonesData.find(s => s.id === reading.stoneId)  : null;
  const animal = reading ? animalsData.find(a => a.id === reading.animalId) : null;

  const card = CARDS[step];

  const handleReveal = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.timing(backFade, { toValue: 0, duration: 280, useNativeDriver: true }).start(() => {
      setRevealed(true);
      Animated.timing(frontFade, { toValue: 1, duration: 420, useNativeDriver: true }).start();
    });
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (step < CARDS.length - 1) {
      Animated.timing(frontFade, { toValue: 0, duration: 250, useNativeDriver: true }).start(() => {
        setStep(s => s + 1);
        setRevealed(false);
        backFade.setValue(1);
        frontFade.setValue(0);
      });
    } else {
      setDone(true);
    }
  };

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 6)  return 'Gece';
    if (h < 12) return 'Günaydın';
    if (h < 18) return 'İyi günler';
    return 'İyi akşamlar';
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{greeting()}</Text>
          <Text style={styles.username}>{profile?.name || 'Yolcu'}</Text>
        </View>
        <TouchableOpacity onPress={onNavigateToProfile} style={styles.profileBtn}>
          <Text style={styles.profileInitial}>
            {profile?.name?.charAt(0).toUpperCase() || '☀'}
          </Text>
        </TouchableOpacity>
      </View>

      {!done && (
        <View style={styles.dots}>
          {CARDS.map((c, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < step  && { backgroundColor: Colors.textMuted, width: 6 },
                i === step && { backgroundColor: c.color, width: 22 },
                i > step  && { backgroundColor: Colors.divider, width: 6 },
              ]}
            />
          ))}
        </View>
      )}

      <View style={styles.cardArea}>
        {done ? (
          <View style={styles.doneView}>
            <SunSymbol color={Colors.gold} size={48} />
            <Text style={styles.doneTitle}>Günlük rehberlik tamamlandı</Text>
            <Text style={styles.doneSub}>Yarın yeni bir yolculuk başlar</Text>
            {quote && (
              <>
                <View style={styles.doneDivider} />
                <Text style={styles.doneQuote}>
                  {quote.text.length > 100 ? quote.text.slice(0, 97) + '…' : quote.text}
                </Text>
              </>
            )}
          </View>

        ) : !revealed ? (
          <Animated.View style={[styles.card, { opacity: backFade, borderColor: card.color + '35' }]}>
            <TouchableOpacity style={styles.cardBackInner} onPress={handleReveal} activeOpacity={0.88}>
              <KilimRow color={card.color} />
              <View style={styles.cardBackCenter}>
                <Text style={[styles.corner, { top: 0, left: 0 }]}>◆</Text>
                <Text style={[styles.corner, { top: 0, right: 0 }]}>◆</Text>
                <Text style={[styles.corner, { bottom: 0, left: 0 }]}>◆</Text>
                <Text style={[styles.corner, { bottom: 0, right: 0 }]}>◆</Text>
                <SunSymbol color={card.color} size={56} />
                <Text style={[styles.cardBackTitle, { color: card.color }]}>{card.title}</Text>
                <Text style={styles.cardBackSub}>{card.subtitle}</Text>
                <View style={styles.tapRow}>
                  <View style={[styles.tapLine, { backgroundColor: card.color }]} />
                  <Text style={[styles.tapHint, { color: card.color }]}>dokun</Text>
                  <View style={[styles.tapLine, { backgroundColor: card.color }]} />
                </View>
              </View>
              <KilimRow color={card.color} />
            </TouchableOpacity>
          </Animated.View>

        ) : (
          <Animated.View style={[styles.card, { opacity: frontFade, borderColor: card.color + '50' }]}>
            <View style={[styles.cardFrontHeader, { borderBottomColor: card.color + '30' }]}>
              <SunSymbol color={card.color} size={13} />
              <Text style={[styles.cardFrontTitle, { color: card.color }]}>{card.title}</Text>
            </View>
            <ScrollView style={styles.cardScroll} contentContainerStyle={styles.cardScrollPad} showsVerticalScrollIndicator={false}>
              {step === 0 && quote  && <QuoteContent quote={quote} />}
              {step === 1 && stone  && <StoneContent stone={stone} />}
              {step === 2 && animal && <AnimalContent animal={animal} />}
            </ScrollView>
            <TouchableOpacity style={[styles.nextBtn, { borderColor: card.color }]} onPress={handleNext} activeOpacity={0.8}>
              <Text style={[styles.nextBtnText, { color: card.color }]}>
                {step < CARDS.length - 1 ? 'Sonraki →' : 'Tamamlandı'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  greeting: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  username: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    marginTop: 1,
  },
  profileBtn: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: Colors.surface,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: Colors.cardBorder,
  },
  profileInitial: {
    fontSize: Typography.size.sm,
    color: Colors.gold,
    fontWeight: Typography.weight.semibold,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingVertical: Spacing.sm,
  },
  dot: { height: 6, borderRadius: 3 },
  cardArea: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardBackInner: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'space-between',
  },
  cardBackCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    fontSize: 12,
    color: Colors.gold,
    opacity: 0.35,
  },
  cardBackTitle: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.bold,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },
  cardBackSub: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  tapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.xl,
    opacity: 0.65,
  },
  tapLine: { flex: 1, height: 1, opacity: 0.5 },
  tapHint: {
    fontSize: Typography.size.xs,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  cardFrontHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
  },
  cardFrontTitle: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  cardScroll: { flex: 1 },
  cardScrollPad: { padding: Spacing.lg },
  nextBtn: {
    margin: Spacing.lg,
    marginTop: 0,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  doneView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  doneTitle: {
    fontSize: Typography.size.xl,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginTop: Spacing.md,
  },
  doneSub: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
  doneDivider: {
    width: 40, height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.3,
    marginVertical: Spacing.md,
  },
  doneQuote: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.sm * 1.8,
    fontWeight: Typography.weight.light,
  },
});

const cs = StyleSheet.create({
  container: { alignItems: 'center' },
  quoteText: {
    fontSize: Typography.size.md,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.md * 1.9,
    fontStyle: 'italic',
    fontWeight: Typography.weight.light,
  },
  divider: {
    width: 24, height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.4,
    marginVertical: Spacing.lg,
  },
  source: {
    fontSize: Typography.size.sm,
    letterSpacing: 1.5,
    fontWeight: Typography.weight.medium,
    textAlign: 'center',
  },
  medallionOuter: {
    width: 130, height: 130, borderRadius: 65,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  medallion: {
    width: 108, height: 108, borderRadius: 54,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  medallionInner: {
    width: 82, height: 82, borderRadius: 41,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  stoneEmoji:  { fontSize: 40, marginBottom: Spacing.lg },
  animalEmoji: { fontSize: 50, marginBottom: Spacing.lg },
  name: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  meta: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  body: {
    fontSize: Typography.size.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.9,
    fontWeight: Typography.weight.light,
    marginBottom: Spacing.lg,
  },
  affirmBox: {
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    width: '100%',
  },
  affirmText: {
    fontSize: Typography.size.sm,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.sm * 1.7,
    fontWeight: Typography.weight.light,
  },
});
