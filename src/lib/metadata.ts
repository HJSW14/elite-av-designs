import type { Metadata } from "next";
import { company } from "@/data/company";

const SITE_URL = "https://eliteavdesigns.com";

export function buildMetadata(overrides: Partial<Metadata> & { path?: string } = {}): Metadata {
  const { path = "", ...rest } = overrides;
  const url = `${SITE_URL}${path}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: rest.title,
    description: rest.description ?? company.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: company.name,
      title: (rest.title as string) ?? company.name,
      description: rest.description ?? company.description,
      ...(rest.openGraph ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title: (rest.title as string) ?? company.name,
      description: rest.description ?? company.description,
      ...(rest.twitter ?? {}),
    },
    alternates: { canonical: url },
    ...rest,
  };
}
