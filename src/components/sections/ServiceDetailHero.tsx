"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

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

export function ServiceDetailHero({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;

  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      </div>

      <Container className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            className="mb-8 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] text-[#888]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#ededed]"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/services"
              className="transition-colors hover:text-[#ededed]"
            >
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[var(--color-accent)]">{service.title}</span>
          </motion.nav>

          {/* Icon + Title */}
          <motion.div variants={fadeUp} className="mb-4 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10">
              <Icon className="h-6 w-6 text-[var(--color-accent)]" />
            </div>
            <h1 className="min-w-0 break-words text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl lg:text-5xl xl:text-6xl">
              {service.title}
            </h1>
          </motion.div>

          {/* Short description */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-[1.7] text-[#A39E98] sm:text-lg"
          >
            {service.shortDescription}
          </motion.p>
        </motion.div>
      </Container>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
