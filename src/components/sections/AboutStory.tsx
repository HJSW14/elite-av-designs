"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { company, stats, team } from "@/data/company";

export function AboutStory() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 lg:py-28">
      <Container>
        {/* Our Story */}
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
                    "url(https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=1400&q=80&auto=format&fit=crop)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
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
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Our Story
            </span>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
              Built on{" "}
              <span className="heading-display text-[var(--color-accent)]">trust</span>{" "}
              and reliability
            </h2>

            <div className="space-y-4 text-[15px] leading-[1.8] text-[#888]">
              <p>
                Next Level Towing was founded by Michael and Kay with a simple idea: 
                people stranded on the side of the road deserve better than being put 
                on hold, given vague ETAs, or charged surprise fees.
              </p>
              <p>
                We started in Sacramento with one truck and a commitment to doing 
                things differently. We answer every call directly, give honest pricing 
                upfront, and show up when we say we will. Those basics have driven 
                everything we have built since.
              </p>
              <p>
                Today we run a fleet of flatbed and wheel-lift trucks serving 
                Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus 
                Heights around the clock. Our approach has not changed. We are still 
                the people who pick up the phone.
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
              className="rounded-xl border border-[#ededed]/6 bg-[#141414] p-6 text-center"
            >
              <div className="text-3xl font-semibold tracking-tight text-[#ededed] md:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-[12px] font-medium uppercase tracking-wider text-[#888]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="mb-12 text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Our Team
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
              The people behind the trucks
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="rounded-2xl border border-[#ededed]/6 bg-[#141414] p-6 text-center"
              >
                <div className="font-semibold text-[#ededed]">{member.name}</div>
                <div className="mt-1 text-[13px] text-[var(--color-accent)]">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="mt-24 grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="rounded-2xl border border-[#ededed]/6 bg-[#141414] p-8">
            <h3 className="mb-4 text-lg font-semibold text-[#ededed]">Our Approach</h3>
            <ul className="space-y-3 text-[14px] leading-relaxed text-[#888]">
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Real people answer every call -- no automated menus
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Upfront pricing quoted before we arrive
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Honest ETAs and updates throughout the call
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Equipment matched to your vehicle -- flatbed for anything that needs it
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#ededed]/6 bg-[#141414] p-8">
            <h3 className="mb-4 text-lg font-semibold text-[#ededed]">What We Offer</h3>
            <ul className="space-y-3 text-[14px] leading-relaxed text-[#888]">
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Flatbed towing for luxury, AWD, and lowered vehicles
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Roadside assistance: jump-starts, tire changes, lockouts, fuel delivery
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Vehicle recovery from ditches, mud, and accident sites
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]">&#x2713;</span>
                Long-distance transport across California and neighboring states
              </li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
