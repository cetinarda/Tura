import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
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

const { width: SCREEN_W } = Dimensions.get('window');
// Tarot card: fixed small size, centered
const CARD_W = Math.min(Math.round(SCREEN_W * 0.62), 260);
const CARD_H = Math.round(CARD_W * 1.75);

// ─── Decorations ──────────────────────────────────────────────────────────────

function KilimBand({ color }: { color: string }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
      {['◆', '▲', '◆', '▼', '◆', '▲', '◆', '▼', '◆'].map((s, i) => (
        <Text key={i} style={{ color, fontSize: 6, opacity: 0.55 }}>{s}</Text>
      ))}
    </View>
  );
}

function SunSymbol({ color, size = 28 }: { color: string; size?: number }) {
  return <Text style={{ fontSize: size, color, lineHeight: size + 2 }}>☀</Text>;
}

// ─── Card content ─────────────────────────────────────────────────────────────

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
          <Text style={cs.emoji}>{stone.emoji}</Text>
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
            <Text style={cs.emoji}>{animal.emoji}</Text>
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

// ─── Main screen ──────────────────────────────────────────────────────────────

const CARDS = [
  { title: 'Bilgenin Sözü',  subtitle: 'Anadolu bilgeliğinden', color: Colors.gold },
  { title: 'Kristal Rehber', subtitle: 'Taşın enerjisinden',    color: Colors.purple },
  { title: 'Ruh Hayvanın',   subtitle: 'Şamanik gelenekten',    color: Colors.teal },
];

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats } = useTuraStore();

  const [reading, setReading] = useState(dailyReading);
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const backFade  = useRef(new Animated.Value(1)).current;
  const frontFade = useRef(new Animated.Value(0)).current;
  const revealedRef = useRef(false);

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

  // Shake detection
  useEffect(() => {
    let subscription: { remove: () => void } | null = null;
    let lx = 0, ly = 0, lz = 0;
    let cooldown = false;

    const setup = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { Accelerometer } = require('expo-sensors');
        Accelerometer.setUpdateInterval(100);
        subscription = Accelerometer.addListener(({ x, y, z }: { x: number; y: number; z: number }) => {
          const delta = Math.abs(x - lx) + Math.abs(y - ly) + Math.abs(z - lz);
          lx = x; ly = y; lz = z;
          if (delta > 2.4 && !revealedRef.current && !cooldown) {
            cooldown = true;
            setTimeout(() => { cooldown = false; }, 800);
            triggerReveal();
          }
        });
      } catch { /* web / no sensor */ }
    };
    setup();
    return () => { subscription?.remove(); };
  }, []);

  const quote  = reading ? quotesData.find(q => q.id === reading.quoteId)  : null;
  const stone  = reading ? stonesData.find(s => s.id === reading.stoneId)  : null;
  const animal = reading ? animalsData.find(a => a.id === reading.animalId) : null;

  const card = CARDS[step];

  const triggerReveal = () => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setRevealed(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Both animations run in parallel — no race condition
    Animated.parallel([
      Animated.timing(backFade,  { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(frontFade, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (step < CARDS.length - 1) {
      Animated.timing(frontFade, { toValue: 0, duration: 220, useNativeDriver: true }).start(() => {
        setStep(s => s + 1);
        setRevealed(false);
        revealedRef.current = false;
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
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      {/* Header */}
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

      {/* Step dots */}
      {!done && (
        <View style={styles.dots}>
          {CARDS.map((c, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < step  && { backgroundColor: Colors.textMuted, width: 5 },
                i === step && { backgroundColor: c.color, width: 18 },
                i > step  && { backgroundColor: Colors.divider, width: 5 },
              ]}
            />
          ))}
        </View>
      )}

      {/* Card area */}
      <View style={styles.cardArea}>
        {done ? (
          <View style={styles.doneView}>
            <SunSymbol color={Colors.gold} size={40} />
            <Text style={styles.doneTitle}>Günlük rehberlik{'\n'}tamamlandı</Text>
            <Text style={styles.doneSub}>Yarın yeni bir yolculuk başlar</Text>
            {quote && (
              <>
                <View style={styles.doneDivider} />
                <Text style={styles.doneQuote}>
                  {quote.text.length > 90 ? quote.text.slice(0, 87) + '…' : quote.text}
                </Text>
              </>
            )}
          </View>
        ) : (
          // Fixed-size card — back and front stacked, controlled by opacity only
          <View style={styles.card}>
            {/* ── Back side ── */}
            <Animated.View
              style={[StyleSheet.absoluteFill, { opacity: backFade }]}
              pointerEvents={revealed ? 'none' : 'auto'}
            >
              <TouchableOpacity
                style={styles.cardBackInner}
                onPress={triggerReveal}
                activeOpacity={0.85}
              >
                <View style={styles.bandRow}>
                  <View style={[styles.bandLine, { backgroundColor: card.color }]} />
                  <KilimBand color={card.color} />
                  <View style={[styles.bandLine, { backgroundColor: card.color }]} />
                </View>

                <View style={styles.backCenter}>
                  <Text style={[styles.cornerStar, { top: 0, left: 0,  color: card.color }]}>✦</Text>
                  <Text style={[styles.cornerStar, { top: 0, right: 0, color: card.color }]}>✦</Text>
                  <Text style={[styles.cornerStar, { bottom: 0, left: 0,  color: card.color }]}>✦</Text>
                  <Text style={[styles.cornerStar, { bottom: 0, right: 0, color: card.color }]}>✦</Text>
                  <View style={[styles.hLine, { top: '28%', backgroundColor: card.color }]} />
                  <View style={[styles.hLine, { bottom: '28%', backgroundColor: card.color }]} />

                  <SunSymbol color={card.color} size={44} />
                  <Text style={[styles.backTitle, { color: card.color }]}>{card.title}</Text>
                  <Text style={styles.backSub}>{card.subtitle}</Text>
                  <View style={styles.tapRow}>
                    <View style={[styles.tapLine, { backgroundColor: card.color }]} />
                    <Text style={[styles.tapHint, { color: card.color }]}>salla · dokun</Text>
                    <View style={[styles.tapLine, { backgroundColor: card.color }]} />
                  </View>
                </View>

                <View style={styles.bandRow}>
                  <View style={[styles.bandLine, { backgroundColor: card.color }]} />
                  <KilimBand color={card.color} />
                  <View style={[styles.bandLine, { backgroundColor: card.color }]} />
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* ── Front side ── */}
            <Animated.View
              style={[StyleSheet.absoluteFill, { opacity: frontFade }]}
              pointerEvents={revealed ? 'auto' : 'none'}
            >
              <View style={[styles.frontHeader, { borderBottomColor: card.color + '30' }]}>
                <SunSymbol color={card.color} size={11} />
                <Text style={[styles.frontTitle, { color: card.color }]}>{card.title}</Text>
              </View>
              <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollPad}
                showsVerticalScrollIndicator={false}
              >
                {step === 0 && quote  && <QuoteContent quote={quote} />}
                {step === 1 && stone  && <StoneContent stone={stone} />}
                {step === 2 && animal && <AnimalContent animal={animal} />}
              </ScrollView>
              <TouchableOpacity
                style={[styles.nextBtn, { borderColor: card.color }]}
                onPress={handleNext}
                activeOpacity={0.8}
              >
                <Text style={[styles.nextBtnText, { color: card.color }]}>
                  {step < CARDS.length - 1 ? 'Sonraki →' : 'Tamamlandı'}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </View>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },

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
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    marginTop: 1,
  },
  profileBtn: {
    width: 34, height: 34, borderRadius: 17,
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
    gap: 5,
    paddingVertical: Spacing.xs,
  },
  dot: { height: 5, borderRadius: 2.5 },

  cardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Spacing.xl,
  },

  // Fixed tarot card
  card: {
    width: CARD_W,
    height: CARD_H,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },

  // Back side
  cardBackInner: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    justifyContent: 'space-between',
  },
  bandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bandLine: { flex: 1, height: 1, opacity: 0.25 },
  backCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    position: 'relative',
  },
  cornerStar: {
    position: 'absolute',
    fontSize: 9,
    opacity: 0.4,
  },
  hLine: {
    position: 'absolute',
    left: 0, right: 0,
    height: 1,
    opacity: 0.1,
  },
  backTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.bold,
    letterSpacing: 1.5,
    textAlign: 'center',
    marginTop: Spacing.xs,
  },
  backSub: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.8,
  },
  tapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    marginTop: Spacing.lg,
    opacity: 0.6,
  },
  tapLine: { flex: 1, height: 1, opacity: 0.5 },
  tapHint: {
    fontSize: 9,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
  },

  // Front side
  frontHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
  },
  frontTitle: {
    fontSize: 10,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  scroll: { flex: 1 },
  scrollPad: { padding: Spacing.md },

  nextBtn: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: Typography.size.xs,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  // Done
  doneView: {
    alignItems: 'center',
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  doneTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginTop: Spacing.sm,
    lineHeight: Typography.size.lg * 1.5,
  },
  doneSub: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.8,
  },
  doneDivider: {
    width: 32, height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.3,
    marginVertical: Spacing.sm,
  },
  doneQuote: {
    fontSize: Typography.size.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.xs * 1.9,
    fontWeight: Typography.weight.light,
    maxWidth: 260,
  },
});

