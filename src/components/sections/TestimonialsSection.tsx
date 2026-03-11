"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [inView, next]);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Customer Reviews
            </span>
          </motion.div>

          {/* Rating callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 flex items-center justify-center gap-2"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-[#ededed]">{company.rating}</span>
            <span className="text-[#888]">/ 5 &middot; Highly rated</span>
          </motion.div>

          {/* Big quote -- fixed height to prevent layout shift */}
          <div className="relative mt-4 min-h-[280px] sm:min-h-[260px] lg:min-h-[240px]">
            {/* Oversized quote marks */}
            <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none text-[8rem] leading-none text-[var(--color-accent)]/10 sm:text-[10rem]">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative flex h-full flex-col justify-center"
              >
                <blockquote className="text-xl font-normal leading-[1.6] text-[#ededed] sm:text-2xl lg:text-[1.65rem] lg:leading-[1.55]">
                  {t.text}
                </blockquote>

                <div className="mt-8">
                  <div className="text-sm font-semibold text-[#ededed]">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-xs text-[#888]">
                    {t.location} &middot; {t.service}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[var(--color-accent)]"
                    : "w-1.5 bg-[#ededed]/15 hover:bg-[#ededed]/30"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
