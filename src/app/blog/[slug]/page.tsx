import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogPostHero } from "@/components/sections/BlogPostHero";
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { BlogRelatedPosts } from "@/components/sections/BlogRelatedPosts";
import { CTASection } from "@/components/sections/CTASection";
import { posts } from "@/data/posts";
import { blogPostSchema, breadcrumbSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Elite AV Designs Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://eliteavdesigns.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Elite AV Designs`,
      description: post.excerpt,
      url: `https://eliteavdesigns.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const schema = blogPostSchema({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image: post.image,
    author: post.author,
    date: post.date,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://eliteavdesigns.com" },
    { name: "Blog", url: "https://eliteavdesigns.com/blog" },
    {
      name: post.title,
      url: `https://eliteavdesigns.com/blog/${post.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main>
        <BlogPostHero slug={slug} />
        <BlogPostContent slug={slug} />
        <BlogRelatedPosts currentSlug={slug} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
