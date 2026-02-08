"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F5F2EE] py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="mb-14 max-w-2xl md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-3 text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl lg:text-5xl"
          >
            Four disciplines,{" "}
            <span className="heading-display text-[#D4844C]">one</span>{" "}
            seamless experience
          </motion.h2>
        </div>

        {/* Uniform 2x2 grid */}
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
                className="group relative flex h-[340px] flex-col overflow-hidden rounded-2xl bg-[#1A1A18] transition-all duration-500 hover:ring-1 hover:ring-[#D4844C]/20 sm:h-[380px]"
              >
                {/* Image top half */}
                <div className="relative h-[55%] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18] via-[#1A1A18]/20 to-transparent" />
                </div>

                {/* Content bottom half */}
                <div className="relative flex flex-1 flex-col justify-end p-6">
                  {/* Number */}
                  <span className="absolute top-3 right-5 text-[3.5rem] font-bold leading-none text-white/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4844C]/10">
                    <service.icon className="h-4 w-4 text-[#D4844C]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#E8E4DF]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#7A7570] line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#D4844C] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Explore
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
