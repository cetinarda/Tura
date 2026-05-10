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
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import quotesData from '../data/quotes.json';
import stonesData from '../data/stones.json';
import animalsData from '../data/animals.json';
import philosophersData from '../data/philosophers.json';
import { useTuraStore } from '../store/useStore';

interface HomeScreenProps {
  onNavigateToProfile?: () => void;
}

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = Math.min(Math.round(SCREEN_W * 0.65), 270);
const CARD_H = Math.round(CARD_W * 1.75);
const STACK = 7;

const DECKS = [
  { title: 'Sözler', short: 'SÖZ',    subtitle: 'Anadolu bilgeliğinden',          color: Colors.gold,   motif: '✦' },
  { title: 'Taşlar', short: 'TAŞ',    subtitle: 'Kristal enerjisinden',            color: Colors.purple, motif: '◈' },
  { title: 'Hayvan', short: 'HAYVAN', subtitle: 'A. Nilgün Arıt\'in rehberliğiyle', color: Colors.teal,   motif: '⊕' },
];

function KilimBand({ color }: { color: string }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
      {['◆', '▲', '◆', '▼', '◆', '▲', '◆', '▼', '◆'].map((s, i) => (
        <Text key={i} style={{ color, fontSize: 5.5, opacity: 0.5 }}>{s}</Text>
      ))}
    </View>
  );
}

function FallbackImage({
  uri,
  fallback,
  imgStyle,
}: {
  uri?: string;
  fallback: string;
  imgStyle: object;
}) {
  const [err, setErr] = useState(false);
  if (!uri || err) {
    return <Text style={cs.bigEmoji}>{fallback}</Text>;
  }
  return (
    <Image
      source={{ uri }}
      style={[cs.roundImg, imgStyle]}
      onError={() => setErr(true)}
    />
  );
}

function PortraitImage({ uri, color }: { uri?: string; color: string }) {
  const [err, setErr] = useState(false);
  if (!uri || err) {
    return <Text style={[cs.portraitSymbol, { color }]}>✦</Text>;
  }
  return (
    <Image
      source={{ uri }}
      style={[cs.portrait, { borderColor: color + '40' }]}
      onError={() => setErr(true)}
    />
  );
}

function QuoteContent({ quote }: { quote: typeof quotesData[0] }) {
  const philosopher = (philosophersData as Record<string, { imageUrl?: string }>)[quote.source];
  return (
    <View style={cs.container}>
      <PortraitImage uri={philosopher?.imageUrl} color={Colors.gold} />
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
        <View style={[cs.inner, { borderColor: Colors.purple + '30' }]}>
          <FallbackImage
            uri={(stone as any).imageUrl}
            fallback={stone.emoji}
            imgStyle={cs.roundImg}
          />
        </View>
      </View>
      <Text style={[cs.itemName, { color: Colors.purpleLight }]}>{stone.name}</Text>
      <Text style={cs.meta}>{stone.chakra}</Text>
      {(stone as any).plant && (
        <Text style={cs.plantTag}>✿ {(stone as any).plant}</Text>
      )}
      <View style={[cs.divider, { backgroundColor: Colors.purple }]} />
      <Text style={cs.body}>{stone.dailyMessage}</Text>
      <View style={[cs.affirmBox, { borderColor: Colors.purple + '35' }]}>
        <Text style={[cs.affirmText, { color: Colors.purpleLight }]}>{stone.affirmation}</Text>
      </View>
    </View>
  );
}

