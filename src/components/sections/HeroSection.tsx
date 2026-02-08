"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/company";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="noise-overlay relative min-h-[100dvh] overflow-hidden bg-[#0C0C0C]"
    >
      <Container className="relative z-10 flex min-h-[100dvh] items-center">
        <div className="grid w-full gap-8 py-24 md:grid-cols-12 md:gap-6 md:py-0">
          {/* Left: Text content */}
          <motion.div
            className="flex flex-col justify-center md:col-span-6 lg:col-span-5"
            style={{ y: textY }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#D4844C]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Denver &middot; Parker &middot; Colorado
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#E8E4DF] sm:text-5xl md:text-[3.5rem] lg:text-[4.2rem]">
              Your Space,{" "}
              <span className="heading-display text-[#D4844C]">
                Elevated
              </span>
              <br />
              by Technology
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-[15px] leading-[1.7] text-[#7A7570]"
            >
              Custom home theaters, smart automation, motorized shading,
              and surveillance systems. Designed, installed, and supported
              by a team that gets it right.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" size="lg">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/projects" variant="ghost" size="lg" className="text-[#7A7570] hover:text-[#E8E4DF]">
                See Our Work
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-14 flex items-center gap-6 border-t border-[#E8E4DF]/8 pt-7 md:gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-semibold tracking-tight text-[#E8E4DF] md:text-3xl">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#7A7570]">
                    {stat.shortLabel}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:col-span-1 md:block" />

          {/* Right: Image */}
          <motion.div
            className="relative md:col-span-5 lg:col-span-6"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            style={{ y: imageY }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/5] md:aspect-[3/4] md:rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/40 via-transparent to-transparent md:from-[#0C0C0C]/60" />

              {/* Certified badge inside image, bottom-left */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-[#E8E4DF]/10 bg-[#1A1A18]/80 px-5 py-3.5 backdrop-blur-xl">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D4844C]">
                  Certified Partner
                </div>
                <div className="mt-1 text-sm font-medium text-[#E8E4DF]">
                  Control4 &middot; Lutron &middot; Hunter Douglas
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom copper divider */}
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
