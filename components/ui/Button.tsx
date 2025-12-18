import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
}) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
    {
      "bg-primary text-white hover:opacity-90": variant === "primary",
      "bg-secondary text-text hover:opacity-90": variant === "secondary",
      "bg-transparent text-text hover:bg-surface": variant === "ghost",
    }
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
