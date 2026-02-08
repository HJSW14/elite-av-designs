"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { company } from "@/data/company";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export function AreaContent({ slug }: { slug: string }) {
  const area = areas.find((a) => a.slug === slug);
  if (!area) return null;

  const descRef = useRef<HTMLDivElement>(null);
  const servRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const descInView = useInView(descRef, { once: true, margin: "-80px" });
  const servInView = useInView(servRef, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Description section */}
      <section className="bg-[#0C0C0C] py-20 lg:py-28">
        <Container>
          <motion.div
            ref={descRef}
            className="mx-auto max-w-3xl"
            initial="hidden"
            animate={descInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl"
            >
              About Our Work in {area.city}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15px] leading-[1.85] text-[#7A7570]"
            >
              {area.description}
            </motion.p>

            {/* Neighborhoods */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#D4844C]">
                Neighborhoods We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {area.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-[#E8E4DF]/8 bg-[#E8E4DF]/[0.03] px-3.5 py-1.5 text-[12px] text-[#7A7570]"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Services in this area */}
      <section className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
        <Container>
          <motion.div
            ref={servRef}
            initial="hidden"
            animate={servInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Our Services
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl lg:text-4xl">
                What We Offer in {area.city}
              </h2>
            </motion.div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block rounded-2xl border border-[#E8E4DF]/6 bg-[#E8E4DF]/[0.02] p-6 transition-all hover:border-[#D4844C]/20 hover:bg-[#D4844C]/[0.03]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4844C]/10">
                      <service.icon className="h-5 w-5 text-[#D4844C]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#E8E4DF]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#7A7570]">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D4844C] opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why choose us in this area */}
      <section className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
        <Container>
          <motion.div
            ref={whyRef}
            className="mx-auto max-w-3xl"
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Why {company.name}
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
                Why Choose Us in {area.city}
              </h2>
            </motion.div>

            <ul className="mt-10 space-y-5">
              {area.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4844C]/10">
                    <Check className="h-3 w-3 text-[#D4844C]" />
                  </div>
                  <span className="text-[15px] leading-relaxed text-[#7A7570]">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeUp} className="mt-12">
              <Button href="/contact" size="lg">
                Get a Free Quote in {area.city}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
