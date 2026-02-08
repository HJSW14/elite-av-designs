"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { posts, type ContentBlock } from "@/data/posts";

export function BlogPostContent({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!post) return null;

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-16 lg:py-24">
      <Container>
        <motion.article
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </motion.article>
      </Container>
    </section>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-6 text-[15px] leading-[1.8] text-[#A39E98]">
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight text-[#E8E4DF] first:mt-0 sm:text-3xl">
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul className="mb-6 space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.7] text-[#A39E98]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#D4844C]" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "tip":
      return (
        <div className="my-8 flex gap-4 rounded-xl border border-[#D4844C]/15 bg-[#D4844C]/[0.04] p-5">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#D4844C]" />
          <p className="text-[14px] leading-[1.7] text-[#A39E98]">
            <span className="font-medium text-[#D4844C]">Pro tip: </span>
            {block.text}
          </p>
        </div>
      );

    default:
      return null;
  }
}
