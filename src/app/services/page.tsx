import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesList } from "@/components/sections/ServicesList";
import { ServicesProcess } from "@/components/sections/ServicesProcess";
import { CTASection } from "@/components/sections/CTASection";
import { serviceCollectionSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Towing & Roadside Assistance Services in Sacramento, CA",
  description:
    "Flatbed towing, roadside assistance, vehicle recovery, and long-distance transport. 24/7 dispatch across Sacramento, Elk Grove, Rancho Cordova, Folsom, and Roseville. Fast response, upfront pricing.",
  alternates: {
    canonical: "https://nextleveltow.com/services",
  },
  openGraph: {
    title: "Towing & Roadside Services | Next Level Towing Sacramento",
    description:
      "Professional flatbed towing, roadside assistance, vehicle recovery, and long-distance transport. Serving Sacramento and surrounding areas 24/7.",
    url: "https://nextleveltow.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Towing & Roadside Services | Next Level Towing Sacramento",
    description:
      "Professional flatbed towing, roadside assistance, vehicle recovery, and long-distance transport. Serving Sacramento and surrounding areas 24/7.",
  },
};

export default function ServicesPage() {
  const schema = serviceCollectionSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "Services", url: "https://nextleveltow.com/services" },
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
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
