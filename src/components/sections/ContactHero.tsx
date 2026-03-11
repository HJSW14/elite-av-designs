"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export function ContactHero() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-[var(--color-accent)]/[0.03] blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            24/7 Dispatch
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl"
          >
            Contact{" "}
            <span className="heading-display text-[var(--color-accent)]">Next Level Towing</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#888]"
          >
            For immediate roadside assistance, call us directly. For general
            inquiries, use the form below and we will respond promptly.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <Button href={company.phoneHref} size="lg" className="w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Call Now -- {company.phone}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
