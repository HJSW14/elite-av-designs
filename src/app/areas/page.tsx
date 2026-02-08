import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { areas } from "@/data/areas";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Home Theater & Smart Home Installation Across Denver, CO",
  description:
    "Elite AV Designs serves Denver, Parker, Highlands Ranch, Castle Rock, Lone Tree, Centennial, Aurora, Littleton, Lakewood, Arvada, and Boulder with professional home theater, automation, and AV installation.",
  alternates: {
    canonical: "https://eliteavdesigns.com/areas",
  },
  openGraph: {
    title: "Service Areas | Elite AV Designs Denver",
    description:
      "Professional home theater and smart home installation across the Denver metro area and Colorado Front Range.",
    url: "https://eliteavdesigns.com/areas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Elite AV Designs Denver",
    description:
      "Professional home theater and smart home installation across the Denver metro area and Colorado Front Range.",
  },
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="noise-overlay relative overflow-hidden bg-[#0C0C0C] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
            <div className="h-[400px] w-[600px] rounded-full bg-[#D4844C]/[0.03] blur-[100px]" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Where We Work
              </span>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#E8E4DF] sm:text-5xl lg:text-6xl">
                Serving the{" "}
                <span className="heading-display text-[#D4844C]">Denver</span>{" "}
                metro and beyond
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#7A7570]">
                From our home base in Parker, we design and install home theater,
                automation, shading, and surveillance systems across 11 cities
                along the Colorado Front Range.
              </p>
            </div>
          </Container>

          <div className="absolute bottom-0 left-0 right-0 copper-divider" />
        </section>

        {/* Area Grid */}
        <section className="bg-[#0C0C0C] py-20 lg:py-28">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group rounded-2xl border border-[#E8E4DF]/6 bg-[#E8E4DF]/[0.02] p-6 transition-all hover:border-[#D4844C]/20 hover:bg-[#D4844C]/[0.03]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#D4844C]" />
                    <h2 className="text-lg font-semibold text-[#E8E4DF]">
                      {area.city}, CO
                    </h2>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#7A7570] line-clamp-3">
                    {area.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D4844C] opacity-0 transition-opacity group-hover:opacity-100">
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
