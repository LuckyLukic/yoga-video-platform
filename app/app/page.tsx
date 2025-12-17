import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Benvenuto nella tua area personale.</p>
    </div>
  );
}
