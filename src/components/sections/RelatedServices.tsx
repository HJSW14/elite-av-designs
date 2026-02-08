"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services, type Service } from "@/data/services";

export function RelatedServices({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const related = services.filter((s) => s.slug !== currentSlug);

  return (
    <section
      ref={ref}
      className="border-t border-[#E8E4DF]/6 bg-[#111110] py-20 lg:py-28"
    >
      <Container>
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Explore More
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
            Other services we{" "}
            <span className="heading-display text-[#D4844C]">offer</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service, i) => (
            <RelatedCard
              key={service.slug}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function RelatedCard({
  service,
  index,
  inView,
}: {
  service: Service;
  index: number;
  inView: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block overflow-hidden rounded-xl border border-[#E8E4DF]/6 bg-[#0C0C0C] transition-all duration-300 hover:border-[#D4844C]/20"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4844C]/20 bg-[#D4844C]/8">
              <Icon className="h-4 w-4 text-[#D4844C]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E8E4DF] transition-colors group-hover:text-[#D4844C]">
              {service.title}
            </h3>
          </div>

          <p className="mb-4 text-[13px] leading-relaxed text-[#7A7570]">
            {service.shortDescription}
          </p>

          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D4844C] transition-all group-hover:gap-2.5">
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
