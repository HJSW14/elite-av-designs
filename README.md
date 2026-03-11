# Next Level Towing Website

24/7 towing and roadside assistance website for Next Level Towing, serving Sacramento, CA and surrounding areas.

🌐 **Live Site**: [nextleveltow.com](https://nextleveltow.com)

---

## 🚀 Features

### Content
- **4 Service Pages** (flatbed towing, roadside assistance, vehicle recovery, long-distance transport)
- **6 Service Area Pages** (Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, Citrus Heights)
- **Blog** with towing tips, safety guides, and vehicle care articles
- **Reviews** page with customer testimonials
- **FAQ** with common towing questions

### Technical Stack
- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4** for responsive design
- **Framer Motion** for smooth animations
- **Lenis** for smooth scrolling
- **Server Actions** for contact form (Resend API)
- **Lucide React** for icons
- **Mapbox** for service area map

### SEO & Performance
- JSON-LD structured data (LocalBusiness, Organization, WebSite, Service, FAQPage, BlogPosting)
- Dynamic XML sitemap
- Optimized robots.txt
- Security headers (HSTS, X-Frame-Options, etc.)
- Image optimization (AVIF/WebP)
- Mobile-first responsive design

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Resend API key (for contact form)
- Mapbox token (for service area map)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd NL-Tow-v2
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_SITE_URL=https://nextleveltow.com
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:5555](http://localhost:5555) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

---

## 🚢 Deployment to Vercel

1. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**
   - `RESEND_API_KEY` – Resend API key
   - `RESEND_TO_EMAIL` – Comma-separated emails for contact form (e.g. `email1@icloud.com,email2@gmail.com`)
   - `NEXT_PUBLIC_MAPBOX_TOKEN` – Mapbox token for service area map
   - `NEXT_PUBLIC_SITE_URL` – `https://nextleveltow.com`

3. **Configure Custom Domain**
   - Project Settings → Domains → Add Domain
   - Add `nextleveltow.com`

4. **Deploy**
   - Site will be live in ~2 minutes
   - Auto-deploys on push to main branch

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check sitemap: `nextleveltow.com/sitemap.xml`
- [ ] Verify robots.txt: `nextleveltow.com/robots.txt`
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Submit sitemap to Google Search Console
- [ ] Claim Google Business Profile

---

## 📁 Project Structure

```
NL-Tow-v2/
├── public/
│   └── NLTow_Logo.png
├── src/
│   ├── actions/
│   │   └── contact.ts        # Server action for contact form
│   ├── app/
│   │   ├── about/            # About page
│   │   ├── areas/            # Service area pages
│   │   ├── blog/             # Blog posts
│   │   ├── contact/          # Contact page
│   │   ├── faq/              # FAQ page
│   │   ├── privacy/          # Privacy policy
│   │   ├── reviews/          # Customer reviews
│   │   ├── services/         # Service pages
│   │   ├── terms/            # Terms of service
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # Dynamic robots.txt
│   │   └── sitemap.ts        # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/           # Header, Footer, MobileNav, StickyCallButton
│   │   ├── sections/         # Page sections
│   │   └── ui/               # Reusable UI components
│   ├── data/
│   │   ├── areas.ts          # Service area data
│   │   ├── company.ts        # Company info & contact
│   │   ├── navigation.ts     # Nav menu structure
│   │   ├── posts.ts          # Blog posts
│   │   ├── services.ts       # Service offerings
│   │   └── testimonials.ts   # Customer testimonials
│   └── lib/
│       ├── cn.ts             # Tailwind class merging
│       ├── email.tsx         # Email template
│       ├── format-date.ts    # Date formatting
│       ├── image-utils.ts    # Image optimization helpers
│       └── schemas.ts        # JSON-LD structured data
└── README.md
```

---

## 🎨 Key Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, services, testimonials, service area map |
| Services | `/services` | Flatbed, roadside, recovery, long-distance transport |
| Service Detail | `/services/flatbed-towing` | Individual service pages with FAQs |
| Service Areas | `/areas` | Sacramento area cities we serve |
| Area Page | `/areas/sacramento` | Local SEO pages |
| Reviews | `/reviews` | Customer testimonials |
| Blog | `/blog` | Towing tips and guides |
| Blog Post | `/blog/what-to-do-when-car-breaks-down` | Individual articles |
| FAQ | `/faq` | Common towing questions |
| About | `/about` | Company story & team |
| Contact | `/contact` | Contact form |

---

## 🔧 Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Run ESLint
```

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form | Yes |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox token for service area map | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site URL (e.g. https://nextleveltow.com) | Yes |

---

## 📞 Contact

**Next Level Towing**  
📍 11055 Folsom Blvd, Rancho Cordova, CA 95670  
📞 (916) 234-8697  
📧 nextleveltow@icloud.com  
🌐 [nextleveltow.com](https://nextleveltow.com)

---

Built with Next.js, TypeScript, and Tailwind CSS
