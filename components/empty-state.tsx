export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded border p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      {description ? <p className="mt-2 text-gray-600">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
