"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-cycle
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [inView, next]);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F2EE] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]"
          >
            Client Stories
          </motion.span>

          {/* Big quote - fixed height to prevent layout shift */}
          <div className="relative mt-10 h-[320px] sm:h-[280px] lg:h-[300px]">
            {/* Oversized quote marks */}
            <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-[family-name:var(--font-display)] text-[8rem] leading-none text-[#D4844C]/10 sm:text-[10rem]">
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
                <blockquote className="font-[family-name:var(--font-display)] text-xl leading-[1.6] font-normal italic text-[#1A1A18] sm:text-2xl lg:text-[1.65rem] lg:leading-[1.55]">
                  {t.text}
                </blockquote>

                <div className="mt-8">
                  <div className="text-sm font-semibold text-[#1A1A18]">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-xs text-[#7A7570]">
                    {t.location} &middot; {t.project}
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
                    ? "w-8 bg-[#D4844C]"
                    : "w-1.5 bg-[#1A1A18]/15 hover:bg-[#1A1A18]/30"
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
