import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetailHero } from "@/components/sections/ProjectDetailHero";
import { ProjectDetailContent } from "@/components/sections/ProjectDetailContent";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";
import { company } from "@/data/company";
import { breadcrumbSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${project.category} Project in ${project.location}`,
    description: `${project.description.slice(0, 155)}... View this ${project.category.toLowerCase()} installation by ${company.name}.`,
    alternates: {
      canonical: `https://eliteavdesigns.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${company.name}`,
      description: project.description.slice(0, 155),
      url: `https://eliteavdesigns.com/projects/${project.slug}`,
      images: [{ url: project.image, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${company.name}`,
      description: project.description.slice(0, 155),
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Projects", url: "https://eliteavdesigns.com/projects" },
    {
      name: project.title,
      url: `https://eliteavdesigns.com/projects/${project.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <ProjectDetailHero slug={slug} />
        <ProjectDetailContent slug={slug} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
