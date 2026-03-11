"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { posts, type BlogPost } from "@/data/posts";
import { formatDateFull } from "@/lib/format-date";

export function BlogGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 lg:py-24">
      <Container>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </motion.div>

        {posts.length === 0 && (
          <p className="text-center text-[15px] text-[#888]">
            No posts yet. Check back soon.
          </p>
        )}
      </Container>
    </section>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#ededed]/6 bg-[#141414] transition-colors duration-300 hover:border-[var(--color-accent)]/20"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 rounded-full bg-[#0a0a0a]/70 px-3 py-1 text-[11px] font-medium text-[var(--color-accent)] backdrop-blur-sm">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Meta */}
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#888]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {formatDateFull(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readTime} min read
            </span>
          </div>

          <h3 className="min-w-0 break-words text-lg font-semibold leading-snug text-[#ededed] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            {post.title}
          </h3>

          <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#888] line-clamp-3">
            {post.excerpt}
          </p>

          <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1">
            Read Article <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
