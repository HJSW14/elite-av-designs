"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Brand } from "@/data/brands";

export function BrandFAQ({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative bg-[#0C0C0C] py-16 lg:py-24"
    >
      <Container>
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#7A7570]">
              Common questions about {brand.name} installations and systems
            </p>
          </div>

          <div className="space-y-4">
            {brand.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="overflow-hidden rounded-xl border border-[#E8E4DF]/6 bg-[#111110]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-[#111110]/80"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-[#E8E4DF] sm:text-lg">
          {question}
        </span>
        <div className="shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-[#D4844C]" />
          ) : (
            <Plus className="h-5 w-5 text-[#D4844C]" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E8E4DF]/6 px-6 pb-6 pt-4">
              <p className="text-[15px] leading-relaxed text-[#7A7570]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
