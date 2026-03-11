"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="mb-14 max-w-2xl md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-3 text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl lg:text-5xl"
          >
            Every situation,{" "}
            <span className="heading-display text-[var(--color-accent)]">covered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 text-[15px] leading-[1.7] text-[#888]"
          >
            From a flat tire on the freeway to transporting a luxury vehicle across
            the state, we have the right truck and the right training for the job.
          </motion.p>
        </div>

        {/* 2x2 grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl bg-[#141414] transition-all duration-500 hover:ring-1 hover:ring-[var(--color-accent)]/20 sm:min-h-[340px] lg:min-h-[380px]"
              >
                {/* Full-card image background */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/45 to-[#141414]/15" />
                </div>

                {/* Content overlay */}
                <div className="relative z-10 flex min-h-[300px] flex-1 flex-col justify-end p-6 sm:min-h-[340px] lg:min-h-[380px]">
                  {/* Number */}
                  <span className="absolute top-3 right-5 text-[3.5rem] font-bold leading-none text-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/10">
                    <service.icon className="h-4 w-4 text-[var(--color-accent)]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#ededed]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#888] line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
