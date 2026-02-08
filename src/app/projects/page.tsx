import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsHero } from "@/components/sections/ProjectsHero";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import { projectCollectionSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Our Projects | Home Theater & AV Installations in Denver, CO",
  description:
    "Browse our portfolio of custom home theater builds, Control4 smart home installations, motorized shade projects, and surveillance systems across Denver, Parker, Highlands Ranch, and Castle Rock.",
  alternates: {
    canonical: "https://eliteavdesigns.com/projects",
  },
  openGraph: {
    title: "Our Projects | Elite AV Designs Denver",
    description:
      "Custom home theater, automation, and AV installation portfolio from Denver's premier integrator.",
    url: "https://eliteavdesigns.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Elite AV Designs Denver",
    description:
      "Custom home theater, automation, and AV installation portfolio from Denver's premier integrator.",
  },
};

export default function ProjectsPage() {
  const schema = projectCollectionSchema(projects);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Projects", url: "https://eliteavdesigns.com/projects" },
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
        <ProjectsHero />
        <ProjectsGallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
