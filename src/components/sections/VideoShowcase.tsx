"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface VideoShowcaseProps {
  title: string;
  description: string;
  videoId?: string; // YouTube video ID
  placeholderImage?: string;
}

export function VideoShowcase({
  title,
  description,
  videoId,
  placeholderImage = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
}: VideoShowcaseProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0C0C0C] py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            Video
          </span>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#E8E4DF] sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-[1.7] text-[#7A7570]">
            {description}
          </p>

          {/* Video player or placeholder */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#E8E4DF]/[0.04]">
            {videoId ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${placeholderImage})` }}
              >
                <div className="absolute inset-0 bg-[#0C0C0C]/60 backdrop-blur-[2px] transition-all hover:bg-[#0C0C0C]/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4844C] bg-[#D4844C]/10 backdrop-blur-sm transition-all hover:bg-[#D4844C]/20">
                    <Play className="h-8 w-8 translate-x-0.5 text-[#D4844C]" />
                  </div>
                  <p className="text-sm font-medium text-[#E8E4DF]">
                    Video Coming Soon
                  </p>
                  <p className="mt-1 text-xs text-[#7A7570]">
                    Contact us for a live demo
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
