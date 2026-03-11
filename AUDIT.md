# Site Audit: Next Level Towing (NL-Tow-v2)

**Date:** February 2026  
**Scope:** Performance, SEO, Indexing, Searchability, Design, Mobile, Form Setup

---

## 1. Performance

### Current Setup
| Area | Status |
|------|--------|
| **Fonts** | Inter & Montserrat with `display: swap` (prevents FOIT) |
| **Images** | Next/Image with AVIF/WebP, Unsplash in remotePatterns |
| **Hero LCP** | Preload with `fetchPriority="high"` for hero image |
| **Logo** | `priority` on Header logo for above-fold load |
| **Map** | Lazy-loaded Mapbox when section in view (ServiceAreaMap) |
| **Lenis** | Deferred init (post-hydration) to avoid hydration conflicts |
| **Analytics** | Vercel Analytics, Speed Insights, Google Tag (AW-17027154317) |
| **Caching** | NLTow_Logo.png, _next/static: 1-year immutable |

### Preconnect / DNS Prefetch
- images.unsplash.com
- fonts.googleapis.com, fonts.gstatic.com
- api.mapbox.com
- www.googletagmanager.com

### Headers (next.config.ts)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security (HSTS)
- Permissions-Policy (camera, microphone, etc.)

### Notes
- Hero uses CSS `background-image` (div) – preload helps browser cache before paint
- Blog cards use CSS background for post images – consider Next/Image for future optimization
- Console.log stripped in production builds

---

## 2. SEO

### Metadata (Root Layout)
- **Title:** `Next Level Towing | Towing & Roadside Assistance in Sacramento, CA`
- **Template:** `%s | Next Level Towing` for page titles
- **Description:** Sacramento 24/7 towing tagline
- **Keywords:** towing Sacramento, roadside assistance, flatbed, 24 hour, etc.
- **metadataBase:** https://nextleveltow.com
- **Robots:** index: true, follow: true; googleBot with max previews

### OpenGraph & Twitter
- OG type: website, locale en_US
- OG/Twitter image: 1200×630 (Unsplash fallback – add custom og-image.jpg when ready)
- Cards: summary_large_image

### Structured Data (JSON-LD)
- **LocalBusiness / TowingService** – NAP, geo, areaServed, openingHours, hasOfferCatalog, knowsAbout
- **Organization** – Legal name, logo, founding date
- **WebSite** – Publisher, inLanguage (SearchAction removed – no /search page)
- **AggregateRating** – When reviewCount > 0
- **Per-page:** Service, FAQPage, BlogPosting, ContactPage, AboutPage, BreadcrumbList

### Canonical URLs
- Set on layout (/) and all main pages (about, contact, services, blog, etc.)

### Searchability
- Semantic HTML (h1, nav, main, section, footer)
- Descriptive alt text on images (NextLevelLogo)
- Internal links to services, areas, blog
- Service area pages for local SEO (Sacramento, Elk Grove, etc.)

---

## 3. Indexing

### robots.ts
- **Allow:** All user agents, all paths
- **Disallow:** /api/
- **Sitemap:** https://nextleveltow.com/sitemap.xml

### sitemap.ts
- **Static pages:** Home (1.0), Services, Areas, Reviews, FAQ, About, Contact, Blog, Privacy, Terms
- **Dynamic:** /services/[slug], /blog/[slug], /areas/[slug]
- **Priorities:** 1.0 home → 0.9 services/contact → 0.8 areas/reviews/faq → 0.7 about/blog → 0.3 legal
- **changeFrequency:** weekly (home, blog), monthly (services, areas), yearly (privacy, terms)

### Layout Robots Meta
- index: true, follow: true
- googleBot: max-video-preview, max-image-preview, max-snippet

---

## 4. Design & Mobile Compatibility

### Viewport
- `viewport` export: device-width, initialScale=1, maximumScale=5
- `themeColor`: #0a0a0a (dark)

### Responsive Breakpoints
- Mobile-first Tailwind: sm (640px), md (768px), lg (1024px)
- Hero: 100dvh (dynamic viewport height) for mobile browsers
- StickyCallButton: Bottom bar on mobile, floating button on desktop

### Touch Targets
- Buttons: min-h-[44px], min-w-[44px] for mobile menu, form inputs
- StickyCallButton: min-h-56px on mobile, safe-area-pb for notches

### Design
- Dark theme (#0a0a0a, #141414) with accent #3e9ad1
- Noise overlay, copper divider, custom scrollbar
- Framer Motion for subtle animations (reduce motion respected by browser)
- Inter + Montserrat fonts

### Safe Areas
- `.safe-area-pb` for devices with home indicators

---

## 5. Form Setup (Contact)

### Fields
- Name (required), Email (required), Phone, Service (select), Message (required)

### Accessibility
- Labels with htmlFor, proper input types
- `autoComplete`: name, email, tel
- `inputMode="tel"` on phone for mobile numpad
- Min height 44px on inputs

### Spam Prevention
- Honeypot field `website` (hidden, off-screen) – bots that fill it get silent success
- Server-side validation in `submitContactForm`

### Backend
- Resend API for email delivery
- From: contact@nextleveltow.com (verify domain in Resend)
- To: nextleveltow@icloud.com
- Reply-To: customer email

### Required Env
- `RESEND_API_KEY`

---

## 6. Page-Level SEO Checklist

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
| Areas/[slug] | ✓ | ✓ | ✓ | via areas data |
| Terms | ✓ | ✓ | ✓ | — |
| Privacy | ✓ | ✓ | ✓ | — |
| 404 | ✓ | ✓ | noindex | — |

---

## 7. Follow-Up / Recommendations

1. **OG Image:** Add custom `og-image.jpg` (1200×630) to `/public` and update layout metadata. Currently using Unsplash fallback.
2. **Google Reviews:** When `company.socials.google` has a real URL, add it to `company.ts` – schema `sameAs` will auto-include it.
3. **Resend Domain:** Verify `contact@nextleveltow.com` (or `onboarding@resend.dev` for testing) in Resend dashboard.
4. **Mapbox:** Ensure `NEXT_PUBLIC_MAPBOX_TOKEN` is set for production.
5. **Lighthouse:** Run after deployment for performance/accessibility baselines.
6. **Google Search Console:** Submit sitemap, monitor indexing.
7. **Google Business Profile:** Claim and link to site.
