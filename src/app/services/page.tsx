import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesList } from "@/components/sections/ServicesList";
import { ServicesProcess } from "@/components/sections/ServicesProcess";
import { CTASection } from "@/components/sections/CTASection";
import { serviceCollectionSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Home Theater & Smart Home Services in Denver, CO",
  description:
    "Custom home theater installation, Control4 smart home automation, Lutron motorized shades, and 4K surveillance systems. Professionally designed and installed across Denver, Parker, Highlands Ranch, and the Colorado Front Range.",
  alternates: {
    canonical: "https://eliteavdesigns.com/services",
  },
  openGraph: {
    title: "Home Theater & Smart Home Services | Elite AV Designs",
    description:
      "Custom home theater installation, smart home automation, motorized shades, and surveillance systems in Denver, CO.",
    url: "https://eliteavdesigns.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Theater & Smart Home Services | Elite AV Designs",
    description:
      "Custom home theater installation, smart home automation, motorized shades, and surveillance systems in Denver, CO.",
  },
};

export default function ServicesPage() {
  const schema = serviceCollectionSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Services", url: "https://eliteavdesigns.com/services" },
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
