"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { company } from "@/data/company";

export function ServiceFeatures({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!service) return null;

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left: Full description + features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Overview
            </span>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
              What we{" "}
              <span className="heading-display text-[var(--color-accent)]">deliver</span>
            </h2>

            <p className="mb-8 text-[15px] leading-[1.8] text-[#888]">
              {service.description}
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                    <Check className="h-3 w-3 text-[var(--color-accent)]" />
                  </div>
                  <span className="text-[14px] text-[#A39E98]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent" />
            </div>

            {/* Key details */}
            <div className="mt-6 rounded-xl border border-[#ededed]/6 bg-[#141414] p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#888]">
                    Response
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#ededed]">
                    {company.responseTime}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#888]">
                    Coverage
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#ededed]">
                    Sacramento area
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#888]">
                    Dispatch
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#ededed]">
                    24/7 available
                  </p>
                </div>
              </div>
            </div>

            {/* Service areas cross-link */}
            <div className="mt-6 rounded-xl border border-[#ededed]/6 bg-[#141414] p-6">
              <div className="mb-3 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  Available in
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {areas.slice(0, 6).map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="rounded-full border border-[#ededed]/6 px-2.5 py-1 text-[11px] text-[#888] transition-colors hover:border-[var(--color-accent)]/30 hover:text-[#ededed]"
                  >
                    {area.city}
                  </Link>
                ))}
                <Link
                  href="/areas"
                  className="rounded-full border border-[var(--color-accent)]/20 px-2.5 py-1 text-[11px] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/10"
                >
                  View all areas
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
