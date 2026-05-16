# Supabase Backend — Deploy Checklist

## 1. Migration (schema)

```bash
supabase link --project-ref YOUR_PROJECT_ID
supabase db push
```

Or run `supabase/migrations/20260516000001_entitlements.sql`
directly in Supabase Dashboard → SQL Editor.

## 2. Deploy Edge Functions

```bash
supabase functions deploy stripe-webhook       --no-verify-jwt
supabase functions deploy create-checkout
supabase functions deploy generate-license-key --no-verify-jwt
```

## 3. Set secrets

```bash
supabase secrets set \
  STRIPE_SECRET_KEY=sk_live_... \
  STRIPE_WEBHOOK_SECRET=whsec_... \
  STRIPE_PRICE_MIKRO=price_... \
  STRIPE_PRICE_PREMIUM=price_...
```

## 4. Register Stripe Webhook

Stripe Dashboard → Developers → Webhooks → Add endpoint:

- URL: `https://YOUR_PROJECT.supabase.co/functions/v1/stripe-webhook`
- Events:
  - `checkout.session.completed`
  - `invoice.payment_succeeded`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

Copy the **Signing secret** → set as `STRIPE_WEBHOOK_SECRET`.

## 5. sakin.life Frontend Integration

When user clicks "Satın Al" on sakin.life:

```ts
const { data: { session } } = await supabase.auth.getSession();

const res = await fetch(
  'https://YOUR_PROJECT.supabase.co/functions/v1/create-checkout',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      product: 'premium',          // 'mikro' | 'premium' | 'sakin_all'
      return_url: 'https://sakin.life/premium',
    }),
  }
);
const { url } = await res.json();
window.location.href = url;  // redirect to Stripe Checkout
```

## 6. Generate License Keys (admin)

```bash
curl -X POST \
  https://YOUR_PROJECT.supabase.co/functions/v1/generate-license-key \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"product":"premium","count":10,"expires_days":365}'
```

Returns: `{ "keys": ["ABCD-EFGH-JKLM", ...] }`

Distribute keys to users — they enter them in the Tura mobile app
(Profil → Lisans Kodu) to unlock premium.

## 7. Mobile App Config

In `app.json` → `extra`:
```json
{
  "revenueCatIosKey": "appl_...",
  "revenueCatAndroidKey": "goog_..."
}
```

In `.env` (for Expo EAS builds):
```
EXPO_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

## Premium Resolution Priority (mobile)

1. RevenueCat / StoreKit (native IAP)
2. Supabase `sakin_entitlements` (web Stripe or redeemed key)
3. Local cache (offline fallback)