const cs = StyleSheet.create({
  container: { alignItems: 'center' },
  quoteText: {
    fontSize: Typography.size.sm,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.sm * 1.9,
    fontStyle: 'italic',
    fontWeight: Typography.weight.light,
  },
  divider: {
    width: 20, height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.4,
    marginVertical: Spacing.md,
  },
  source: {
    fontSize: Typography.size.xs,
    letterSpacing: 1.2,
    fontWeight: Typography.weight.medium,
    textAlign: 'center',
  },
  medallionOuter: {
    width: 90, height: 90, borderRadius: 45,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  medallion: {
    width: 72, height: 72, borderRadius: 36,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  medallionInner: {
    width: 54, height: 54, borderRadius: 27,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  emoji: { fontSize: 26, marginBottom: 2 },
  name: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 0.4,
    marginBottom: 2,
  },
  meta: {
    fontSize: 9,
    color: Colors.textMuted,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  body: {
    fontSize: Typography.size.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: Typography.size.xs * 1.9,
    fontWeight: Typography.weight.light,
    marginBottom: Spacing.sm,
  },
  affirmBox: {
    borderWidth: 1,
    borderRadius: BorderRadius.sm,
    padding: Spacing.sm,
    width: '100%',
  },
  affirmText: {
    fontSize: Typography.size.xs,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: Typography.size.xs * 1.7,
    fontWeight: Typography.weight.light,
  },
});
