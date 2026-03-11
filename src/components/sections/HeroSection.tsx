"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

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
      className="noise-overlay relative min-h-[100dvh] w-full max-w-[100vw] overflow-x-clip overflow-y-visible bg-[#0a0a0a]"
    >
      <Container className="relative z-10 flex min-h-[100dvh] w-full min-w-0 max-w-full items-center">
        <div className="grid min-w-0 w-full gap-8 py-24 md:grid-cols-12 md:gap-6 md:py-0">
          {/* Left: Text content */}
          <motion.div
            className="flex min-w-0 flex-col justify-center md:col-span-6 lg:col-span-5"
            style={{ y: textY }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-5 flex flex-wrap items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-[var(--color-accent)]" />
              <span className="text-[12px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)] sm:text-[11px]">
                Sacramento &middot; Elk Grove &middot; Roseville
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#ededed] sm:text-5xl md:text-[3.5rem] lg:text-[4.2rem]"
            >
              Towing &{" "}
              <span className="heading-display text-[var(--color-accent)]">
                Roadside
              </span>
              <br />
              in Sacramento
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg font-medium text-[#ededed]/70 tracking-wide"
            >
              {company.tagline}
            </motion.p>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-full break-words text-[15px] leading-[1.7] text-[#888] sm:max-w-md"
            >
              Fast response. Fair prices. No surprises. We dispatch 24/7 and aim
              for quick arrival throughout Sacramento and surrounding areas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button href={company.phoneHref} size="lg" className="w-full justify-center sm:w-auto">
                <Phone className="h-4 w-4 shrink-0" />
                Call Now -- {company.phone}
              </Button>
              <Button href="/services" variant="ghost" size="lg" className="w-full justify-center border border-[#ededed]/15 text-[#888] hover:border-[#ededed]/30 hover:bg-[#ededed]/5 hover:text-[#ededed] sm:w-auto sm:border-0">
                Our Services
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
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
                    "url(https://images.unsplash.com/photo-1723846806146-05768f1de375?w=1600&q=85&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-transparent md:from-[#0a0a0a]/60" />

              {/* Trust badge inside image */}
              <div className="absolute bottom-5 left-5 rounded-xl border border-[#ededed]/10 bg-[#141414]/80 px-5 py-3.5 backdrop-blur-xl">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Licensed &amp; Insured
                </div>
                <div className="mt-1 text-sm font-medium text-[#ededed]">
                  Flatbed &middot; Wheel-Lift &middot; Recovery
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
