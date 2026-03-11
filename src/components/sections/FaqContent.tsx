"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const faqs = [
  {
    question: "How fast can you get to me?",
    answer:
      "We aim for fast response throughout Sacramento and surrounding areas including Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus Heights. When you call, we give you an honest ETA and keep you updated.",
  },
  {
    question: "What towing methods do you use?",
    answer:
      "We operate flatbed and wheel-lift trucks. Flatbed towing is recommended for luxury vehicles, AWD and 4WD vehicles, lowered or modified cars, and motorcycles -- any vehicle where dragging two wheels could cause damage. Wheel-lift towing works well for standard front-wheel-drive vehicles. We bring the right truck for your situation.",
  },
  {
    question: "Will my insurance cover the tow?",
    answer:
      "Most auto insurance policies and roadside assistance plans (including AAA, insurance riders, and many credit card benefits) cover towing. We provide itemized receipts for reimbursement. If you are not sure, call your insurer before we arrive to confirm your coverage -- we are happy to wait a few minutes while you do.",
  },
  {
    question: "Can you tow exotic or luxury vehicles?",
    answer:
      "Yes. Our flatbeds use extended low-angle ramps and soft-strap tie-downs designed for low-clearance and high-value vehicles. We do not use hooks or chains that could contact body panels or suspension components. If you drive a luxury sedan, sports car, or any vehicle with a low front splitter, our flatbed is the right equipment.",
  },
  {
    question: "Are you available 24/7?",
    answer:
      "Yes. We operate around the clock, every day of the year including holidays. Breakdowns do not keep business hours, and neither do we. Call (916) 234-8697 at any hour and a real dispatcher will answer.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Sacramento and the greater Sacramento region including Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus Heights. We also cover Davis, West Sacramento, and the corridors along I-5, I-80, and Highway 50. For long-distance transport, we cover all of California and neighboring states.",
  },
  {
    question: "What roadside services do you provide?",
    answer:
      "We handle battery jump-starts (driveways, parking lots, freeway shoulders), flat tire changes using your spare, emergency fuel delivery, and vehicle lockout assistance. Most roadside calls are resolved on the spot without needing a tow.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We quote the price upfront before we begin any work. No hidden fees, no surprise charges when we arrive. The price you are quoted when you call is the price you pay. We accept cash, credit card, and debit card.",
  },
];

export function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* Hero */}
      <section className="noise-overlay relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-[var(--color-accent)]/[0.03] blur-[100px]" />
        </div>
        <Container className="relative z-10 text-center">
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
            FAQ
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl">
            Frequently asked{" "}
            <span className="heading-display text-[var(--color-accent)]">questions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-[#888]">
            Everything you need to know about our towing and roadside assistance
            services. Can&apos;t find your answer? Just call us.
          </p>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 copper-divider" />
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#0f0f0f] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#ededed]/8 bg-[#141414] transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex min-h-[56px] w-full items-center justify-between px-5 py-5 text-left sm:px-6"
                    aria-expanded={openIndex === i}
                  >
                    <span className="pr-4 text-[15px] font-semibold text-[#ededed]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-[#ededed]/6 px-6 pb-6 pt-4 text-[14px] leading-[1.8] text-[#888]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-14 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/[0.04] p-8 text-center">
              <h3 className="mb-2 text-lg font-semibold text-[#ededed]">
                Still have a question?
              </h3>
              <p className="mb-6 text-[14px] text-[#888]">
                The fastest way to get an answer is to call us. A real person will
                pick up and can help you right away.
              </p>
              <Button href={company.phoneHref} size="lg">
                <Phone className="h-4 w-4" />
                Call {company.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
