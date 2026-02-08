"use client";

import { cn } from "@/lib/cn";
import { AnimatedReveal } from "./AnimatedReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedReveal>
      <div
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "text-center",
          className
        )}
      >
        {eyebrow && (
          <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.25em] text-[#D4844C]">
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            dark ? "text-[#E8E4DF]" : "text-[#1A1A18]"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-[15px] leading-[1.7]",
              align === "center" && "mx-auto",
              dark ? "text-[#7A7570]" : "text-[#7A7570]"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </AnimatedReveal>
  );
}
