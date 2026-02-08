"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesList() {
  return (
    <section className="bg-[#0C0C0C] py-20 lg:py-28">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  reversed,
}: {
  service: (typeof services)[number];
  index: number;
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const Icon = service.icon;

  return (
    <div ref={ref} className="relative">
      <div
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20 ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          className="relative md:[direction:ltr]"
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 via-transparent to-transparent" />
          </div>

          {/* Floating index badge */}
          <div className="absolute -bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4844C]/20 bg-[#1A1A18] text-sm font-semibold text-[#D4844C] shadow-lg shadow-[#0C0C0C]/50 md:-bottom-5 md:h-14 md:w-14 md:text-base">
            0{index + 1}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:[direction:ltr]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4844C]/20 bg-[#D4844C]/8">
              <Icon className="h-5 w-5 text-[#D4844C]" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
              {service.title}
            </h3>
          </div>

          <p className="mb-6 max-w-lg text-[15px] leading-[1.7] text-[#7A7570]">
            {service.description}
          </p>

          {/* Feature list */}
          <ul className="mb-8 grid gap-2.5 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[13px] text-[#A39E98]"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4844C]" />
                {feature}
              </li>
            ))}
          </ul>

          <Button href={`/services/${service.slug}`} variant="outline" size="md">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
