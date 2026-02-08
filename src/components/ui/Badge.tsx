import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gold";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-white/10 text-white",
        variant === "outline" && "border border-[#e5e5e3] text-[#6b6b6b]",
        variant === "gold" && "bg-[#c8a55a]/10 text-[#c8a55a]",
        className
      )}
    >
      {children}
    </span>
  );
}
