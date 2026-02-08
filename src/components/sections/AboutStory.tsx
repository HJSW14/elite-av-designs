"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company, stats } from "@/data/company";

export function AboutStory() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
              Our Story
            </span>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
              From a{" "}
              <span className="heading-display text-[#D4844C]">spark</span> to
              a standard
            </h2>

            <div className="space-y-4 text-[15px] leading-[1.8] text-[#7A7570]">
              <p>
                Founded in {company.foundedYear}, Elite AV Designs started when
                two friends with a shared passion for home technology decided
                they could do better. After years working for larger AV
                companies, they saw the same problems: rushed installs, poor
                communication, and systems that looked impressive on paper but
                frustrated homeowners daily.
              </p>
              <p>
                They believed there was a better way. A way where installations
                were done right the first time. Where clients understood their
                systems. Where you could actually reach your installer after the
                project was done. So they started Elite AV Designs in{" "}
                {company.city}, working out of a garage and doing everything
                themselves.
              </p>
              <p>
                Today, we serve homeowners across the entire Denver metro area
                with custom-designed home theaters, whole-home automation,
                motorized window coverings, and surveillance systems. Every
                project receives the same attention to detail, whether it&apos;s
                a single-room upgrade or a full smart estate buildout. We&apos;re
                certified partners with Control4, Lutron, Hunter Douglas, and other
                industry-leading brands because we believe in doing things
                right. No shortcuts, no compromises.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#E8E4DF]/6 bg-[#111110] p-6 text-center"
            >
              <div className="text-3xl font-semibold tracking-tight text-[#E8E4DF] md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-[12px] font-medium uppercase tracking-wider text-[#7A7570]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
