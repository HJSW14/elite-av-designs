# 🚀 Vercel Deployment Guide - Elite AV Designs

**GitHub Repository**: https://github.com/HJSW14/elite-av-designs  
**Target Domain**: eliteavdesigns.com

---

## Step 1: Import to Vercel (5 minutes)

1. **Go to Vercel**
   - Visit: https://vercel.com/new
   - Sign in with your GitHub account (HJSW14)

2. **Import Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Find `HJSW14/elite-av-designs`
   - Click "Import"

3. **Configure Project**
   - **Project Name**: `elite-av-designs` (or leave default)
   - **Framework Preset**: Next.js (auto-detected ✓)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected ✓)
   - **Output Directory**: `.next` (auto-detected ✓)
   - **Install Command**: `npm install` (auto-detected ✓)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   | Key | Value |
   |-----|-------|
   | `RESEND_API_KEY` | `re_HsVeufRQ_Kx3P39qiNsi1rZKZvW6vHr3N` |

   - ✓ Check "Production"
   - ✓ Check "Preview" (optional)
   - ✓ Check "Development" (optional)

5. **Click "Deploy"**
   - Deployment will start immediately
   - Build time: ~2-3 minutes
   - You'll get a preview URL: `elite-av-designs.vercel.app`

---

## Step 2: Configure Custom Domain (10 minutes)

### In Vercel Dashboard

1. **Go to Project Settings**
   - Open your `elite-av-designs` project
   - Click "Settings" (top right)
   - Click "Domains" in sidebar

2. **Add Custom Domain**
   - Click "Add Domain"
   - Enter: `eliteavdesigns.com`
   - Click "Add"
   - Vercel will show DNS configuration instructions

3. **Add www Subdomain** (optional but recommended)
   - Click "Add Domain" again
   - Enter: `www.eliteavdesigns.com`
   - Click "Add"

### In Your Domain Registrar (Network Solutions)

You need to update DNS records. Based on your setup with Vercel nameservers already:

**Option A: If nameservers are still on Vercel** (recommended)
- Vercel manages everything automatically
- Just verify the domain in Vercel
- No manual DNS changes needed

**Option B: If you switched nameservers back to Network Solutions**

Add these DNS records in Network Solutions:

1. **For Root Domain (eliteavdesigns.com)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

2. **For www Subdomain**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Remove conflicting records**
   - Delete any existing A records pointing to 208.91.197.27 or 216.150.1.1
   - Delete any existing CNAME for www

**IMPORTANT**: Keep your existing MX records (Google Workspace email) and TXT records (SPF, DMARC)!

### Verify Domain

