"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServiceFaq({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!service || service.faqs.length === 0) return null;

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-16 lg:py-24">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
              Common Questions
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
              Frequently asked{" "}
              <span className="heading-display text-[#D4844C]">questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[#E8E4DF]/6 bg-[#111110]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium leading-snug text-[#E8E4DF]">
          {question}
        </span>
        <ChevronDown
          className={`h-4.5 w-4.5 shrink-0 text-[#D4844C] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] leading-[1.7] text-[#7A7570]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
