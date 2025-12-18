export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-surface border border-border shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
