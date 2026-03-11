# SEO & Regional Ranking Audit

**Site:** Next Level Towing (nextleveltow.com)  
**Goal:** Index as the top towing website in the Sacramento region  
**Date:** February 2026

---

## Executive Summary

The site is well-structured for local SEO with strong metadata, structured data, and indexing setup. Key strengths: LocalBusiness schema, geo meta tags, service-area pages, and Vercel + Google Tag analytics. Recommendations focus on content depth, Google Business Profile, and post-launch monitoring.

---

## 1. SEO Audit

### Metadata ✓

| Element | Status | Notes |
|---------|--------|-------|
| Title template | ✓ | `%s \| Next Level Towing` |
| Default title | ✓ | Includes "Sacramento, CA" |
| Description | ✓ | 24/7 towing, service areas |
| Keywords | ✓ | 15+ local terms (Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville) |
| Canonical URLs | ✓ | All pages |
| OpenGraph | ✓ | type, locale, image 1200×630 |
| Twitter Card | ✓ | summary_large_image |
| Geo meta | ✓ | geo.region (US-CA), geo.placename, geo.position, ICBM |

### Structured Data (JSON-LD) ✓

| Schema | Location | Purpose |
|--------|----------|---------|
| LocalBusiness (TowingService) | Layout | NAP, geo, areaServed, openingHours, hasOfferCatalog |
| Organization | Layout | Legal name, logo, founding date |
| WebSite | Layout | Publisher, inLanguage |
| AggregateRating | Layout | When reviewCount > 0 |
| Service | Service pages | Per-service schema |
| FAQPage | Service/FAQ pages | Q&A rich results |
| BlogPosting | Blog posts | Article schema |
| BreadcrumbList | Dynamic pages | Navigation breadcrumbs |
| WebPage + AggregateRating | Reviews page | Reviews page rich results |

### Content & Keywords

- **Primary:** towing Sacramento, roadside assistance Sacramento, 24 hour towing Sacramento
- **Secondary:** flatbed towing, vehicle recovery, Elk Grove towing, Rancho Cordova towing, Folsom towing, Roseville towing
- **Service-area pages:** Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, Citrus Heights, Davis, West Sacramento

### Recommendations

1. **Custom OG image:** Replace Unsplash fallback with branded 1200×630 image.
2. **Google Business Profile:** Claim and verify; link to site; keep NAP consistent.
3. **Review schema:** When you have individual reviews, add `Review` items to the schema.

---

## 2. Indexing & Crawling

### robots.txt ✓

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://nextleveltow.com/sitemap.xml
```

### Sitemap ✓

- **Static:** Home (1.0), Services (0.9), Areas (0.9), Contact (0.9), Reviews (0.8), FAQ (0.8), About (0.7), Blog (0.7), Privacy/Terms (0.3)
- **Dynamic:** /services/[slug], /blog/[slug], /areas/[slug]
- **changeFrequency:** weekly (home, blog), monthly (services, areas), yearly (legal)

### Robots Meta ✓

- `index: true`, `follow: true` on all public pages
- `googleBot`: max-video-preview, max-image-preview, max-snippet
- 404: noindex

### Post-Launch

1. **Google Search Console:** Add property, submit sitemap, verify ownership.
2. **Bing Webmaster Tools:** Submit sitemap for Bing indexing.

---

## 3. Performance

### Current Optimizations ✓

| Area | Implementation |
|------|----------------|
| Fonts | Inter, Montserrat with `display: swap` |
| Images | Next/Image, AVIF/WebP, remotePatterns for Unsplash |
| Hero LCP | Preload with `fetchPriority="high"` |
| Logo | `priority` on Header logo |
| Map | Lazy-loaded Mapbox (ServiceAreaMap) |
| Preconnect | images.unsplash.com, fonts, api.mapbox.com, googletagmanager.com |

### Security Headers ✓

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security (HSTS)
- Permissions-Policy

### Caching ✓

- Logo, _next/static: 1-year immutable
- Images: 1-year TTL

### Recommendations

1. **Lighthouse:** Run after deployment; target 90+ Performance, 95+ Accessibility.
2. **Core Web Vitals:** Monitor LCP, FID, CLS in Search Console and Vercel Speed Insights.

---

## 4. Analytics & Tracking

### Implemented ✓

| Tool | Purpose |
|------|---------|
| **Google Tag (AW-17027154317)** | Google Ads conversion tracking |
| **Vercel Analytics** | Page views, referrers |
| **Vercel Speed Insights** | Core Web Vitals |
| **GA4 (optional)** | Set `NEXT_PUBLIC_GA_ID` in .env.local for page views and events |

### Configuration

- Google Tag loads via `next/script` with `strategy="afterInteractive"`.
- GA4 config is conditional on `NEXT_PUBLIC_GA_ID`.
- Preconnect to googletagmanager.com for faster load.

### Recommendations

1. **GA4:** Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local` for full analytics.
2. **Conversions:** Configure conversion events in Google Ads (e.g., contact form submit, phone click).
3. **Vercel:** Enable Analytics and Speed Insights in the Vercel project dashboard.

