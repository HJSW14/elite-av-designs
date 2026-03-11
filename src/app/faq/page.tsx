import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { FaqContent } from "@/components/sections/FaqContent";
import { company } from "@/data/company";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: `FAQ | ${company.name}`,
  description:
    "Frequently asked questions about Next Level Towing. Learn about response times, towing methods, service areas, insurance coverage, and more.",
  alternates: {
    canonical: "https://nextleveltow.com/faq",
  },
  openGraph: {
    title: `FAQ | ${company.name}`,
    description:
      "Get answers to the most common towing and roadside assistance questions from Next Level Towing in Sacramento.",
    url: "https://nextleveltow.com/faq",
  },
};

const faqs = [
  {
    question: "How fast can you get to me?",
    answer:
      "We aim for fast response throughout Sacramento and surrounding areas including Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus Heights.",
  },
  {
    question: "What towing methods do you use?",
    answer:
      "We operate flatbed and wheel-lift trucks. Flatbed towing is recommended for luxury vehicles, AWD and 4WD vehicles, lowered or modified cars, and motorcycles.",
  },
  {
    question: "Will my insurance cover the tow?",
    answer:
      "Most auto insurance policies and roadside assistance plans cover towing. We provide itemized receipts for reimbursement.",
  },
  {
    question: "Can you tow exotic or luxury vehicles?",
    answer:
      "Yes. Our flatbeds use extended low-angle ramps and soft-strap tie-downs designed for low-clearance and high-value vehicles.",
  },
  {
    question: "Are you available 24/7?",
    answer:
      "Yes. We operate around the clock, every day of the year including holidays. Call (916) 234-8697 at any hour.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus Heights. We also cover Davis, West Sacramento, and major corridors along I-5, I-80, and Highway 50.",
  },
  {
    question: "What roadside services do you provide?",
    answer:
      "Battery jump-starts, flat tire changes, emergency fuel delivery, and vehicle lockout assistance.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We quote the price upfront before we begin any work. No hidden fees, no surprise charges. We accept cash, credit card, and debit card.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://nextleveltow.com" },
              { name: "FAQ", url: "https://nextleveltow.com/faq" },
            ])
          ),
        }}
      />
      <Header />
      <main>
        <FaqContent />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
