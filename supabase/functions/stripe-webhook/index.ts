/**
 * Supabase Edge Function: stripe-webhook
 *
 * Receives Stripe events and syncs premium entitlements to Supabase.
 *
 * Setup in Stripe Dashboard:
 *   Webhooks → Add endpoint → https://<project>.supabase.co/functions/v1/stripe-webhook
 *   Events to listen: checkout.session.completed, customer.subscription.updated,
 *                     customer.subscription.deleted, invoice.payment_succeeded
 *
 * Required secrets (supabase secrets set):
 *   STRIPE_SECRET_KEY     — Stripe secret key (sk_live_… or sk_test_…)
 *   STRIPE_WEBHOOK_SECRET — Webhook signing secret (whsec_…)
 *   SUPABASE_SERVICE_ROLE_KEY — service-role key (already available as env var)
 *
 * Price ID → product mapping (update to match your Stripe price IDs):
 *   STRIPE_PRICE_MIKRO    — monthly price ID  (price_…)
 *   STRIPE_PRICE_PREMIUM  — yearly price ID   (price_…)
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { corsHeaders } from '../_shared/cors.ts';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  { auth: { persistSession: false } }
);

const PRICE_TO_PRODUCT: Record<string, string> = {
  [Deno.env.get('STRIPE_PRICE_MIKRO')    ?? '']: 'mikro',
  [Deno.env.get('STRIPE_PRICE_PREMIUM')  ?? '']: 'premium',
  [Deno.env.get('STRIPE_PRICE_SAKIN_ALL')?? '']: 'sakin_all',
};

function productFromPriceId(priceId: string): string {
  return PRICE_TO_PRODUCT[priceId] ?? 'premium';
}

async function resolveUserId(customerId: string): Promise<string | null> {
  const { data } = await supabase
    .from('stripe_customers')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();
  if (data?.user_id) return data.user_id;

  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) return null;
  const uid = (customer as Stripe.Customer).metadata?.supabase_user_id;
  if (!uid) return null;

  await supabase.from('stripe_customers').upsert({
    user_id: uid,
    stripe_customer_id: customerId,
  });
  return uid;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new Response('Missing stripe-signature', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET') ?? ''
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== 'subscription') break;
        const userId = await resolveUserId(session.customer as string);
        if (!userId) break;
        const sub = await stripe.subscriptions.retrieve(session.subscription as string);
        const priceId = sub.items.data[0]?.price.id ?? '';
        const product = productFromPriceId(priceId);
        const expiresAt = new Date(sub.current_period_end * 1000).toISOString();
        await supabase.rpc('upsert_stripe_entitlement', { p_user_id: userId, p_product: product, p_expires_at: expiresAt, p_stripe_sub: sub.id });
        break;
      }
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        if (!invoice.subscription) break;
        const sub = await stripe.subscriptions.retrieve(invoice.subscription as string);
        const userId = await resolveUserId(sub.customer as string);
        if (!userId) break;
        const priceId = sub.items.data[0]?.price.id ?? '';
        const product = productFromPriceId(priceId);
        const expiresAt = new Date(sub.current_period_end * 1000).toISOString();
        await supabase.rpc('upsert_stripe_entitlement', { p_user_id: userId, p_product: product, p_expires_at: expiresAt, p_stripe_sub: sub.id });
        break;
      }
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await supabase.rpc('revoke_stripe_entitlement', { p_stripe_sub: sub.id });
        break;
      }
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const userId = await resolveUserId(sub.customer as string);
        if (!userId) break;
        const priceId = sub.items.data[0]?.price.id ?? '';
        const product = productFromPriceId(priceId);
        const expiresAt = sub.status === 'active'
          ? new Date(sub.current_period_end * 1000).toISOString()
          : new Date().toISOString();
        await supabase.rpc('upsert_stripe_entitlement', { p_user_id: userId, p_product: product, p_expires_at: expiresAt, p_stripe_sub: sub.id });
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error('Event processing error:', err);
    return new Response(JSON.stringify({ error: 'Processing error' }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
