"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

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

export function ProjectDetailContent({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-80px" });
  const relatedInView = useInView(relatedRef, { once: true, margin: "-80px" });

  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Project description */}
      <section className="bg-[#0C0C0C] py-20 lg:py-28">
        <Container>
          <motion.div
            ref={contentRef}
            className="mx-auto max-w-3xl"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl"
            >
              About This Project
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-[15px] leading-[1.85] text-[#7A7570]"
            >
              {project.description}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[15px] leading-[1.85] text-[#7A7570]"
            >
              Every detail of this installation was planned from the ground up to
              deliver the best possible experience. We worked closely with the
              homeowner from initial consultation through final calibration,
              ensuring every component was properly specified, installed, and
              tuned for the space.
            </motion.p>

            {/* Service category link */}
            <motion.div variants={fadeUp} className="mt-8">
              {(() => {
                const matchedService = services.find(
                  (s) =>
                    s.title.toLowerCase() ===
                    project.category.toLowerCase()
                );
                if (!matchedService) return null;
                return (
                  <Link
                    href={`/services/${matchedService.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#D4844C]/20 bg-[#D4844C]/[0.05] px-4 py-2 text-[13px] font-medium text-[#D4844C] transition-colors hover:bg-[#D4844C]/10"
                  >
                    <matchedService.icon className="h-4 w-4" />
                    Learn more about our {matchedService.title} services
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                );
              })()}
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeUp} className="mt-10">
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#D4844C]">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4844C]/10">
                      <Check className="h-3 w-3 text-[#D4844C]" />
                    </div>
                    <span className="text-[15px] text-[#7A7570]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/projects" variant="secondary" size="lg">
                <ArrowLeft className="h-4 w-4" />
                All Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Gallery placeholder */}
      <section className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
        <Container>
          <motion.div
            ref={galleryRef}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                Gallery
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
                Project Photos
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#E8E4DF]/[0.04]"
                >
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      filter: i > 1 ? `brightness(${1 - i * 0.12})` : undefined,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-center text-[12px] text-[#7A7570]/60">
              Additional project photos coming soon
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-[#E8E4DF]/6 bg-[#0C0C0C] py-20 lg:py-28">
          <Container>
            <motion.div
              ref={relatedRef}
              initial="hidden"
              animate={relatedInView ? "visible" : "hidden"}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center">
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
                  More Work
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
                  Related Projects
                </h2>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((rp) => (
                  <motion.div key={rp.slug} variants={fadeUp}>
                    <Link
                      href={`/projects/${rp.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-[#E8E4DF]/6 bg-[#E8E4DF]/[0.02] transition-all hover:border-[#D4844C]/20"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${rp.image})` }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#D4844C]">
                          {rp.category}
                        </span>
                        <h3 className="mt-1.5 text-[15px] font-semibold text-[#E8E4DF]">
                          {rp.title}
                        </h3>
                        <p className="mt-1 text-[12px] text-[#7A7570]">
                          {rp.location}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
    </>
  );
}
