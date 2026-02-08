"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MessageSquare, Ruler, Wrench, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "Consultation",
    detail: "Share your vision",
  },
  {
    icon: Ruler,
    label: "Design",
    detail: "Custom blueprint",
  },
  {
    icon: Wrench,
    label: "Installation",
    detail: "Precision build",
  },
  {
    icon: HeadphonesIcon,
    label: "Support",
    detail: "Always here",
  },
];

export function ServicesProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[#E8E4DF]/6 bg-[#111110] py-16 lg:py-20"
    >
      <Container>
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Our Process
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
            How every project{" "}
            <span className="heading-display text-[#D4844C]">starts</span>
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
                "linear-gradient(90deg, rgba(212,132,76,0.1), #D4844C, rgba(212,132,76,0.1))",
            }}
          />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
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
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4844C]/20 bg-[#1A1A18]">
                  <step.icon className="h-5 w-5 text-[#D4844C]" />
                </div>
                <span className="text-sm font-semibold text-[#E8E4DF]">
                  {step.label}
                </span>
                <span className="mt-1 text-[12px] text-[#7A7570]">
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
