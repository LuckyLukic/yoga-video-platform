import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Pratica yoga, ovunque tu sia
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Lezioni guidate per ritrovare equilibrio, forza e calma nella tua
            quotidianità.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/videos">
              <Button>Scopri i video</Button>
            </Link>

            <Link href="/signup">
              <Button variant="secondary">Inizia ora</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
