import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AppHeader } from "@/components/AppHeader";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  let isAdmin = false;

  if (data.user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    isAdmin = profile?.role === "admin";
  }

  return (
    <>
      <AppHeader isAdmin={isAdmin} />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
      </main>
    </>
  );
}
