import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("mx-auto min-w-0 w-full max-w-7xl px-4 sm:px-8 lg:px-12", className)}>
      {children}
    </Component>
  );
}
