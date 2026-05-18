# App Store Review Information

## Demo Account for Apple Reviewers

Create a dedicated Supabase user and pre-grant premium access:

```sql
-- 1. Create user via Supabase Auth (email + password) in Dashboard
-- 2. Then run this in SQL Editor:
INSERT INTO sakin_entitlements (user_id, source, product, expires_at)
SELECT id, 'key', 'premium', NOW() + INTERVAL '1 year'
FROM auth.users
WHERE email = 'reviewer@sakin.life';
```

**Credentials to enter in App Store Connect → App Review Information:**
- Email: `reviewer@sakin.life`
- Password: (set a strong password, enter it in App Store Connect)

## Reviewer Notes Template

```
Thank you for reviewing Sakin Hayvan Rehberi.

ACCOUNT ACCESS:
- Log in with the provided credentials above.
- This account has Premium access pre-enabled — no purchase is required.
- To test the subscription paywall, tap the lock icon on any premium feature
  or go to Profile → upgrade prompt.

CORE FEATURE — SHAKE TO DRAW:
- Shake the device to reveal today's animal guidance card.
- The shake gesture uses the accelerometer (motion permission).

PUSH NOTIFICATIONS:
- Optional daily notifications can be enabled in Profile → Account → Reminders.
- A rationale screen appears before the OS permission prompt.

ACCOUNT DELETION:
- Profile → scroll to bottom → Delete Account.
- A confirmation dialog appears; deletion removes all local data and the Supabase account.

LANGUAGE:
- Profile → top right globe icon switches between Turkish and English instantly.

DISCLAIMER:
- On first launch, an educational disclaimer modal appears explaining the
  app is for personal reflection only (not medical/spiritual advice).

SUBSCRIPTION (IAP):
- Log out and create a new account to test the paywall.
- Use Apple's Sandbox Tester environment to test purchases without real payment.
- Sandbox tester: create at App Store Connect → Users → Sandbox Testers.
```

## App Store Connect Settings

| Field | Value |
|-------|-------|
| Category | Lifestyle |
| Secondary Category | Education |
| Content Rights | Does not contain third-party content |
| Age Rating | 4+ |
| Encryption | No (ITSAppUsesNonExemptEncryption = false) |

## Privacy Nutrition Labels to Declare

| Data | Linked to User | Tracking | Purpose |
|------|---------------|----------|---------|
| Email Address | Yes | No | App Functionality (auth) |
| User ID | Yes | No | App Functionality (cloud sync) |
| Purchase History | Yes | No | App Functionality (entitlement) |

## TestFlight Internal Testing

Before external / App Store submission:
1. `eas build --profile preview --platform ios`
2. Upload to TestFlight
3. Test on real device: shake gesture, notifications, paywall, delete account
4. Verify disclaimer modal shows once on first launch, not again
