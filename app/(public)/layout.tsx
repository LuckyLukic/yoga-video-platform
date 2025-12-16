export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="p-4 border-b">
        <nav className="max-w-6xl mx-auto flex gap-4">
          <a href="/">Home</a>
          <a href="/videos">Video</a>
          <a href="/pricing">Pricing</a>
          <a href="/auth/login">Login</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}