function AnimalContent({ animal }: { animal: typeof animalsData[0] }) {
  return (
    <View style={cs.container}>
      <View style={[cs.medallion, { borderColor: Colors.teal + '50' }]}>
        <View style={[cs.inner, { borderColor: Colors.teal + '30' }]}>
          <FallbackImage
            uri={(animal as any).imageUrl}
            fallback={animal.emoji}
            imgStyle={cs.roundImg}
          />
        </View>
      </View>
      <Text style={[cs.itemName, { color: Colors.tealLight }]}>{animal.name}</Text>
      <Text style={cs.meta}>{animal.element} · {animal.symbolism[0]}</Text>
      <View style={[cs.divider, { backgroundColor: Colors.teal }]} />
      <Text style={cs.body}>{animal.dailyMessage}</Text>
      <View style={[cs.affirmBox, { borderColor: Colors.teal + '35' }]}>
        <Text style={[cs.affirmText, { color: Colors.tealLight }]}>{animal.guidance}</Text>
      </View>
    </View>
  );
}

function MiniDeck({ deck, state }: { deck: typeof DECKS[0]; state: 'done' | 'active' | 'pending' }) {
  const color = state === 'pending' ? Colors.textMuted : deck.color;
  return (
    <View style={[ms.wrapper, state === 'active' && { opacity: 1 }, state === 'pending' && { opacity: 0.35 }]}>
      <View style={[ms.card, ms.shadow2, { borderColor: color + '20' }]} />
      <View style={[ms.card, ms.shadow1, { borderColor: color + '40' }]} />
      <View style={[ms.card, ms.front, {
        borderColor: color,
        backgroundColor: state === 'active' ? color + '15' : Colors.backgroundCard,
      }]}>
        <Text style={{ fontSize: 10, color, fontWeight: '700' }}>
          {state === 'done' ? '✓' : deck.motif}
        </Text>
      </View>
      <Text style={[ms.label, { color }]}>{deck.short}</Text>
    </View>
  );
}

