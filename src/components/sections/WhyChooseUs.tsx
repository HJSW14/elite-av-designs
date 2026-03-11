"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, DollarSign, Clock, Truck, Radio, Navigation } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured in California. We carry the coverage required to operate and to give you peace of mind.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "We quote the price before we hook up. No hidden fees, no surprise charges when we arrive. What we say is what you pay.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "We aim for quick dispatch across Sacramento and surrounding areas. We give you an honest ETA when you call.",
  },
  {
    icon: Truck,
    title: "Flatbed for Exotics & AWD",
    description:
      "Flatbeds with extended ramps designed for luxury, lowered, and all-wheel-drive vehicles. No wheel dragging.",
  },
  {
    icon: Radio,
    title: "Real People Answer",
    description:
      "No automated menus, no call center. When you call us, a dispatcher who can actually help you picks up -- day or night.",
  },
  {
    icon: Navigation,
    title: "Arrival Updates",
    description:
      "We keep you updated on our arrival time. When you call, we give you an ETA and let you know when we are on the way.",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-[#ededed]/6 bg-[#0a0a0a] py-20 lg:py-28">
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
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl lg:text-4xl">
            Fast response.{" "}
            <span className="heading-display text-[var(--color-accent)]">Fair prices.</span>{" "}
            No surprises.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-[15px] leading-[1.7] text-[#888]">
            We built Next Level Towing because people deserve a towing company they can
            trust. That means answering the phone, giving honest prices, and showing up
            when we say we will.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="flex flex-col gap-4 rounded-2xl border border-[#ededed]/6 bg-[#141414] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/[0.06]">
                <advantage.icon className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-[15px] font-semibold text-[#ededed]">
                {advantage.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#888]">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
