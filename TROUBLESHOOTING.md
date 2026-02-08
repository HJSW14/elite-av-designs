# Vercel Deployment Troubleshooting

## If you're still seeing the old site after connecting the new repo:

### Check 1: Verify Production Branch
1. Go to Vercel Dashboard → Your Project
2. Settings → Git
3. **Production Branch** should be set to: `master` (not `main`)
4. If it says `main`, change it to `master` and save

### Check 2: Force Redeploy from Vercel Dashboard
1. Go to your project in Vercel
2. Click "Deployments" tab
3. Find the LATEST deployment (should be from the new repo)
4. Click the three dots "..." on the right
5. Click "Redeploy"
6. Check "Use existing Build Cache" is UNCHECKED
7. Click "Redeploy"

### Check 3: Check Deployment Status
1. In Vercel, go to "Deployments" tab
2. Look for a deployment that just started (should say "Building...")
3. Click on it to see build logs
4. Verify it's pulling from: `HJSW14/elite-av-designs`
5. Wait for it to complete (~2-3 minutes)

### Check 4: Clear Browser Cache
Sometimes the issue is just browser cache:
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Or open in incognito/private window
3. Or clear browser cache completely

### Check 5: Verify Domain is Pointing to Right Deployment
1. Vercel Dashboard → Project → Settings → Domains
2. Find `eliteavdesigns.com`
3. Click on it
4. Verify it says "Production Deployment" (not "Preview")
5. Check the deployment it's pointing to matches the latest

### Check 6: DNS/CDN Cache (if still not working)
If domain is cached at CDN level:
1. Wait 5-10 minutes for CDN cache to clear
2. Or in Vercel, go to deployment and click "Promote to Production"

---

## Quick Debug Commands

Check what Vercel sees:
```bash
# In Vercel CLI (if installed)
vercel list
vercel inspect
```

---

## Nuclear Option: Recreate Project

If nothing works:

1. **Create NEW Vercel Project**
   - Go to https://vercel.com/new
   - Import `HJSW14/elite-av-designs`
   - Add environment variable: `RESEND_API_KEY=re_HsVeufRQ_Kx3P39qiNsi1rZKZvW6vHr3N`
   - Deploy

2. **Transfer Domain**
   - OLD project → Settings → Domains → Remove `eliteavdesigns.com`
   - NEW project → Settings → Domains → Add `eliteavdesigns.com`
   - Wait 2-3 minutes

3. **Delete OLD project** (after verifying new one works)

---

## What Should Happen

After successful deployment from new repo, you should see:
- 72 pages (not the old site structure)
- New "Brands" link in navigation
- Updated about page with "two friends" story
- All new blog posts
- Control4, Lutron, Sonos brand pages

## Current Deployment Check

Try visiting these URLs to verify new site:
- https://eliteavdesigns.com/brands (should exist - NEW)
- https://eliteavdesigns.com/brands/control4 (should exist - NEW)
- https://eliteavdesigns.com/sitemap.xml (should show 72 URLs)

If these don't exist, the old site is still deployed.
