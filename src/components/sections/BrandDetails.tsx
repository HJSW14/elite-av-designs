"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Brand } from "@/data/brands";
import { CheckCircle, ArrowRight } from "lucide-react";

export function BrandDetails({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#E8E4DF]">
              What We Offer with {brand.name}
            </h2>
            <ul className="space-y-3">
              {brand.specialties.map((specialty, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#D4844C]" />
                  <span className="text-[15px] leading-relaxed text-[#7A7570]">
                    {specialty}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Why We Recommend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#E8E4DF]">
              Why We Recommend {brand.name}
            </h2>
            <ul className="space-y-3">
              {brand.whyWeRecommend.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4844C]" />
                  <span className="text-[15px] leading-relaxed text-[#7A7570]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Related Services */}
        {brand.relatedServices.length > 0 && (
          <motion.div
            className="mt-16 rounded-2xl border border-[#E8E4DF]/6 bg-[#111110] p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#E8E4DF]">
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {brand.relatedServices.map((serviceSlug) => (
                <Link
                  key={serviceSlug}
                  href={`/services/${serviceSlug}`}
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#E8E4DF]/10 bg-[#0C0C0C] px-4 py-2 text-sm font-medium text-[#E8E4DF] transition-all hover:border-[#D4844C]/30 hover:bg-[#0C0C0C]/80"
                >
                  {serviceSlug
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
