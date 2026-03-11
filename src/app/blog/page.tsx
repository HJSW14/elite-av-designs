import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { blogCollectionSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Blog | Towing & Roadside Tips from Sacramento Experts",
  description:
    "Practical guides on towing safety, flatbed transport, roadside assistance, and vehicle care from Next Level Towing in Sacramento, CA.",
  alternates: {
    canonical: "https://nextleveltow.com/blog",
  },
  openGraph: {
    title: "Blog | Next Level Towing Sacramento",
    description:
      "Towing tips, roadside safety guides, and vehicle care insights from Sacramento's trusted 24/7 tow service.",
    url: "https://nextleveltow.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Next Level Towing Sacramento",
    description:
      "Towing tips, roadside safety guides, and vehicle care insights from Sacramento's trusted 24/7 tow service.",
  },
};

export default function BlogPage() {
  const schema = blogCollectionSchema();
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "Blog", url: "https://nextleveltow.com/blog" },
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
