import Link from "next/link";

export function AppHeader({ isAdmin }: { isAdmin: boolean }) {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/app" className="font-serif text-xl">
          Yoga Space
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/app">Dashboard</Link>
          <Link href="/app/videos">Video</Link>

          {isAdmin && (
            <Link href="/app/admin/videos" className="font-medium text-primary">
              Admin
            </Link>
          )}

          <Link href="/auth/logout" className="text-muted">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}
