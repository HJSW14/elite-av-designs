"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

interface EnhancedRelatedServicesProps {
  currentSlug: string;
}

export function EnhancedRelatedServices({ currentSlug }: EnhancedRelatedServicesProps) {
  const currentService = services.find((s) => s.slug === currentSlug);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Logic for related services based on current service
  let relatedSlugs: string[] = [];
  
  if (currentSlug === "home-theater") {
    relatedSlugs = ["in-wall-ceiling-speakers", "control4-installation", "network-wifi"];
  } else if (currentSlug === "home-automation") {
    relatedSlugs = ["control4-installation", "smart-lighting-climate", "network-wifi"];
  } else if (currentSlug === "window-coverings") {
    relatedSlugs = ["home-automation", "smart-lighting-climate", "control4-installation"];
  } else if (currentSlug === "surveillance") {
    relatedSlugs = ["network-wifi", "home-automation", "control4-installation"];
  } else if (currentSlug === "tv-wall-mounting") {
    relatedSlugs = ["home-theater", "in-wall-ceiling-speakers", "outdoor-av"];
  } else if (currentSlug === "whole-home-audio") {
    relatedSlugs = ["in-wall-ceiling-speakers", "outdoor-av", "control4-installation"];
  } else if (currentSlug === "network-wifi") {
    relatedSlugs = ["home-automation", "surveillance", "control4-installation"];
  } else if (currentSlug === "outdoor-av") {
    relatedSlugs = ["whole-home-audio", "network-wifi", "smart-lighting-climate"];
  } else if (currentSlug === "in-wall-ceiling-speakers") {
    relatedSlugs = ["home-theater", "whole-home-audio", "outdoor-av"];
  } else if (currentSlug === "control4-installation") {
    relatedSlugs = ["home-automation", "smart-lighting-climate", "network-wifi"];
  } else if (currentSlug === "smart-lighting-climate") {
    relatedSlugs = ["control4-installation", "home-automation", "window-coverings"];
  } else if (currentSlug === "commercial-av") {
    relatedSlugs = ["network-wifi", "surveillance", "tv-wall-mounting"];
  }

  const relatedServices = services.filter((s) => relatedSlugs.includes(s.slug)).slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section ref={ref} className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Related Services
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
            Complete Your System
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-2xl border border-[#E8E4DF]/6 bg-[#E8E4DF]/[0.02] p-6 transition-all hover:border-[#D4844C]/20 hover:bg-[#D4844C]/[0.03]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4844C]/20 bg-[#D4844C]/[0.05]">
                  <service.icon className="h-5 w-5 text-[#D4844C]" />
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-[#E8E4DF] transition-colors group-hover:text-[#D4844C]">
                  {service.title}
                </h3>
                <p className="mb-4 text-[13px] leading-[1.7] text-[#7A7570]">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D4844C]">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
