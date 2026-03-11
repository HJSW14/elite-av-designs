"use client";

import { motion } from "framer-motion";
import { ArrowRight, Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
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

const topics = [
  "Flatbed vs. Wheel-Lift Towing",
  "AWD & Luxury Vehicle Towing",
  "What to Do When Stranded",
  "Roadside Assistance Checklist",
  "Towing Insurance Tips",
  "Sacramento Area Coverage",
];

export function BlogComingSoon() {
  return (
    <section className="noise-overlay relative flex min-h-[80dvh] items-center overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[700px] rounded-full bg-[var(--color-accent)]/[0.03] blur-[120px]" />
      </div>

      <Container className="relative z-10 py-32">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8"
          >
            <Newspaper className="h-7 w-7 text-[var(--color-accent)]" />
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            Blog
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#ededed] sm:text-5xl"
          >
            Coming{" "}
            <span className="heading-display text-[var(--color-accent)]">soon</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-md text-[15px] leading-[1.7] text-[#888]"
          >
            Expert guides on towing, roadside assistance, and what to expect when
            you need help. Stay tuned.
          </motion.p>

          {/* Preview topics */}
          <motion.div variants={fadeUp} className="mt-10">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#888]">
              Topics we&apos;ll cover
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[#ededed]/8 px-4 py-1.5 text-[12px] font-medium text-[#888]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <Button href="/contact" variant="outline">
              Get in Touch Instead
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
