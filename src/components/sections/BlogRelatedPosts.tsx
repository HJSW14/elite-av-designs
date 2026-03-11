"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { posts } from "@/data/posts";
import { formatDateShort } from "@/lib/format-date";

export function BlogRelatedPosts({ currentSlug }: { currentSlug: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  // If there are no other posts, show a CTA fallback
  if (related.length === 0) {
    return (
      <section ref={ref} className="bg-[#0a0a0a] py-20 lg:py-28">
        <Container>
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Stay Updated
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
              More articles coming soon
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.7] text-[#888]">
              We are just getting started. Check back for more guides on towing,
              roadside safety, and vehicle care.
            </p>
            <div className="mt-8">
              <Button href="/contact">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                Keep Reading
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-[#ededed] sm:text-3xl">
                More from the blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1.5 text-[13px] font-medium text-[var(--color-accent)] transition-colors hover:text-[#ededed] sm:flex"
            >
              All Articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-[#ededed]/6 bg-[#141414] transition-colors duration-300 hover:border-[var(--color-accent)]/20"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-[#0a0a0a]/70 px-3 py-1 text-[11px] font-medium text-[var(--color-accent)] backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-5">
                  <span className="mb-2 flex items-center gap-1.5 text-[11px] text-[#888]">
                    <Calendar className="h-3 w-3" />
                    {formatDateShort(post.date)}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-[#ededed] transition-colors duration-200 group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-accent)]"
            >
              View All Articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
