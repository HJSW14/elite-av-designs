"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Zap, Handshake, Eye } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We use properly maintained flatbed and wheel-lift equipment. Every tow is done with care and the right setup for your vehicle.",
  },
  {
    icon: Zap,
    title: "Reliable Response",
    description:
      "We answer the phone and get you an honest ETA. No runaround, no vague promises. We show up when we say we will.",
  },
  {
    icon: Handshake,
    title: "Honest Partnership",
    description:
      "No upselling, no pressure. We quote the price before we hook up and stick to it. What we say is what you pay.",
  },
  {
    icon: Eye,
    title: "There When You Need Us",
    description:
      "24/7 dispatch, every day of the year. Break down at 2 a.m. or on a holiday - we pick up and get you help.",
  },
];

export function AboutValues() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-y border-[#ededed]/6 bg-[#141414] py-20 lg:py-28">
      <Container>
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            What We Stand For
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
            The principles behind every{" "}
            <span className="heading-display text-[var(--color-accent)]">job</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="rounded-xl border border-[#ededed]/6 bg-[#0a0a0a] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-base font-semibold text-[#ededed]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#888]">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
