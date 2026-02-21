import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteavdesigns.com"),
  title: {
    default: `${company.name} | Home Theater & Automation in Denver, CO`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "home theater installation Denver",
    "home automation Denver",
    "smart home Denver",
    "Control4 dealer Denver",
    "Lutron installer Denver",
    "home theater Parker CO",
    "AV installation Denver metro",
    "home automation Parker Colorado",
    "motorized shades Denver",
    "security cameras Denver",
    "whole home audio Denver",
    "custom home theater Colorado",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteavdesigns.com",
    siteName: company.name,
    title: `${company.name} | Home Theater & Automation in Denver, CO`,
    description: company.description,
    images: [
      {
        url: "https://eliteavdesigns.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite AV Designs - Home Theater and Smart Home Installation in Denver, CO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Home Theater & Automation in Denver, CO`,
    description: company.description,
    images: ["https://eliteavdesigns.com/og-image.jpg"],
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
    canonical: "https://eliteavdesigns.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema()),
          }}
        />
        {/* Preload hero LCP image for fastest paint */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${body.variable} ${display.variable} font-[family-name:var(--font-heading)] antialiased`}
      >
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17946326980"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17946326980');
          `}
        </Script>
        
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
