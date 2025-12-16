import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppHomePage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {user && (
        <p className="text-gray-600">
          Bentornato <strong>{user.email}</strong>
        </p>
      )}

      <section className="grid gap-4 md:grid-cols-2">
        <div className="border rounded p-4">
          <h2 className="font-semibold mb-2">🎥 I tuoi contenuti</h2>
          <p className="text-sm text-gray-600">
            Accedi alla libreria completa delle lezioni.
          </p>
        </div>

        <div className="border rounded p-4">
          <h2 className="font-semibold mb-2">💳 Abbonamento</h2>
          <p className="text-sm text-gray-600">
            Gestisci il tuo piano e i pagamenti.
          </p>
        </div>
      </section>
    </div>
  );
}
