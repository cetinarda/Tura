/**
 * Supabase Edge Function: generate-license-key
 *
 * Admin-only: generates one-time license keys (XXXX-XXXX-XXXX format)
 * for gifting, bulk licensing, or promotional distribution.
 *
 * Request (POST, JSON):
 *   { product: 'mikro' | 'premium' | 'sakin_all', count?: number, expires_days?: number }
 *   Authorization: Bearer <service-role-key>
 *
 * Response: { keys: string[] }
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

function generateKey(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I, O, 0, 1
  const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `${segment()}-${segment()}-${segment()}`;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const authHeader = req.headers.get('authorization') ?? '';
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  if (!authHeader.includes(serviceKey)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403, headers: corsHeaders });
  }

  const body = await req.json().catch(() => ({}));
  const product: string = body.product ?? 'premium';
  const count: number = Math.min(body.count ?? 1, 100);
  const expiresDays: number | null = body.expires_days ?? null;
  const expiresAt = expiresDays ? new Date(Date.now() + expiresDays * 86_400_000).toISOString() : null;

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    serviceKey,
    { auth: { persistSession: false } }
  );

  const keys: string[] = [];
  const rows = [];
  for (let i = 0; i < count; i++) {
    const key = generateKey();
    keys.push(key);
    rows.push({ license_key: key.toLowerCase(), source: 'key', product, expires_at: expiresAt });
  }

  const { error } = await supabase.from('sakin_entitlements').insert(rows);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
  }

  return new Response(
    JSON.stringify({ keys, product, expires_at: expiresAt }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
});