1. **In Vercel, wait for DNS propagation** (5-30 minutes)
2. **Check "Domains" tab** - should show green checkmark ✓
3. **Vercel will automatically provision SSL certificate** (Let's Encrypt)
4. **Test the site**: https://eliteavdesigns.com

---

## Step 3: Verify Deployment (10 minutes)

### Test Critical Pages

Visit these URLs and verify they load:

- [ ] https://eliteavdesigns.com
- [ ] https://eliteavdesigns.com/services
- [ ] https://eliteavdesigns.com/services/home-theater
- [ ] https://eliteavdesigns.com/brands
- [ ] https://eliteavdesigns.com/brands/control4
- [ ] https://eliteavdesigns.com/blog
- [ ] https://eliteavdesigns.com/projects
- [ ] https://eliteavdesigns.com/about
- [ ] https://eliteavdesigns.com/contact
- [ ] https://eliteavdesigns.com/sitemap.xml
- [ ] https://eliteavdesigns.com/robots.txt

### Test Contact Form

1. Go to: https://eliteavdesigns.com/contact
2. Fill out the form with test data
3. Submit
4. Check that javier@eliteavdesigns.com and tyler@eliteavdesigns.com receive email

### Check Performance

1. **PageSpeed Insights**
   - Visit: https://pagespeed.web.dev/
   - Enter: `https://eliteavdesigns.com`
   - Run test
   - Expected: 80+ mobile, 90+ desktop

2. **Mobile-Friendly Test**
   - Visit: https://search.google.com/test/mobile-friendly
   - Enter: `https://eliteavdesigns.com`
   - Expected: 100% mobile-friendly ✓

3. **Rich Results Test**
   - Visit: https://search.google.com/test/rich-results
   - Enter: `https://eliteavdesigns.com`
   - Should detect: LocalBusiness, Organization, AggregateRating schemas

---

## Step 4: Post-Deployment Setup (30 minutes)

### Google Search Console

1. **Add Property**
   - Go to: https://search.google.com/search-console
   - Click "Add Property"
   - Choose "Domain" property
   - Enter: `eliteavdesigns.com`

2. **Verify Ownership**
   - Use DNS TXT record method
   - Add TXT record to Network Solutions:
     ```
     Type: TXT
     Name: @
     Value: google-site-verification=XXXXXX (from GSC)
     ```

3. **Submit Sitemap**
   - In GSC, go to "Sitemaps" (left sidebar)
   - Enter: `https://eliteavdesigns.com/sitemap.xml`
   - Click "Submit"
   - Wait 24-48 hours for indexing

### Google Analytics 4

See `ANALYTICS_SETUP.md` for detailed instructions.

Quick setup:
1. Create GA4 property at https://analytics.google.com/
2. Copy measurement ID (format: G-XXXXXXXXXX)
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Redeploy on Vercel (auto-triggers on env var change)

### Google Business Profile

1. **Claim Profile**
   - Go to: https://www.google.com/business/
   - Search for "Elite AV Designs"
   - Claim or create profile

2. **Complete Information**
   - Business name: Elite AV Designs
   - Category: Home Theater Installation Service
   - Address: Parker, CO 80134
   - Phone: (720) 555-0123
   - Website: https://eliteavdesigns.com
   - Hours: Mon-Fri 8am-6pm

3. **Add Service Areas**
   - Denver
   - Parker
   - Highlands Ranch
   - Castle Rock
   - Aurora
   - Littleton
   - Lone Tree
   - Centennial
   - Englewood
   - Arvada
   - Boulder

4. **Request Reviews**
   - Get 10+ reviews in first month
   - Critical for local SEO

---

## Step 5: Enable Auto-Deploy

Vercel automatically deploys on every push to `master` branch.

To deploy updates:

```bash
cd /path/to/elite-av-designs
# Make changes
git add .
git commit -m "Your commit message"
git push
```

Vercel will:
1. Detect the push
2. Build the site
3. Deploy to production (~2 min)
4. No downtime

---

## 🔧 Troubleshooting

### Domain Not Working

**Problem**: `eliteavdesigns.com` shows "Domain Not Found"

**Solution**:
1. Check DNS propagation: https://www.whatsmydns.net/#A/eliteavdesigns.com
2. Verify Vercel DNS records are correct
3. Wait 30 minutes and try again
4. If using Network Solutions nameservers, ensure A and CNAME records are correct

### Contact Form Not Working

**Problem**: Form submits but no email received

**Solution**:
1. Check Vercel logs: Project → Deployments → Latest → View Function Logs
2. Verify `RESEND_API_KEY` is set in environment variables
3. Verify domain is verified on resend.com
4. Check spam folders for test emails

### Build Failing

**Problem**: Deployment fails with build errors

**Solution**:
1. Check Vercel build logs
2. Verify `package.json` has correct dependencies
3. Run `npm run build` locally to reproduce
4. Check `next.config.ts` for syntax errors

### Slow Performance

**Problem**: PageSpeed score below 80

**Solution**:
1. Check Vercel Analytics: Project → Analytics
2. Verify images are optimized (AVIF/WebP)
3. Check Core Web Vitals in Search Console
4. Consider upgrading to Vercel Pro for better edge performance

---

## 📊 Monitoring & Maintenance

### Weekly Checks
- [ ] Monitor traffic in Google Analytics
- [ ] Check Search Console for errors
- [ ] Review contact form submissions
- [ ] Check site speed in Vercel Analytics

### Monthly Tasks
- [ ] Review Google Business Profile insights
- [ ] Check keyword rankings
- [ ] Add 1-2 new blog posts
- [ ] Review and respond to reviews
- [ ] Update project portfolio

---

## 🎯 Success Metrics (First 30 Days)

### Traffic Goals
- 500-1,000 organic sessions
- 50+ contact page views
- 5-10 form submissions

### SEO Goals
- All 72 pages indexed in Google
- 5+ keywords in top 20
- Top 3 in Google Maps pack for primary keyword

### Conversion Goals
- 5-10 contact form submissions
- 10-20 phone calls from site
- 2-5 qualified leads

---

## 🚀 You're Live!

Once deployed, your site will be:
- ✅ Live at https://eliteavdesigns.com
- ✅ Automatically SSL secured (HTTPS)
- ✅ Auto-deploying on every GitHub push
- ✅ Globally distributed via Vercel's edge network
- ✅ Optimized for speed and SEO
- ✅ Mobile-friendly and responsive

**Estimated Total Setup Time**: 1-2 hours  
**Deploy Time**: ~3 minutes per deployment  
**Cost**: Free on Vercel Hobby plan (upgrade to Pro for better performance)

---

Need help? Check:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Project README: https://github.com/HJSW14/elite-av-designs

Good luck with your launch! 🎉
