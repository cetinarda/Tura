import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, BorderRadius } from '../theme/colors';
import { activateMockPremium } from '../lib/premium';
import { useI18n } from '../i18n/useI18n';

interface Props {
  onClose: () => void;
  onActivated: () => void;
}

type Plan = 'mikro' | 'premium';

export function PaywallScreen({ onClose, onActivated }: Props) {
  const insets = useSafeAreaInsets();
  const { t, lang } = useI18n();
  const [plan, setPlan] = useState<Plan>('mikro');
  const [busy, setBusy] = useState(false);

  const MIKRO_FEATURES = [
    { icon: '⊕', title: lang === 'en' ? 'Full Animal Guidance' : 'Tüm Hayvan Rehberliği', desc: lang === 'en' ? 'Deep pages: mythology, Jung, traditions, shadow' : 'Derin sayfalar: mitoloji, Jung, gelenekler, gölge' },
    { icon: '◈', title: lang === 'en' ? 'Personal Map' : 'Kişisel Harita', desc: lang === 'en' ? 'Numerology, Human Design, weekly reading' : 'Numeroloji, Human Design, haftalık okuma' },
    { icon: '✦', title: lang === 'en' ? 'Unlimited Archive' : 'Sınırsız Arşiv', desc: lang === 'en' ? 'All past readings · annual summary' : 'Tüm geçmiş okumaların · yıllık özet' },
    { icon: '⊙', title: lang === 'en' ? 'Ad-free' : 'Reklamsız', desc: lang === 'en' ? 'Silent space. No interruptions.' : 'Sessiz meclis. Hiç bir kesinti yok' },
  ];
  const PREMIUM_FEATURES = [
    { icon: '✦', title: lang === 'en' ? 'Full Sakin Family' : 'Tüm Sakin Ailesi', desc: lang === 'en' ? 'Animal + Crystal + Words + Human Design + Tarot + Numerology' : 'Hayvan + Kristal + Söz + Human Design + Tarot + Numeroloji' },
    { icon: '⊕', title: 'Family Sharing', desc: lang === 'en' ? 'Share with up to 5 family members' : '5 aile üyesine kadar paylaş' },
    { icon: '◈', title: lang === 'en' ? 'Birth Chart' : 'Doğum Haritası', desc: lang === 'en' ? 'Detailed PDF report — as a gift' : 'Detaylı PDF rapor — hediye' },
    { icon: '◎', title: lang === 'en' ? 'Early Access' : 'Erken Erişim', desc: lang === 'en' ? 'Be the first into new Sakin apps' : "Yeni Sakin app'lerine ilk sen gir" },
  ];

  const handlePurchase = async () => {
    setBusy(true);
    try {
      await activateMockPremium(plan === 'mikro' ? 'monthly' : 'yearly');
      onActivated();
    } catch {
      Alert.alert(t('paywall.errorPurchaseTitle' as any), t('paywall.errorPurchase' as any));
    } finally {
      setBusy(false);
    }
  };

  const features = plan === 'mikro' ? MIKRO_FEATURES : PREMIUM_FEATURES;

  const handleRestore = async () => {
    Alert.alert(t('paywall.infoRestoreTitle' as any), t('paywall.infoRestore' as any));
  };

  return (
    <View style={styles.root}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + Spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={onClose} style={styles.closeBtn} hitSlop={12}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <View style={styles.hero}>
          <Text style={styles.familyEyebrow}>{t('paywall.eyebrow' as any)}</Text>
          <Text style={styles.heroSymbol}>✦</Text>
          <Text style={styles.heroTitle}>
            {plan === 'mikro' ? t('paywall.mikroTitle' as any) : t('paywall.premiumTitle' as any)}
          </Text>
          <Text style={styles.heroSub}>
            {plan === 'mikro' ? t('paywall.mikroSub' as any) : t('paywall.premiumSub' as any)}
          </Text>
        </View>

        <View style={styles.plansRow}>
          <PlanCard
            active={plan === 'mikro'}
            label={t('paywall.mikroPlan' as any)}
            price="24 ₺"
            cadence={t('paywall.mikroCadence' as any)}
            onPress={() => setPlan('mikro')}
          />
          <PlanCard
            active={plan === 'premium'}
            label={t('paywall.premiumPlan' as any)}
            price="89 ₺"
            cadence={t('paywall.premiumCadence' as any)}
            badge={t('paywall.mostPopular' as any)}
            onPress={() => setPlan('premium')}
          />
        </View>

        <Text style={styles.priceHint}>
          {Platform.OS === 'ios'
            ? t('paywall.iosPrice' as any)
            : t('paywall.androidPrice' as any)}
        </Text>

        <View style={styles.features}>
          {features.map(f => (
            <View key={f.title} style={styles.featureRow}>
              <View style={styles.featureIconBox}>
                <Text style={styles.featureIcon}>{f.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.cta, { opacity: busy ? 0.5 : 1 }]}
          onPress={handlePurchase}
          disabled={busy}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>{t('paywall.ctaBtn' as any)}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn}>
          <Text style={styles.restoreText}>{t('paywall.restoreBtn' as any)}</Text>
        </TouchableOpacity>

        <Text style={styles.legal}>
          {t('paywall.legal' as any)}
        </Text>
      </ScrollView>
    </View>
  );
}

function PlanCard({
  active, label, price, cadence, badge, onPress,
}: {
  active: boolean; label: string; price: string; cadence: string;
  badge?: string; onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.planCard, active && styles.planCardActive]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {badge && (
        <View style={styles.badgeWrap}>
          <Text style={styles.badge}>{badge}</Text>
        </View>
      )}
      <Text style={[styles.planLabel, active && { color: Colors.gold }]}>{label}</Text>
      <Text style={[styles.planPrice, active && { color: Colors.goldLight }]}>{price}</Text>
      <Text style={styles.planCadence}>{cadence}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.background },
  scroll: { paddingHorizontal: Spacing.xl, paddingBottom: Spacing.xxxl },
  closeBtn: { alignSelf: 'flex-end', padding: Spacing.sm },
  closeText: { fontSize: 22, color: Colors.textMuted },
  hero: { alignItems: 'center', marginVertical: Spacing.xl },
  familyEyebrow: {
    fontSize: 10,
    color: Colors.sakinLavender,
    letterSpacing: 4,
    marginBottom: Spacing.sm,
  },
  heroSymbol: { fontSize: 44, color: Colors.gold, marginBottom: Spacing.sm },
  heroTitle: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
    letterSpacing: 3,
  },
  heroSub: {
    fontSize: Typography.size.sm,
    color: Colors.textMuted,
    letterSpacing: 1,
    marginTop: Spacing.xs,
  },
  features: { gap: Spacing.md, marginVertical: Spacing.xl },
  featureRow: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.md,
  },
  featureIconBox: {
    width: 40, height: 40, borderRadius: 20,
    borderWidth: 1, borderColor: Colors.gold + '40',
    backgroundColor: Colors.goldGlow,
    alignItems: 'center', justifyContent: 'center',
  },
  featureIcon: { fontSize: 18, color: Colors.gold },
  featureTitle: {
    fontSize: Typography.size.sm,
    fontWeight: Typography.weight.semibold,
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    lineHeight: Typography.size.xs * 1.6,
  },
  plansRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  planCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    backgroundColor: Colors.backgroundCard,
    position: 'relative',
  },
  planCardActive: {
    borderColor: Colors.gold,
    backgroundColor: Colors.goldGlow,
  },
  badgeWrap: {
    position: 'absolute', top: -8,
    paddingHorizontal: 8, paddingVertical: 2,
    backgroundColor: Colors.gold,
    borderRadius: BorderRadius.round,
  },
  badge: {
    fontSize: 9,
    fontWeight: Typography.weight.bold,
    color: '#1A1208',
    letterSpacing: 1,
  },
  planLabel: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: Spacing.xs,
  },
  planPrice: {
    fontSize: Typography.size.xxl,
    fontWeight: Typography.weight.bold,
    color: Colors.textPrimary,
  },
  planCadence: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    marginTop: 2,
  },
  priceHint: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: Spacing.sm,
    fontStyle: 'italic',
  },
  cta: {
    backgroundColor: Colors.gold,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  ctaText: {
    fontSize: Typography.size.md,
    fontWeight: Typography.weight.bold,
    color: '#1A1208',
    letterSpacing: 1.5,
  },
  restoreBtn: { paddingVertical: Spacing.md, alignItems: 'center' },
  restoreText: {
    fontSize: Typography.size.xs,
    color: Colors.textMuted,
    letterSpacing: 0.5,
    textDecorationLine: 'underline',
  },
  legal: {
    fontSize: 10,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
    marginTop: Spacing.md,
    opacity: 0.7,
  },
});
