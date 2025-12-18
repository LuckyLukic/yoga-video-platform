import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-800">
          Yoga Platform
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/videos"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Video
          </Link>

          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Login
          </Link>

          <Link href="/signup">
            <Button>Inizia ora</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
