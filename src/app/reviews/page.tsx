import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { ReviewsHero } from "@/components/sections/ReviewsHero";
import { ReviewsContent } from "@/components/sections/ReviewsContent";
import { company } from "@/data/company";
import { reviewsPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: `Customer Reviews | ${company.name}`,
  description: `See what Sacramento-area customers say about Next Level Towing. ${company.rating}-star rated. Real feedback from real people.`,
  alternates: {
    canonical: "https://nextleveltow.com/reviews",
  },
  openGraph: {
    title: `Customer Reviews | ${company.name}`,
    description: `${company.rating}/5 star rated. Customer feedback from Sacramento, Elk Grove, Folsom, and Roseville.`,
    url: "https://nextleveltow.com/reviews",
  },
};

export default function ReviewsPage() {
  const schema = reviewsPageSchema();
  return (
    <>
      {schema && (
        <Script
          id="reviews-page-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Header />
      <main>
        <ReviewsHero />
        <ReviewsContent />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
