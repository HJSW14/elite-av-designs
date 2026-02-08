import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BrandHero } from "@/components/sections/BrandHero";
import { BrandDetails } from "@/components/sections/BrandDetails";
import { BrandFAQ } from "@/components/sections/BrandFAQ";
import { CTASection } from "@/components/sections/CTASection";
import { brands } from "@/data/brands";
import { brandPageSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schemas";

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) return {};

  const title = `${brand.name} ${brand.certified ? "Certified " : ""}${brand.certificationLevel || "Sales & Installation"} | Denver | Elite AV Designs`;
  const description = `${brand.certified ? "Certified " : ""}${brand.name} ${brand.certificationLevel || "dealer and installer"} serving Denver, Parker, Highlands Ranch, and Castle Rock. ${brand.tagline}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://eliteavdesigns.com/brands/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://eliteavdesigns.com/brands/${slug}`,
      images: [
        {
          url: brand.heroImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brand.heroImage],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const schema = brandPageSchema(brand);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Brands", url: "https://eliteavdesigns.com/brands" },
    { name: brand.name, url: `https://eliteavdesigns.com/brands/${slug}` },
  ]);
  const faqSchema = faqPageSchema(brand.faqs);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <BrandHero brand={brand} />
        <BrandDetails brand={brand} />
        <BrandFAQ brand={brand} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
