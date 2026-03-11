import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AreaHero } from "@/components/sections/AreaHero";
import { AreaContent } from "@/components/sections/AreaContent";
import { CTASection } from "@/components/sections/CTASection";
import { areas } from "@/data/areas";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    return { title: "Area Not Found" };
  }

  return {
    title: `Towing & Roadside Assistance in ${area.city}, CA | Next Level Towing`,
    description: `24/7 towing and roadside assistance in ${area.city}, California. Serving ${area.neighborhoods.slice(0, 4).join(", ")} and surrounding areas. Flatbed towing, jump-starts, tire changes, and more. Call ${company.phone}.`,
    alternates: {
      canonical: `https://nextleveltow.com/areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.city} Towing & Roadside | ${company.name}`,
      description: area.tagline,
      url: `https://nextleveltow.com/areas/${area.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Towing & Roadside in ${area.city}, CA | Next Level Towing`,
      description: area.tagline,
    },
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "@id": "https://nextleveltow.com/#business",
    name: company.name,
    description: `24/7 towing and roadside assistance in ${area.city}, California.`,
    url: `https://nextleveltow.com/areas/${area.slug}`,
    telephone: company.phone,
    areaServed: {
      "@type": "City",
      name: area.city,
      "@id": `https://en.wikipedia.org/wiki/${area.city.replace(/\s/g, "_")},_California`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zip,
      addressCountry: "US",
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "Service Areas", url: "https://nextleveltow.com/areas" },
    {
      name: `${area.city}, CA`,
      url: `https://nextleveltow.com/areas/${area.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <AreaHero slug={slug} />
        <AreaContent slug={slug} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
