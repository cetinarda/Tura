/**
 * Supabase Edge Function: create-checkout
 *
 * Creates a Stripe Checkout session for sakin.life web purchases.
 * Called by the sakin.life frontend when a user clicks "Satın Al".
 *
 * Request (POST, JSON):
 *   { product: 'mikro' | 'premium' | 'sakin_all', return_url: string }
 *   Authorization: Bearer <supabase-user-jwt>
 *
 * Response:
 *   { url: string }  — redirect user to this URL
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@14?target=deno';
import { corsHeaders } from '../_shared/cors.ts';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2024-04-10',
  httpClient: Stripe.createFetchHttpClient(),
});

const PRODUCT_TO_PRICE: Record<string, string> = {
  mikro:     Deno.env.get('STRIPE_PRICE_MIKRO')    ?? '',
  premium:   Deno.env.get('STRIPE_PRICE_PREMIUM')  ?? '',
  sakin_all: Deno.env.get('STRIPE_PRICE_SAKIN_ALL') ?? '',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const jwt = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!jwt) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: `Bearer ${jwt}` } } }
  );

  const { data: { user }, error: authErr } = await supabase.auth.getUser();
  if (authErr || !user) {
    return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 401, headers: corsHeaders });
  }

  const body = await req.json().catch(() => ({}));
  const product: string = body.product ?? 'premium';
  const returnUrl: string = body.return_url ?? 'https://sakin.life/premium';

  const priceId = PRODUCT_TO_PRICE[product];
  if (!priceId) {
    return new Response(JSON.stringify({ error: `Unknown product: ${product}` }), { status: 400, headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    { auth: { persistSession: false } }
  );

  let stripeCustomerId: string | null = null;
  const { data: existing } = await supabaseAdmin
    .from('stripe_customers')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .single();

  if (existing?.stripe_customer_id) {
    stripeCustomerId = existing.stripe_customer_id;
  } else {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id },
    });
    stripeCustomerId = customer.id;
    await supabaseAdmin.from('stripe_customers').insert({
      user_id: user.id,
      stripe_customer_id: customer.id,
    });
  }

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${returnUrl}?status=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${returnUrl}?status=cancelled`,
    subscription_data: { metadata: { supabase_user_id: user.id, product } },
    allow_promotion_codes: true,
  });

  return new Response(
    JSON.stringify({ url: session.url }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
});
