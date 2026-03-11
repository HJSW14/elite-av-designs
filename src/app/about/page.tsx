import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { CTASection } from "@/components/sections/CTASection";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `About ${company.name} | Sacramento Towing & Roadside Assistance`,
  description:
    "Next Level Towing is a Sacramento-based 24/7 towing and roadside assistance company founded by Michael and Kay. Licensed, insured, and committed to upfront pricing.",
  alternates: {
    canonical: "https://nextleveltow.com/about",
  },
  openGraph: {
    title: `About ${company.name} | Sacramento's 24/7 Towing Service`,
    description:
      "Sacramento-based 24/7 towing and roadside assistance. Meet Michael, Kay, and the team behind Next Level Towing.",
    url: "https://nextleveltow.com/about",
  },
};

export default function AboutPage() {
  const schema = aboutPageSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "About", url: "https://nextleveltow.com/about" },
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
        <CTASection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
