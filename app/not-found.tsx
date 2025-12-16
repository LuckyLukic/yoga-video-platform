export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Pagina non trovata</h1>
      <p className="mt-2 text-gray-600">
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      <a className="mt-6 inline-block underline" href="/">
        Torna alla home
      </a>
    </main>
  );
}
