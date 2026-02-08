import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { BrandsStrip } from "@/components/sections/BrandsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About Elite AV Designs | Denver Home Theater & Automation Experts",
  description:
    "Founded in 2018, Elite AV Designs is a certified Control4 dealer and Lutron installer serving Denver, Parker, Highlands Ranch, Castle Rock, and the entire Colorado Front Range. 150+ projects completed.",
  alternates: {
    canonical: "https://eliteavdesigns.com/about",
  },
  openGraph: {
    title: "About Elite AV Designs | Denver's Premier AV Integrator",
    description:
      "Certified Control4 dealer serving the Denver metro area since 2018. 150+ custom home theater and smart home projects completed.",
    url: "https://eliteavdesigns.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Elite AV Designs | Denver's Premier AV Integrator",
    description:
      "Certified Control4 dealer serving the Denver metro area since 2018. 150+ custom home theater and smart home projects completed.",
  },
};

export default function AboutPage() {
  const schema = aboutPageSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "About", url: "https://eliteavdesigns.com/about" },
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
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <BrandsStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
