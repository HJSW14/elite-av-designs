import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function NextLevelLogo({ className, imageClassName, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Next Level Towing Home"
    >
      <Image
        src="/NLTow_Logo.png"
        alt="Next Level Towing"
        width={1018}
        height={133}
        sizes="(max-width: 640px) 45vw, 320px"
        className={cn("w-auto max-w-full object-contain", imageClassName)}
        priority={priority}
      />
    </Link>
  );
}
