import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { company } from "@/data/company";
import { localBusinessSchema, webSiteSchema, organizationSchema, aggregateRatingSchema } from "@/lib/schemas";

const body = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nextleveltow.com"),
  title: {
    default: `${company.name} | Towing & Roadside Assistance in Sacramento, CA`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "towing Sacramento",
    "towing service Sacramento CA",
    "roadside assistance Sacramento",
    "flatbed towing Sacramento",
    "24 hour towing Sacramento",
    "emergency towing Sacramento",
    "car towing near me Sacramento",
    "vehicle recovery Sacramento",
    "long distance towing California",
    "tow truck Sacramento",
    "Elk Grove towing",
    "Rancho Cordova towing",
    "Folsom towing",
    "Roseville towing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextleveltow.com",
    siteName: company.name,
    title: `${company.name} | Towing & Roadside Assistance in Sacramento, CA`,
    description: company.description,
    images: [
      {
        url: "https://nextleveltow.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Next Level Towing - 24/7 Towing and Roadside Assistance in Sacramento, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Towing & Roadside Assistance in Sacramento, CA`,
    description: company.description,
    images: ["https://nextleveltow.com/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nextleveltow.com",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Sacramento; Rancho Cordova; Elk Grove; Folsom; Roseville",
    "geo.position": "38.5891;-121.3027",
    ICBM: "38.5891, -121.3027",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.mapbox.com" />
        <link rel="dns-prefetch" href="https://api.mapbox.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        {company.reviewCount > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(aggregateRatingSchema()),
            }}
          />
        )}
        {/* Preload hero LCP image for fastest paint */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1723846806146-05768f1de375?w=1600&q=85&auto=format&fit=crop"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${body.variable} ${display.variable} font-[family-name:var(--font-heading)] antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Google tag (gtag.js) - Ads (AW) + optional GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17027154317"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17027154317');
            ${process.env.NEXT_PUBLIC_GA_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');` : ""}

            document.addEventListener('click', function(event) {
              if (!(event.target instanceof Element)) return;

              var phoneLink = event.target.closest('a[href^="tel:"]');
              if (phoneLink) {
                gtag('event', 'phone_click', {
                  event_category: 'lead',
                  event_label: phoneLink.getAttribute('data-location') || phoneLink.getAttribute('href') || 'phone_link'
                });
                ${process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL ? `gtag('event', 'conversion', { send_to: 'AW-17027154317/${process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL}' });` : ""}
                return;
              }

              var reviewLink = event.target.closest('[data-track="google-review"]');
              if (reviewLink) {
                gtag('event', 'select_content', {
                  content_type: 'review_link',
                  item_id: 'google_review',
                  event_label: reviewLink.getAttribute('data-location') || 'google_review'
                });
              }
            });

            window.addEventListener('nltow:lead', function(event) {
              var detail = event && event.detail ? event.detail : {};
              if (detail.type === 'contact_form_submit') {
                gtag('event', 'generate_lead', {
                  event_category: 'lead',
                  event_label: detail.location || 'contact_form'
                });
                ${process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL ? `gtag('event', 'conversion', { send_to: 'AW-17027154317/${process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL}' });` : ""}
              }
            });
          `}
        </Script>
        
        <SmoothScroll />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
