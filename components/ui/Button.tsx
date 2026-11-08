import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-bronze text-white hover:bg-bronze-light border border-bronze shadow-[0_10px_24px_-8px_rgba(200,30,44,0.55)] hover:shadow-[0_14px_30px_-8px_rgba(200,30,44,0.65)]",
  secondary:
    "bg-transparent text-ivory border border-ivory/25 hover:border-bronze hover:text-bronze-light",
  "ghost-light":
    "bg-transparent text-ink border border-paper-line hover:border-bronze hover:text-bronze",
  "ghost-dark":
    "bg-transparent text-ivory border border-ink-line hover:border-bronze hover:text-bronze-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wideish transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
