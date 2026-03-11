import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { ServiceDetailHero } from "@/components/sections/ServiceDetailHero";
import { ServiceFeatures } from "@/components/sections/ServiceFeatures";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { serviceSchema, serviceFaqSchema, breadcrumbSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} in Sacramento, CA | Next Level Towing`,
    description: `${service.shortDescription} Serving Sacramento, Elk Grove, Rancho Cordova, Folsom, and Roseville. Call (916) 234-8697 for 24/7 dispatch.`,
    alternates: {
      canonical: `https://nextleveltow.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Next Level Towing Sacramento`,
      description: service.shortDescription,
      url: `https://nextleveltow.com/services/${service.slug}`,
      images: [{ url: service.image, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Sacramento, CA | Next Level Towing`,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const schema = serviceSchema({
    name: service.title,
    description: service.description,
    slug: service.slug,
  });

  const faqSchema = serviceFaqSchema(service.faqs);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://nextleveltow.com" },
    { name: "Services", url: "https://nextleveltow.com/services" },
    {
      name: service.title,
      url: `https://nextleveltow.com/services/${service.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <ServiceDetailHero slug={slug} />
        <ServiceFeatures slug={slug} />
        <ServiceFaq slug={slug} />
        <RelatedServices currentSlug={slug} />
        <CTASection />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
