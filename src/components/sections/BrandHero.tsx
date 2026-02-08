"use client";

import { Container } from "@/components/ui/Container";
import type { Brand } from "@/data/brands";

export function BrandHero({ brand }: { brand: Brand }) {
  return (
    <section className="relative overflow-hidden bg-[#0C0C0C] pb-12 pt-32 lg:pb-16 lg:pt-40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            {brand.certified && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D4844C]/10 px-4 py-2 text-sm font-medium text-[#D4844C]">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {brand.certificationLevel}
              </div>
            )}

            <h1 className="mb-6 text-3xl font-semibold tracking-tight text-[#E8E4DF] sm:text-4xl md:text-5xl">
              {brand.name}
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-[#D4844C] sm:text-xl">
              {brand.tagline}
            </p>

            <p className="text-[15px] leading-relaxed text-[#7A7570] sm:text-base">
              {brand.description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${brand.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
