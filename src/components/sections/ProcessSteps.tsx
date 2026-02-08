"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MessageSquare, Ruler, Wrench, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We listen. Tell us about your space, your lifestyle, what you wish your home could do.",
  },
  {
    icon: Ruler,
    title: "Design",
    description:
      "We blueprint a system around your home. The right gear, integrations, and layout.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Our certified technicians install with precision. Clean wiring, calibrated audio, zero loose ends.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description:
      "Ongoing updates, responsive service, remote diagnostics. We don't disappear after install.",
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F5F2EE] py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-3 text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl"
          >
            From first call to{" "}
            <span className="heading-display text-[#D4844C]">final</span>{" "}
            calibration
          </motion.h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[22px] left-0 right-0 hidden h-px md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ originX: 0, background: "linear-gradient(90deg, #D4844C, rgba(212,132,76,0.15))" }}
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
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
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#D4844C]/30 bg-[#F5F2EE]">
                    <step.icon className="h-4.5 w-4.5 text-[#D4844C]" />
                    {/* Pulse ring */}
                    {i === 0 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[#D4844C]/20"
                        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                      />
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#1A1A18]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#7A7570]">
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
