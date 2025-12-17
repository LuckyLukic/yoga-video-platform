import Link from "next/link";

export default function SubscribeCTA() {
  return (
    <div className="border rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold mb-2">
        Contenuto riservato agli iscritti
      </h2>
      <p className="mb-4">Abbonati per accedere a tutti i video di yoga.</p>
      <Link
        href="/pricing"
        className="inline-block bg-black text-white px-4 py-2 rounded"
      >
        Abbonati ora
      </Link>
    </div>
  );
}
