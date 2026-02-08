"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { areas } from "@/data/areas";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export function AreaHero({ slug }: { slug: string }) {
  const area = areas.find((a) => a.slug === slug);
  if (!area) return null;

  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0C0C0C] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-[#D4844C]/[0.03] blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            className="mb-8 flex items-center justify-center gap-1.5 text-[12px] text-[#7A7570]"
          >
            <Link href="/" className="transition-colors hover:text-[#E8E4DF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/areas"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Service Areas
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#D4844C]">{area.city}, CO</span>
          </motion.nav>

          <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4 text-[#D4844C]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
              {area.city}, Colorado
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#E8E4DF] sm:text-5xl lg:text-6xl"
          >
            Home Theater & Smart Home in{" "}
            <span className="heading-display text-[#D4844C]">
              {area.city}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#7A7570]"
          >
            {area.tagline}
          </motion.p>
        </motion.div>
      </Container>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
