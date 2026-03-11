"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";
import { company } from "@/data/company";

export function ReviewsContent() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Main content */}
      <section ref={ref} className="bg-[#0f0f0f] py-20 lg:py-28">
        <Container>
          {/* Call CTA bar - compact, above reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6"
          >
            <p className="max-w-xl text-center text-[14px] text-[#888] sm:text-left">
              We aim to answer every call, give honest prices, and treat your vehicle with care.
            </p>
            <Button href={company.phoneHref} size="md" className="shrink-0">
              <Phone className="h-4 w-4" />
              Call for Help Now
            </Button>
          </motion.div>

          {/* Reviews grid - full width */}
          <div className="grid gap-5 sm:grid-cols-2">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="rounded-2xl border border-[#ededed]/6 bg-[#141414] p-6"
                  >
                    <div className="mb-3 flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-[14px] leading-relaxed text-[#ededed]">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <div className="mt-4 border-t border-[#ededed]/6 pt-4">
                      <div className="text-[13px] font-semibold text-[#ededed]">
                        {testimonial.name}
                      </div>
                      <div className="text-[11px] text-[#888]">
                        {testimonial.location} &middot; {testimonial.service}
                      </div>
                    </div>
                  </motion.div>
                ))}
          </div>

          {/* Leave a review CTA - full width, centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-12 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/[0.04] p-8 text-center"
          >
            <h3 className="mb-2 font-semibold text-[#ededed]">
              Did we help you recently?
            </h3>
            <p className="mx-auto mb-6 max-w-lg text-[14px] text-[#888]">
              We would love to hear about your experience. Leaving a review
              helps other Sacramento drivers find reliable help when they need it.
            </p>
            <a
              href={company.socials.google}
              data-track="google-review"
              data-location="reviews_page_cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--color-accent-hover)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Leave a Google Review
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