---

## 5. Regional Ranking Checklist

| Action | Status |
|--------|--------|
| LocalBusiness schema with NAP + geo | ✓ |
| Geo meta tags (US-CA, Sacramento region) | ✓ |
| Service-area pages (Sacramento, Elk Grove, etc.) | ✓ |
| Keywords targeting Sacramento + suburbs | ✓ |
| Canonical URLs on all pages | ✓ |
| Sitemap with all important URLs | ✓ |
| robots.txt allows crawling | ✓ |
| Mobile-friendly, semantic HTML | ✓ |
| Fast load (preload, preconnect, caching) | ✓ |
| Google Tag + Vercel Analytics | ✓ |
| Custom OG image | ⏳ Pending |
| Google Business Profile claimed | ⏳ Post-launch |
| Search Console sitemap submitted | ⏳ Post-launch |

---

## 6. Page-Level SEO Summary

| Page | Title | Description | Canonical | Schema |
|------|-------|-------------|-----------|--------|
| Home | ✓ | ✓ | ✓ | LocalBusiness, WebSite, Organization, AggregateRating |
| About | ✓ | ✓ | ✓ | AboutPage |
| Services | ✓ | ✓ | ✓ | ServiceCollection |
| Services/[slug] | ✓ | ✓ | ✓ | Service, FAQ |
| Contact | ✓ | ✓ | ✓ | ContactPage |
| Blog | ✓ | ✓ | ✓ | BlogCollection |
| Blog/[slug] | ✓ | ✓ | ✓ | BlogPosting |
| Reviews | ✓ | ✓ | ✓ | WebPage + AggregateRating |
| FAQ | ✓ | ✓ | ✓ | FAQPage |
| Areas | ✓ | ✓ | ✓ | CollectionPage |
| Areas/[slug] | ✓ | ✓ | ✓ | Area-specific |
| Terms | ✓ | ✓ | ✓ | — |
| Privacy | ✓ | ✓ | ✓ | — |

---

## 7. Environment Variables (Analytics)

```env
# Required for deployment
RESEND_API_KEY=re_xxxx
RESEND_TO_EMAIL=email@example.com
NEXT_PUBLIC_SITE_URL=https://nextleveltow.com
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxxx

# Optional: GA4 for page views and events
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 8. Post-Launch Actions

1. **Google Search Console:** Add property, submit sitemap, monitor indexing.
2. **Google Business Profile:** Claim, verify, add website URL, keep NAP consistent.
3. **Lighthouse:** Run on production; fix any issues.
4. **Vercel:** Confirm Analytics and Speed Insights are enabled.
5. **GA4:** Add measurement ID if you want full analytics.
6. **Custom OG image:** Create 1200×630 branded image and update layout metadata.
