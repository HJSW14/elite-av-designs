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
    <section className="noise-overlay relative overflow-hidden bg-[#0C0C0C]">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent" />
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
            className="mb-8 flex items-center gap-1.5 text-[12px] text-[#7A7570]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/services"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#D4844C]">{service.title}</span>
          </motion.nav>

          {/* Icon + Title */}
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4844C]/20 bg-[#D4844C]/10">
              <Icon className="h-6 w-6 text-[#D4844C]" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#E8E4DF] sm:text-5xl lg:text-6xl">
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
