import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Towing & Roadside Assistance Sacramento",
  description:
    "Need a tow? Call Next Level Towing 24/7 at (916) 234-8697. Serving Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, and Citrus Heights. Fast dispatch, upfront pricing.",
  alternates: {
    canonical: "https://nextleveltow.com/contact",
  },
  openGraph: {
    title: "Contact Next Level Towing | Sacramento Towing",
    description:
      "24/7 dispatch for towing and roadside assistance in Sacramento, CA. Call (916) 234-8697 or send a message.",
    url: "https://nextleveltow.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Next Level Towing | Sacramento Towing",
    description:
      "24/7 dispatch for towing and roadside assistance in Sacramento, CA. Call (916) 234-8697 or send a message.",
  },
};

export default function ContactPage() {
  const schema = contactPageSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "Contact", url: "https://nextleveltow.com/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
