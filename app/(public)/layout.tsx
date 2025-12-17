import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 border-b bg-gray-50">
        <nav className="max-w-6xl mx-auto flex gap-4">
          <Link href="/app">Dashboard</Link>
          <Link href="/app/videos">I miei video</Link>
          <Link href="/auth/logout">Logout</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}
