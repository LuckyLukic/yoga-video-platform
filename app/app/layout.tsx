export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 border-b bg-gray-50">
        <nav className="max-w-6xl mx-auto flex gap-4">
          <a href="/app">Dashboard</a>
          <a href="/app/videos">I miei video</a>
          <a href="/auth/logout">Logout</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}
