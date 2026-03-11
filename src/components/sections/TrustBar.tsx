"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Truck, DollarSign, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Dispatch" },
  { icon: Truck, label: "Flatbed Equipped" },
  { icon: DollarSign, label: "Upfront Pricing" },
  { icon: Phone, label: "Real People Answer" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#ededed]/6 bg-[#141414] py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10"
        >
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2.5"
            >
              <point.icon className="h-4 w-4 text-[var(--color-accent)]" />
              <span className="text-[12px] font-medium tracking-wide text-[#888]">
                {point.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
