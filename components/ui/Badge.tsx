import type { ReactNode } from "react";

type BadgeVariant = "default" | "accent";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";

  const variants = {
    default: "bg-secondary text-text",
    accent: "bg-accent text-text",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
