import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BrandsStrip } from "@/components/sections/BrandsStrip";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="bg-[#0C0C0C] py-12">
          <TrustBadges />
        </div>
        <ServicesGrid />
        <FeaturedProject />
        <VideoShowcase
          title="See Our Work in Action"
          description="Watch how we transform homes across Denver with custom home theaters, smart automation, and integrated AV solutions."
        />
        <WhyChooseUs />
        <ProcessSteps />
        <TestimonialsSection />
        <BrandsStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
