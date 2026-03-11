"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";

const steps = [
  { icon: Phone, label: "Call", detail: "We answer 24/7" },
  { icon: MapPin, label: "Location", detail: "Tell us where you are" },
  { icon: Truck, label: "Dispatch", detail: "Truck heads your way" },
  { icon: CheckCircle, label: "Help Arrives", detail: "We take it from there" },
];

export function ServicesProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[#ededed]/6 bg-[#141414] py-16 lg:py-20"
    >
      <Container>
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Our Process
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
            Simple{" "}
            <span className="heading-display text-[var(--color-accent)]">process</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[28px] left-[10%] right-[10%] hidden h-px md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            style={{
              originX: 0,
              background:
                "linear-gradient(90deg, rgba(62,154,209,0.1), var(--color-accent), rgba(62,154,209,0.1))",
            }}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)]/20 bg-[#141414]">
                  <step.icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <span className="text-sm font-semibold text-[#ededed]">
                  {step.label}
                </span>
                <span className="mt-1 text-[12px] text-[#888]">
                  {step.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
