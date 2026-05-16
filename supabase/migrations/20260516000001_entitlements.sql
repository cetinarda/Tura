-- ============================================================
-- sakin.life — Cross-platform entitlement schema
-- Enables premium purchased on web (sakin.life via Stripe)
-- to unlock the same features in Tura and other mobile apps.
-- ============================================================

-- Map Supabase users ↔ Stripe customers
create table if not exists stripe_customers (
  user_id           uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text unique not null,
  created_at        timestamptz default now()
);

alter table stripe_customers enable row level security;
create policy "users read own stripe customer"
  on stripe_customers for select
  using (auth.uid() = user_id);

-- ============================================================
-- Main entitlement store
-- source: 'stripe_web' | 'ios_iap' | 'android_iap' | 'key'
-- product: 'mikro' | 'premium' | 'sakin_all'
-- ============================================================
create table if not exists sakin_entitlements (
  id              uuid        default gen_random_uuid() primary key,
  user_id         uuid        references auth.users(id) on delete cascade,
  license_key     text        unique,
  source          text        not null,
  product         text        not null,
  stripe_sub_id   text,
  expires_at      timestamptz,
  redeemed_by     uuid        references auth.users(id),
  redeemed_at     timestamptz,
  created_at      timestamptz default now()
);

alter table sakin_entitlements enable row level security;

create policy "users read own entitlements"
  on sakin_entitlements for select
  using (auth.uid() = user_id or auth.uid() = redeemed_by);

create unique index if not exists uniq_user_stripe_sub
  on sakin_entitlements (user_id, stripe_sub_id)
  where stripe_sub_id is not null;

create or replace function check_sakin_entitlement()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  return exists (
    select 1
    from sakin_entitlements
    where (user_id = auth.uid() or redeemed_by = auth.uid())
      and (expires_at is null or expires_at > now())
  );
end;
$$;

create or replace function redeem_license_key(p_key text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_ent sakin_entitlements;
begin
  if auth.uid() is null then
    return json_build_object('success', false, 'error', 'not-authenticated');
  end if;

  if (select check_sakin_entitlement()) then
    return json_build_object('success', true, 'already_active', true, 'error', null);
  end if;

  select * into v_ent
  from sakin_entitlements
  where license_key = lower(trim(p_key))
    and redeemed_by is null
    and (expires_at is null or expires_at > now());

  if not found then
    return json_build_object('success', false, 'error', 'invalid-or-used-key');
  end if;

  update sakin_entitlements
  set redeemed_by  = auth.uid(),
      redeemed_at  = now()
  where id = v_ent.id;

  return json_build_object(
    'success',      true,
    'already_active', false,
    'product',      v_ent.product,
    'expires_at',   v_ent.expires_at,
    'error',        null
  );
end;
$$;

create or replace function delete_user()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;

create or replace function upsert_stripe_entitlement(
  p_user_id     uuid,
  p_product     text,
  p_expires_at  timestamptz,
  p_stripe_sub  text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into sakin_entitlements
    (user_id, source, product, stripe_sub_id, expires_at)
  values
    (p_user_id, 'stripe_web', p_product, p_stripe_sub, p_expires_at)
  on conflict (user_id, stripe_sub_id)
    where stripe_sub_id is not null
    do update set
      expires_at = excluded.expires_at,
      product    = excluded.product;
end;
$$;

create or replace function revoke_stripe_entitlement(p_stripe_sub text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update sakin_entitlements
  set expires_at = now()
  where stripe_sub_id = p_stripe_sub;
end;
$$;