export function HomeScreen({ onNavigateToProfile }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { profile, dailyReading, generateDailyReading, updateStats } = useTuraStore();

  const [reading, setReading] = useState(dailyReading);
  const [step, setStep]       = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone]       = useState(false);

  const backFade  = useRef(new Animated.Value(1)).current;
  const frontFade = useRef(new Animated.Value(0)).current;
  const revealedRef = useRef(false);

  useEffect(() => {
    if (!reading) {
      const qIds = quotesData.map(q => q.id);
      const sIds = stonesData.map(s => s.id);
      const aIds = animalsData.map(a => a.id);
      generateDailyReading(qIds, sIds, aIds, aIds).then(r => {
        const q = quotesData.find(x => x.id === r.quoteId)!;
        updateStats(q.id, q.source, r.stoneId, r.animalId, r.nagualId);
        setReading(r);
      });
    }
  }, []);

  useEffect(() => {
    let sub: { remove: () => void } | null = null;
    let lx = 0, ly = 0, lz = 0, cool = false;
    const setup = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { Accelerometer } = require('expo-sensors');
        Accelerometer.setUpdateInterval(100);
        sub = Accelerometer.addListener(({ x, y, z }: { x: number; y: number; z: number }) => {
          const d = Math.abs(x - lx) + Math.abs(y - ly) + Math.abs(z - lz);
          lx = x; ly = y; lz = z;
          if (d > 2.4 && !revealedRef.current && !cool) {
            cool = true;
            setTimeout(() => { cool = false; }, 800);
            triggerReveal();
          }
        });
      } catch { /* web fallback */ }
    };
    setup();
    return () => { sub?.remove(); };
  }, []);

  const quote  = reading ? quotesData.find(q => q.id === reading.quoteId)  : null;
  const stone  = reading ? stonesData.find(s => s.id === reading.stoneId)  : null;
  const animal = reading ? animalsData.find(a => a.id === reading.animalId) : null;

  const deck = DECKS[step];

  const triggerReveal = () => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setRevealed(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.parallel([
      Animated.timing(backFade,  { toValue: 0, duration: 280, useNativeDriver: true }),
      Animated.timing(frontFade, { toValue: 1, duration: 380, useNativeDriver: true }),
    ]).start();
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (step < DECKS.length - 1) {
      Animated.timing(frontFade, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
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

      <View style={styles.main}>

        {done ? (
          <View style={styles.doneWrap}>
            <Text style={{ fontSize: 40, color: Colors.gold }}>☀</Text>
            <Text style={styles.doneTitle}>Günlük rehberlik{'\n'}tamamlandı</Text>
            <Text style={styles.doneSub}>Yarın yeni bir yolculuk başlar</Text>
            {quote && (
              <>
                <View style={styles.doneLine} />
                <Text style={styles.doneQuote}>
                  {quote.text.length > 90 ? quote.text.slice(0, 87) + '…' : quote.text}
                </Text>
              </>
            )}
          </View>

        ) : (
          <>
            <View style={styles.deckOuter}>
              <View style={[styles.shadowCard, {
                borderColor: deck.color + '18',
                top: 0, left: STACK * 2,
              }]} />
              <View style={[styles.shadowCard, {
                borderColor: deck.color + '35',
                top: STACK * 0.6, left: STACK,
              }]} />

              <View style={[styles.card, { top: STACK, left: 0, borderColor: deck.color + '55' }]}>
                <Animated.View
                  style={[StyleSheet.absoluteFill, { opacity: backFade }]}
                  pointerEvents={revealed ? 'none' : 'auto'}
                >
                  <TouchableOpacity
                    style={styles.backInner}
                    onPress={triggerReveal}
                    activeOpacity={0.85}
                  >
                    <View style={styles.bandRow}>
                      <View style={[styles.bandLine, { backgroundColor: deck.color }]} />
                      <KilimBand color={deck.color} />
                      <View style={[styles.bandLine, { backgroundColor: deck.color }]} />
                    </View>

                    <View style={styles.backCenter}>
                      <Text style={[styles.cStar, { top: 0, left: 0, color: deck.color }]}>✦</Text>
                      <Text style={[styles.cStar, { top: 0, right: 0, color: deck.color }]}>✦</Text>
                      <Text style={[styles.cStar, { bottom: 0, left: 0, color: deck.color }]}>✦</Text>
                      <Text style={[styles.cStar, { bottom: 0, right: 0, color: deck.color }]}>✦</Text>
                      <View style={[styles.hLine, { top: '30%', backgroundColor: deck.color }]} />
                      <View style={[styles.hLine, { bottom: '30%', backgroundColor: deck.color }]} />

                      <Text style={{ fontSize: 38, color: deck.color, lineHeight: 44 }}>☀</Text>
                      <Text style={[styles.backTitle, { color: deck.color }]}>{deck.title}</Text>
                      <Text style={styles.backSub}>{deck.subtitle}</Text>

                      <View style={styles.tapRow}>
                        <View style={[styles.tapLine, { backgroundColor: deck.color }]} />
                        <Text style={[styles.tapHint, { color: deck.color }]}>salla · dokun</Text>
                        <View style={[styles.tapLine, { backgroundColor: deck.color }]} />
                      </View>
                    </View>

                    <View style={styles.bandRow}>
                      <View style={[styles.bandLine, { backgroundColor: deck.color }]} />
                      <KilimBand color={deck.color} />
                      <View style={[styles.bandLine, { backgroundColor: deck.color }]} />
                    </View>
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View
                  style={[StyleSheet.absoluteFill, { opacity: frontFade }]}
                  pointerEvents={revealed ? 'auto' : 'none'}
                >
                  <View style={[styles.frontHeader, { borderBottomColor: deck.color + '30' }]}>
                    <Text style={{ fontSize: 10, color: deck.color }}>☀</Text>
                    <Text style={[styles.frontTitle, { color: deck.color }]}>{deck.title}</Text>
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
                    style={[styles.nextBtn, { borderColor: deck.color }]}
                    onPress={handleNext}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.nextBtnText, { color: deck.color }]}>
                      {step < DECKS.length - 1 ? 'Sıradaki Deste →' : 'Tamamlandı ✦'}
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>

            <View style={styles.deckRow}>
              {DECKS.map((d, i) => (
                <MiniDeck
                  key={i}
                  deck={d}
                  state={i < step ? 'done' : i === step ? 'active' : 'pending'}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
}

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

  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Spacing.xl,
    gap: Spacing.xl,
  },

  deckOuter: {
    width: CARD_W + STACK * 2,
    height: CARD_H + STACK,
    position: 'relative',
  },
  shadowCard: {
    position: 'absolute',
    width: CARD_W,
    height: CARD_H,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  card: {
    position: 'absolute',
    width: CARD_W,
    height: CARD_H,
    backgroundColor: Colors.backgroundCard,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },

  backInner: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    justifyContent: 'space-between',
  },
  bandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  bandLine: { flex: 1, height: 1, opacity: 0.25 },
  backCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    position: 'relative',
  },
  cStar: { position: 'absolute', fontSize: 8, opacity: 0.4 },
  hLine: { position: 'absolute', left: 0, right: 0, height: 1, opacity: 0.1 },
  backTitle: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.bold,
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 2,
  },
  backSub: {
    fontSize: 10,
    color: Colors.textMuted,
    letterSpacing: 0.8,
  },
  tapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: Spacing.md,
    opacity: 0.6,
  },
  tapLine: { flex: 1, height: 1, opacity: 0.5 },
  tapHint: { fontSize: 8, letterSpacing: 2, textTransform: 'uppercase' },

  frontHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderBottomWidth: 1,
  },
  frontTitle: {
    fontSize: 9,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  scroll: { flex: 1 },
  scrollPad: { padding: Spacing.md },
  nextBtn: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.round,
    borderWidth: 1,
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: 10,
    fontWeight: Typography.weight.semibold,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  deckRow: {
    flexDirection: 'row',
    gap: Spacing.xl,
    alignItems: 'flex-end',
  },

  doneWrap: {
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.xl,
  },
  doneTitle: {
    fontSize: Typography.size.lg,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.lg * 1.5,
    marginTop: Spacing.sm,
  },
  doneSub: { fontSize: Typography.size.xs, color: Colors.textMuted, letterSpacing: 0.8 },
  doneLine: {
    width: 28, height: 1,
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

const ms = StyleSheet.create({
  wrapper: { alignItems: 'center', gap: 4 },
  card: {
    position: 'absolute',
    width: 36, height: 54,
    backgroundColor: Colors.backgroundCard,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow2: { top: 0, left: 4 },
  shadow1: { top: 2, left: 2 },
  front:   { top: 4, left: 0 },
  label: {
    fontSize: 9,
    letterSpacing: 0.8,
    marginTop: 58,
    textTransform: 'uppercase',
    fontWeight: Typography.weight.medium,
  },
});

const cs = StyleSheet.create({
  container: { alignItems: 'center' },
  portrait: {
    width: 52, height: 52,
    borderRadius: 26,
    marginBottom: Spacing.sm,
    borderWidth: 1,
  },
  portraitSymbol: {
    fontSize: 22,
    marginBottom: Spacing.sm,
    opacity: 0.7,
  },
  quoteText: {
    fontSize: Typography.size.xs,
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: Typography.size.xs * 2,
    fontStyle: 'italic',
    fontWeight: Typography.weight.light,
  },
  divider: {
    width: 18, height: 1,
    backgroundColor: Colors.gold,
    opacity: 0.4,
    marginVertical: Spacing.sm,
  },
  source: {
    fontSize: 10,
    letterSpacing: 1.2,
    fontWeight: Typography.weight.medium,
    textAlign: 'center',
  },
  medallion: {
    width: 74, height: 74, borderRadius: 37,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  inner: {
    width: 54, height: 54, borderRadius: 27,
    borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.02)',
    overflow: 'hidden',
  },
  roundImg: {
    width: 54, height: 54,
    borderRadius: 27,
  },
  bigEmoji: { fontSize: 26 },
  itemName: {
    fontSize: Typography.size.sm,
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
  plantTag: {
    fontSize: 9,
    color: Colors.tealLight,
    letterSpacing: 0.8,
    marginTop: 2,
    opacity: 0.8,
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
