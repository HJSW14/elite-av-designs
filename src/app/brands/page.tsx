import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandsGrid } from "@/components/sections/BrandsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Authorized Brands & Partners | Elite AV Designs Denver",
  description:
    "Certified Control4 dealer and Lutron installer. We partner with the industry's leading brands: Sony, Epson, Sonos, Samsung, Hunter Douglas, and more. Serving Denver, Parker, and the Front Range.",
  alternates: {
    canonical: "https://eliteavdesigns.com/brands",
  },
  openGraph: {
    title: "Authorized Brands & Partners | Elite AV Designs",
    description:
      "Certified Control4 dealer and Lutron installer serving the Denver metro area. Professional installation and support for all major AV and automation brands.",
    url: "https://eliteavdesigns.com/brands",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authorized Brands & Partners | Elite AV Designs",
    description:
      "Certified Control4 dealer and Lutron installer serving the Denver metro area.",
  },
};

export default function BrandsPage() {
  const schema = collectionPageSchema({
    name: "Authorized Brands & Partners",
    description:
      "Elite AV Designs is a certified Control4 dealer and Lutron installer, partnering with the industry's leading brands to deliver exceptional home theater and automation solutions.",
    url: "https://eliteavdesigns.com/brands",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Brands", url: "https://eliteavdesigns.com/brands" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#0C0C0C] pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Authorized Partners
              </span>
              <h1 className="mb-6 text-3xl font-semibold tracking-tight text-[#E8E4DF] sm:text-4xl md:text-5xl">
                The Brands{" "}
                <span className="heading-display text-[#D4844C]">We Trust</span>
              </h1>
              <p className="text-[15px] leading-relaxed text-[#7A7570] sm:text-base">
                We partner with the industry's most reliable, innovative, and
                performance-driven brands. As a certified Control4 dealer and
                Lutron installer, we bring professional-grade solutions to
                Denver homeowners.
              </p>
            </div>
          </div>
        </section>

        <BrandsGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
