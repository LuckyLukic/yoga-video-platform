"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Si è verificato un errore</h1>
      <p className="mt-2 text-gray-600">
        Riprova tra poco. Se il problema persiste, contatta il supporto.
      </p>

      <button className="mt-6 rounded border px-4 py-2" onClick={() => reset()}>
        Riprova
      </button>
    </main>
  );
}
