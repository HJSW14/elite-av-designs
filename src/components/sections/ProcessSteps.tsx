"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Reach us 24/7 at (916) 234-8697. A real dispatcher answers and gets your info right away.",
  },
  {
    icon: MapPin,
    title: "Share Your Location",
    description:
      "Tell us where you are and what happened. We will confirm your nearest cross street or landmark.",
  },
  {
    icon: Truck,
    title: "We Dispatch",
    description:
      "The nearest available truck heads your way immediately. You will get an honest ETA on the call.",
  },
  {
    icon: CheckCircle,
    title: "Help Arrives",
    description:
      "We aim for fast arrival. We handle everything from there -- no stress, no surprises.",
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-3 text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl"
          >
            One call and{" "}
            <span className="heading-display text-[var(--color-accent)]">we&apos;re</span>{" "}
            rolling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-4 text-[15px] leading-[1.7] text-[#888]"
          >
            Getting help is simple. No apps, no waiting on hold, no complicated process.
          </motion.p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[22px] left-0 right-0 hidden h-px md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ originX: 0, background: "linear-gradient(90deg, var(--color-accent), rgba(62,154,209,0.15))" }}
          />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                {/* Dot on timeline */}
                <div className="mb-6 flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[#141414]">
                    <step.icon className="h-5 w-5 text-[var(--color-accent)]" />
                    {/* Pulse ring on first step */}
                    {i === 0 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[var(--color-accent)]/20"
                        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                      />
                    )}
                  </div>
                </div>

                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#ededed]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#888]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
