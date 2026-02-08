"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { brands } from "@/data/brands";

export function BrandsGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const certifiedBrands = brands.filter((b) => b.certified);
  const partnerBrands = brands.filter((b) => !b.certified);

  return (
    <section
      ref={ref}
      className="relative bg-[#0C0C0C] py-16 lg:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Certified Partners */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-[#D4844C]" />
            <h2 className="text-xl font-semibold text-[#E8E4DF]">
              Certified Partners
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifiedBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Authorized Partners */}
        <div>
          <h2 className="mb-8 text-xl font-semibold text-[#E8E4DF]">
            Authorized Partners
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBrands.map((brand, i) => (
              <BrandCard
                key={brand.slug}
                brand={brand}
                index={i + certifiedBrands.length}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandCard({
  brand,
  index,
  inView,
}: {
  brand: (typeof brands)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/brands/${brand.slug}`}
        className="group block h-full rounded-xl border border-[#E8E4DF]/6 bg-[#111110] p-6 transition-all duration-300 hover:border-[#D4844C]/20 hover:bg-[#111110]/80"
      >
        <div className="mb-4 flex h-12 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-8 w-auto opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        {brand.certified && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#D4844C]/10 px-3 py-1 text-xs font-medium text-[#D4844C]">
            <CheckCircle className="h-3 w-3" />
            {brand.certificationLevel}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold text-[#E8E4DF]">
          {brand.name}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#7A7570]">
          {brand.tagline}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-[#D4844C] transition-all group-hover:gap-3">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
}
