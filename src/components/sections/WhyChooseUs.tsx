"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Award, Users, Zap, Shield } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Certified Excellence",
    description:
      "Control4 and Lutron certified installers, not just resellers. We are trained and authorized by the brands we install.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Based in Parker, serving Denver metro since 2018. We understand Colorado homes, climate, and homeowner needs.",
  },
  {
    icon: Zap,
    title: "White-Glove Service",
    description:
      "From consultation to final calibration, we treat your home with respect and deliver installations that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Lifetime Support",
    description:
      "We stand behind our work. Every installation includes training, documentation, and ongoing support for as long as you own your system.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl lg:text-4xl">
            Quality Over{" "}
            <span className="heading-display text-[#D4844C]">Quantity</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-[15px] leading-[1.7] text-[#7A7570]">
            We do not compete on volume. We compete on craftsmanship, reliability, and customer experience. Every project receives the same attention to detail, whether it is a single TV mount or a whole-home automation system.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#D4844C]/20 bg-[#D4844C]/[0.05]">
                <advantage.icon className="h-6 w-6 text-[#D4844C]" />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-[#E8E4DF]">
                {advantage.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#7A7570]">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
