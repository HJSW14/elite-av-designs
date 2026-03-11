"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="noise-overlay relative overflow-hidden bg-[#0a0a0a] py-28 lg:py-36"
      style={{
        clipPath: "polygon(0 6%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* Blue radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[700px] rounded-full bg-[var(--color-accent)]/[0.04] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Need Help Now?
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#ededed] sm:text-4xl lg:text-5xl">
            Stranded? We&apos;re{" "}
            <span className="heading-display text-[var(--color-accent)]">
              on our way
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.7] text-[#888]">
            24/7 dispatch throughout Sacramento, Elk Grove, Rancho Cordova,
            Folsom, Roseville, and Citrus Heights. One call and we&apos;re rolling.
          </p>

          <div className="mt-10 flex w-full max-w-sm flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:items-center">
            <Button href={company.phoneHref} size="lg" className="w-full justify-center sm:w-auto">
              <Phone className="h-4 w-4" />
              Call {company.phone}
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
              Send a Message
            </Button>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-wider text-[#888]/60">
            Fast response &middot; Licensed &amp; insured &middot; Upfront pricing
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
