import Link from "next/link";
import { Button } from "@/components/ui/Button";

type HeaderProps = {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
};

export function Header({
  isAuthenticated = false,
  isAdmin = false,
}: HeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl">
          Yoga Space
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/videos">Video</Link>
          <Link href="/pricing">Prezzi</Link>
          {isAdmin && <Link href="/app/admin">Admin</Link>}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link href="/login" className="text-sm">
                Accedi
              </Link>
              <Button href="/signup">Inizia</Button>
            </>
          ) : (
            <>
              <Link href="/app" className="text-sm">
                Area personale
              </Link>
              <Link href="/auth/logout" className="text-sm text-muted">
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
