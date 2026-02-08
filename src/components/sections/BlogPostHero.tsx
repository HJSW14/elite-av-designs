"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { posts } from "@/data/posts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostHero({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0C0C0C]">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-[#0C0C0C]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent" />
      </div>

      <Container className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            className="mb-8 flex items-center gap-1.5 text-[12px] text-[#7A7570]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/blog"
              className="transition-colors hover:text-[#E8E4DF]"
            >
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#D4844C] line-clamp-1">{post.title}</span>
          </motion.nav>

          {/* Category badge */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="rounded-full bg-[#D4844C]/10 px-3.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D4844C]">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#E8E4DF] sm:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-[#7A7570]"
          >
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#D4844C]" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#D4844C]" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#D4844C]" />
              {post.readTime} min read
            </span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 copper-divider" />
    </section>
  );
}
