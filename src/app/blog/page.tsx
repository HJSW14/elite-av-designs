import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { blogCollectionSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Blog | Home Theater & Smart Home Tips from Denver AV Experts",
  description:
    "Practical guides on home theater design, Control4 automation, Dolby Atmos audio, motorized shades, and home security from Elite AV Designs in Denver, Colorado.",
  alternates: {
    canonical: "https://eliteavdesigns.com/blog",
  },
  openGraph: {
    title: "Blog | Elite AV Designs Denver",
    description:
      "Home theater tips, smart home guides, and AV installation insights from Denver's premier integrator.",
    url: "https://eliteavdesigns.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Elite AV Designs Denver",
    description:
      "Home theater tips, smart home guides, and AV installation insights from Denver's premier integrator.",
  },
};

export default function BlogPage() {
  const schema = blogCollectionSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Blog", url: "https://eliteavdesigns.com/blog" },
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
        <BlogHero />
        <BlogGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
