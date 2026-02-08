"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { featuredProject } from "@/data/projects";

export function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-150px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="noise-overlay relative overflow-hidden bg-[#0C0C0C] py-24 lg:py-36"
    >
      <Container>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3 md:mb-16"
        >
          <span className="h-px w-6 bg-[#D4844C]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Featured Work
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            className="relative md:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${featuredProject.image})`,
                  scale: imageScale,
                  y: imageY,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/30 via-transparent to-transparent" />
            </div>

            {/* Accent line */}
            <div className="absolute -bottom-3 left-8 right-8 h-px bg-gradient-to-r from-[#D4844C]/40 via-[#D4844C]/10 to-transparent" />
          </motion.div>

          {/* Text content */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#7A7570]">
              {featuredProject.category}
            </span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl lg:text-4xl">
              {featuredProject.title}
            </h3>
            <p className="mt-1.5 text-sm text-[#D4844C]">
              {featuredProject.location}
            </p>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#7A7570]">
              {featuredProject.description}
            </p>

            {/* Features as inline pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[#E8E4DF]/8 px-3 py-1 text-[11px] font-medium text-[#7A7570]"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/projects" variant="outline">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
