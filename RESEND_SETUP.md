# Resend Setup for Next Level Towing

You already have a Resend account from Elite AV Design. Use the same account and add the new domain.

---

## 1. Add Domain in Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Enter: `nextleveltow.com`
4. Resend will show DNS records to add

---

## 2. Add DNS Records

Add these records at your domain registrar (where nextleveltow.com is managed):

### SPF (TXT record)
| Type | Name | Value |
|------|------|-------|
| TXT | @ (or nextleveltow.com) | `v=spf1 include:amazonses.com ~all` |

### DKIM (TXT record)
Resend gives you a unique DKIM value. It looks like:
| Type | Name | Value |
|------|------|-------|
| TXT | resend._domainkey | `p=MIGfMA0GCS...` (copy from Resend) |

### Optional: DMARC (recommended for deliverability)
| Type | Name | Value |
|------|------|-------|
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:dmarc@nextleveltow.com` |

---

## 3. Verify Domain

1. In Resend, click **Verify** on the nextleveltow.com domain
2. DNS can take 5–60 minutes to propagate
3. When verified, you can send from `contact@nextleveltow.com`

---

## 4. Environment Variables

### Local (.env.local)
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Use your existing Resend API key from Elite AV Design (same account = same key works).

### Vercel
Add in **Project Settings → Environment Variables**:
- `RESEND_API_KEY` = your Resend API key

---

## 5. Testing Before Domain Verification

Until `nextleveltow.com` is verified, use Resend’s test sender:

**In .env.local:**
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL="Next Level Towing <onboarding@resend.dev>"
```

**In Vercel:** Add `RESEND_FROM_EMAIL` = `Next Level Towing <onboarding@resend.dev>` (temporary; no quotes needed in Vercel UI)

Emails will send from Resend’s domain. After your domain is verified, remove `RESEND_FROM_EMAIL` so it uses `contact@nextleveltow.com`.

---

## 6. Current Configuration

| Setting | Value |
|--------|-------|
| **From** (production) | Next Level Towing &lt;contact@nextleveltow.com&gt; |
| **To** | Set via `RESEND_TO_EMAIL` (default: nextleveltow@icloud.com) |
| **Reply-To** | Customer’s email (so you can reply directly) |

**Multiple recipients:** `RESEND_TO_EMAIL=email1@example.com,email2@example.com`

---

## Spam / Deliverability

If emails land in spam, try these steps:

### 1. Add DMARC (if not already)
Add this TXT record at your domain registrar:
| Type | Name | Value |
|------|------|-------|
| TXT | _dmarc | `v=DMARC1; p=none; rua=mailto:dmarc@nextleveltow.com` |

This tells providers you have email authentication in place.

### 2. Mark as "Not Spam"
For each recipient (iCloud, Gmail, etc.): open the email → Mark as **Not Spam** / **Not Junk**. This trains the provider that these messages are wanted.

### 3. Add sender to contacts
Add `contact@nextleveltow.com` to your address book or contacts. Many providers treat known senders more favorably.

### 4. New domain behavior
Newly verified domains often land in spam at first. Deliverability usually improves after consistent sending and recipients marking messages as not spam.

---

## Troubleshooting

- **"Domain not verified"** – Wait for DNS propagation, then verify again in Resend
- **Emails not arriving** – Check spam; ensure `nextleveltow@icloud.com` is correct
- **API key invalid** – Create a new key at [resend.com/api-keys](https://resend.com/api-keys) if needed
