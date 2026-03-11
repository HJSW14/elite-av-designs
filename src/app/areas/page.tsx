import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { areas } from "@/data/areas";
import { MapPin, ArrowRight } from "lucide-react";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Service Areas | Towing & Roadside Assistance Across Sacramento, CA",
  description:
    "Next Level Towing serves Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, Citrus Heights, Davis, and West Sacramento with 24/7 towing and roadside assistance.",
  alternates: {
    canonical: "https://nextleveltow.com/areas",
  },
  openGraph: {
    title: "Service Areas | Next Level Towing Sacramento",
    description:
      "24/7 towing and roadside assistance across Sacramento County and the greater Sacramento area.",
    url: "https://nextleveltow.com/areas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Next Level Towing Sacramento",
    description:
      "24/7 towing and roadside assistance across Sacramento County and the greater Sacramento area.",
  },
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionPageSchema({
              name: "Service Areas | Next Level Towing",
              description:
                "24/7 towing and roadside assistance across Sacramento County and the greater Sacramento area.",
              url: "https://nextleveltow.com/areas",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://nextleveltow.com" },
              { name: "Service Areas", url: "https://nextleveltow.com/areas" },
            ])
          ),
        }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="noise-overlay relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
            <div className="h-[400px] w-[600px] rounded-full bg-[var(--color-accent)]/[0.03] blur-[100px]" />
          </div>

          <Container className="relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Where We Work
              </span>

              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl">
                Serving the{" "}
                <span className="heading-display text-[var(--color-accent)]">Sacramento</span>{" "}
                area and beyond
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#888]">
                From our base in Sacramento, we provide 24/7 towing and roadside
                assistance across Elk Grove, Rancho Cordova, Folsom, Roseville,
                and the greater Sacramento region.
              </p>
            </div>
          </Container>

          <div className="absolute bottom-0 left-0 right-0 copper-divider" />
        </section>

        {/* Area Grid */}
        <section className="bg-[#0a0a0a] py-20 lg:py-28">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group rounded-2xl border border-[#ededed]/6 bg-[#ededed]/[0.02] p-6 transition-all hover:border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)]/[0.03]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                    <h2 className="text-lg font-semibold text-[#ededed]">
                      {area.city}, CA
                    </h2>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#888] line-clamp-3">
                    {area.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
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
