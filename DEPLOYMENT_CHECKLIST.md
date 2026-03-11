# Deployment Checklist – NL-Tow-v2

## Pre-push

- [x] Build passes (`npm run build`)
- [x] No Elite AV / Colorado content in src
- [x] `.env.local` is gitignored (secrets stay local)
- [x] Company data: Sacramento, Rancho Cordova address, correct phone

## Vercel environment variables

Add these in **Project Settings → Environment Variables**:

| Variable | Required | Example |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | `re_xxxxx` |
| `RESEND_TO_EMAIL` | Yes | `email1@icloud.com,email2@gmail.com` |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Yes | `pk.eyJ1...` |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://nextleveltow.com` |

## After deploy

1. Add domain `nextleveltow.com` in Vercel
2. Test contact form on live site
3. Submit sitemap to Google Search Console: `https://nextleveltow.com/sitemap.xml`
