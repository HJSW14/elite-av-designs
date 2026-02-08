# Elite AV Designs Website

Professional home theater and smart home automation website for Elite AV Designs, serving the Denver metro area.

🌐 **Live Site**: [eliteavdesigns.com](https://eliteavdesigns.com)  
📊 **GitHub**: [github.com/HJSW14/elite-av-designs](https://github.com/HJSW14/elite-av-designs)

---

## 🚀 Features

### Content
- **72 Static Pages** (SSG) for optimal performance
- **14 Service Pages** with detailed FAQs and schema markup
- **13 Blog Posts** optimized for local SEO
- **12 Project Showcases** with case studies
- **11 Service Area Pages** with hyper-local targeting
- **7 Brand Partner Pages** (Control4, Lutron, Sonos, Sony, Epson, Samsung, Hunter Douglas)

### Technical Stack
- **Next.js 16.1.6** (App Router) with TypeScript
- **Tailwind CSS v4** for responsive design
- **Framer Motion** for smooth animations
- **Lenis** for buttery-smooth scrolling
- **Server Actions** for contact form (Resend API)
- **Lucide React** for icons

### SEO & Performance
- ✅ Comprehensive JSON-LD structured data (10+ schema types)
- ✅ Dynamic XML sitemap with all 72 pages
- ✅ Optimized robots.txt
- ✅ Security headers (HSTS, CSP, X-Frame-Options)
- ✅ Image optimization (AVIF/WebP with fallbacks)
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimized
- ✅ Preconnect hints for external resources
- ✅ **Expected Lighthouse Score: 85+ Performance, 100 SEO**

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Resend API key (for contact form)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/HJSW14/elite-av-designs.git
cd elite-av-designs
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Resend API key:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

---

## 🚢 Deployment to Vercel

### Quick Deploy

1. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the `elite-av-designs` repository
   - Vercel will auto-detect Next.js

2. **Configure Environment Variables**
   - Add `RESEND_API_KEY` in Vercel project settings
   - Environment Variables → Add → `RESEND_API_KEY`

3. **Configure Custom Domain**
   - Project Settings → Domains → Add Domain
   - Add `eliteavdesigns.com`
   - Follow Vercel's DNS instructions
   - Add these DNS records to your domain registrar:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Site will be live in ~2 minutes
   - Vercel will auto-deploy on every push to `master`

### Post-Deployment Checklist

After deploying to production:

- [ ] Verify all 72 pages load correctly
- [ ] Test contact form submission
- [ ] Check sitemap: `eliteavdesigns.com/sitemap.xml`
- [ ] Verify robots.txt: `eliteavdesigns.com/robots.txt`
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Run [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (see `ANALYTICS_SETUP.md`)
- [ ] Claim Google Business Profile

---

## 📁 Project Structure

```
elite-av-designs/
├── public/
│   └── logos/              # Brand partner SVG logos
├── scripts/
│   └── check-content.mjs   # Content validation (em dashes/emojis)
├── src/
│   ├── actions/
│   │   └── contact.ts      # Server action for contact form
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── areas/          # Service area pages (11)
│   │   ├── blog/           # Blog posts (13)
│   │   ├── brands/         # Brand partner pages (7)
│   │   ├── contact/        # Contact page with form
│   │   ├── projects/       # Project showcases (12)
│   │   ├── services/       # Service pages (14)
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/         # Header, Footer, MobileNav
│   │   ├── sections/       # Page sections (Hero, Content, etc.)
│   │   └── ui/             # Reusable UI components
│   ├── data/
│   │   ├── areas.ts        # Service area data
│   │   ├── brands.ts       # Brand partner data
│   │   ├── company.ts      # Company info & contact
│   │   ├── navigation.ts   # Nav menu structure
│   │   ├── posts.ts        # Blog posts
│   │   ├── projects.ts     # Project showcase data
│   │   ├── services.ts     # Service offerings
│   │   └── testimonials.ts # Customer testimonials
│   ├── hooks/
│   │   └── useScrollDirection.ts
│   └── lib/
│       ├── cn.ts           # Tailwind class merging
│       ├── email.tsx       # Email template
│       ├── image-utils.ts  # Image optimization helpers
│       └── schemas.ts      # JSON-LD structured data
├── ANALYTICS_SETUP.md      # GA4/GTM setup guide
├── COMPETITOR_ANALYSIS.md  # SEO competitor research
├── LAUNCH_CHECKLIST_2026.md # Pre-launch checklist
├── MOBILE_AUDIT_2026.md    # Mobile-friendliness audit
├── SEO_AUDIT_2026.md       # Technical SEO audit
└── README.md               # This file
```

---

## 🎨 Key Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, services, featured project, testimonials |
| Services | `/services` | Grid of all 14 services |
| Service Detail | `/services/home-theater` | Individual service pages with FAQs |
| Projects | `/projects` | Portfolio gallery of completed projects |
| Project Detail | `/projects/highland-ranch-cinema` | Case study with photos & details |
| Blog | `/blog` | All blog posts by date |
| Blog Post | `/blog/control4-vs-diy-smart-home` | Individual articles |
| Brands | `/brands` | Partner brands we represent |
| Brand Page | `/brands/control4` | Certification details, FAQs |
| Service Areas | `/areas` | Cities we serve |
| Area Page | `/areas/parker` | Local SEO pages with zip codes |
| About | `/about` | Company story & values |
| Contact | `/contact` | Contact form (email via Resend) |

---

## 🔧 Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Content Validation

The `check-content.mjs` script runs automatically before build/dev to catch:
- Em dashes (—) that should be hyphens (-)
- Emojis that might cause encoding issues

---

## 📊 SEO Details

### Structured Data (JSON-LD)

Every page includes comprehensive schema markup:

- **LocalBusiness** - NAP consistency (Name, Address, Phone)
- **Organization** - Company identity & awards
- **AggregateRating** - 5.0 stars, 50+ reviews
- **WebSite** - Search action markup
- **Service** - All 14 service pages
- **FAQPage** - Services & brand pages
- **BlogPosting** - All 13 blog posts
- **BreadcrumbList** - Navigation context
- **Product** - Brand pages
- **CollectionPage** - Index pages

### Target Keywords

Primary:
- "home theater installation Denver"
- "Control4 dealer Denver"
- "smart home Denver"

Brand + Location:
- "Lutron installer Parker"
- "Sonos installation Highlands Ranch"
- "home automation Castle Rock"

---

## 🔐 Environment Variables

Required for production:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form | Yes |

Optional (for analytics):

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | No |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | No |

See `ANALYTICS_SETUP.md` for tracking implementation.

---

## 📈 Performance Targets

### Lighthouse Scores (Expected)
- **Performance**: 85+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

---

## 🤝 Contributing

This is a production website for Elite AV Designs. For issues or improvements:

1. Create an issue describing the problem/enhancement
2. Fork the repository
3. Create a feature branch
4. Make changes and test thoroughly
5. Submit a pull request

---

## 📝 License

This project is proprietary and confidential.  
© 2026 Elite AV Designs. All rights reserved.

---

## 📞 Contact

**Elite AV Designs**  
📍 Parker, CO 80134  
📞 (720) 555-0123  
📧 info@eliteavdesigns.com  
🌐 [eliteavdesigns.com](https://eliteavdesigns.com)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
