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
      "We use only premium, industry-certified equipment and follow manufacturer best practices on every single install.",
  },
  {
    icon: Zap,
    title: "Precision Execution",
    description:
      "Clean wiring, calibrated audio, seamless integration. Every detail is dialed in before we hand you the remote.",
  },
  {
    icon: Handshake,
    title: "Honest Partnership",
    description:
      "No upselling, no jargon. We recommend what actually fits your space, your lifestyle, and your budget.",
  },
  {
    icon: Eye,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at install. Remote diagnostics, system updates, and responsive service whenever you need us.",
  },
];

export function AboutValues() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-y border-[#E8E4DF]/6 bg-[#111110] py-20 lg:py-28">
      <Container>
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            What We Stand For
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
            The principles behind every{" "}
            <span className="heading-display text-[#D4844C]">project</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="rounded-xl border border-[#E8E4DF]/6 bg-[#0C0C0C] p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4844C]/20 bg-[#D4844C]/8">
                  <Icon className="h-5 w-5 text-[#D4844C]" />
                </div>
                <h3 className="text-base font-semibold text-[#E8E4DF]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#7A7570]">
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
