import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { CTASection } from "@/components/sections/CTASection";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Towing & Roadside Assistance in Sacramento, CA | 24/7 Dispatch",
  description: company.description,
  alternates: {
    canonical: "https://nextleveltow.com",
  },
  openGraph: {
    title: `${company.name} | Towing & Roadside Assistance in Sacramento, CA`,
    description: company.description,
    url: "https://nextleveltow.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <WhyChooseUs />
        <ProcessSteps />
        <TestimonialsSection />
        <ServiceAreaMap />
        <CTASection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
