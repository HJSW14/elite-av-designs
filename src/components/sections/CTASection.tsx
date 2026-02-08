"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="noise-overlay relative overflow-hidden bg-[#0C0C0C] py-28 lg:py-36"
      style={{
        clipPath: "polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* Warm radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[700px] rounded-full bg-[#D4844C]/[0.04] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Let&apos;s Talk
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#E8E4DF] sm:text-4xl lg:text-5xl">
            Ready to make your home{" "}
            <span className="heading-display text-[#D4844C]">
              extraordinary
            </span>
            ?
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.7] text-[#7A7570]">
            Whether it&apos;s a private cinema, a fully automated smart home,
            or a security overhaul, let&apos;s start with a conversation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
              variant="secondary"
              size="lg"
            >
              <Phone className="h-4 w-4" />
              {company.phone}
            </Button>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-wider text-[#7A7570]/60">
            Free consultations &middot; Serving the entire Denver metro area
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
