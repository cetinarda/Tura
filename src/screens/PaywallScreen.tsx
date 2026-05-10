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

interface Props {
  onClose: () => void;
  onActivated: () => void;
}

const MIKRO_FEATURES = [
  { icon: '⊕', title: 'Tüm Hayvan Rehberliği', desc: 'Derin sayfalar: mitoloji, Jung, gelenekler, gölge' },
  { icon: '◈', title: 'Kişisel Harita',         desc: 'Numeroloji, Human Design, haftalık okuma' },
  { icon: '✦', title: 'Sınırsız Arşiv',         desc: 'Tüm geçmiş okumalarin · yıllık özet' },
  { icon: '⊙', title: 'Reklamsız',              desc: 'Sessiz meclis. Hiç bir kesinti yok' },
];

const PREMIUM_FEATURES = [
  { icon: '✦', title: 'Tüm Sakin Ailesi', desc: 'Hayvan + Kristal + Söz + Human Design + Tarot + Numeroloji' },
  { icon: '⊕', title: 'Family Sharing',    desc: '5 aile üyesine kadar paylaş' },
  { icon: '◈', title: 'Doğum Haritası',    desc: 'Detaylı PDF rapor — hediye' },
  { icon: '◎', title: 'Erken Erişim',      desc: "Yeni Sakin app'lerine ilk sen gir" },
];

type Plan = 'mikro' | 'premium';

export function PaywallScreen({ onClose, onActivated }: Props) {
  const insets = useSafeAreaInsets();
  const [plan, setPlan] = useState<Plan>('mikro');
  const [busy, setBusy] = useState(false);

  const handlePurchase = async () => {
    setBusy(true);
    try {
      await activateMockPremium(plan === 'mikro' ? 'monthly' : 'yearly');
      onActivated();
    } catch {
      Alert.alert('Hata', 'Satın alma tamamlanamadı.');
    } finally {
      setBusy(false);
    }
  };

  const features = plan === 'mikro' ? MIKRO_FEATURES : PREMIUM_FEATURES;

  const handleRestore = async () => {
    Alert.alert('Bilgi', 'Aboneliği geri yükleme servisi yakında.');
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
          <Text style={styles.familyEyebrow}>SAKİN AİLESİ</Text>
          <Text style={styles.heroSymbol}>✦</Text>
          <Text style={styles.heroTitle}>
            {plan === 'mikro' ? 'Hayvan Rehberi ✦' : 'Sakin Premium'}
          </Text>
          <Text style={styles.heroSub}>
            {plan === 'mikro'
              ? 'Hayvan rehberliğinin derinine in'
              : "Bir hesap. Tüm Sakin app'leri."}
          </Text>
        </View>

        <View style={styles.plansRow}>
          <PlanCard
            active={plan === 'mikro'}
            label="Mikro"
            price="24 ₺"
            cadence="ay · sadece Hayvan"
            onPress={() => setPlan('mikro')}
          />
          <PlanCard
            active={plan === 'premium'}
            label="Premium"
            price="89 ₺"
            cadence="ay · tüm aile"
            badge="EN POPUİLER"
            onPress={() => setPlan('premium')}
          />
        </View>

        <Text style={styles.priceHint}>
          {Platform.OS === 'ios'
            ? 'Fiyatlar App Store üzerinden gösterilir.'
            : 'Fiyatlar Play Store üzerinden gösterilir.'}
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
          <Text style={styles.ctaText}>Üstad Ol ✦</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn}>
          <Text style={styles.restoreText}>Aboneliği Geri Yükle</Text>
        </TouchableOpacity>

        <Text style={styles.legal}>
          Abonelik otomatik yenilenir. Hesap ayarlarından iptal edebilirsin.
          Kullanım şartları ve gizlilik politikası geçerlidir.
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
