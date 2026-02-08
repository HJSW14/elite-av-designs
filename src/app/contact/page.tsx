import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Us | Free Home Theater & Smart Home Consultation in Denver",
  description:
    "Schedule a free in-home consultation for your home theater, Control4 automation, motorized shades, or surveillance project. Serving Denver, Parker, Highlands Ranch, Castle Rock, Lone Tree, and the entire metro area. Call (303) 881-3413.",
  alternates: {
    canonical: "https://eliteavdesigns.com/contact",
  },
  openGraph: {
    title: "Contact Elite AV Designs | Free Consultation",
    description:
      "Schedule a free consultation for home theater, smart home automation, and AV installation in Denver, CO. Call (303) 881-3413.",
    url: "https://eliteavdesigns.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Elite AV Designs | Free Consultation",
    description:
      "Schedule a free consultation for home theater, smart home automation, and AV installation in Denver, CO. Call (303) 881-3413.",
  },
};

export default function ContactPage() {
  const schema = contactPageSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Contact", url: "https://eliteavdesigns.com/contact" },
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
