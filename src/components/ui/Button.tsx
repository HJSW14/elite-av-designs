import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/15",
  secondary:
    "bg-[#ededed]/8 text-[#ededed] hover:bg-[#ededed]/12 border border-[#ededed]/10",
  ghost: "text-[#888] hover:text-[#ededed] hover:bg-[#ededed]/5",
  outline:
    "border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "min-h-[44px] px-4 py-2.5 text-[13px]",
  md: "min-h-[44px] px-5 py-2.5 text-[13px] sm:text-[14px]",
  lg: "min-h-[48px] px-7 py-3.5 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer whitespace-normal sm:whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
