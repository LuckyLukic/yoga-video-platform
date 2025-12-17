/* import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isAdmin = false;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    isAdmin = profile?.role === "admin";
  }

  return (
    <>
      <header className="p-4 border-b bg-gray-50">
        <nav className="max-w-6xl mx-auto flex gap-4">
          <Link href="/app">Dashboard</Link>
          <Link href="/app/videos">I miei video</Link>

          {isAdmin && <Link href="/app/admin/videos">Admin</Link>}

          <Link href="/auth/logout">Logout</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">{children}</main>
    </>
  );
}
 */

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") redirect("/app");

  return <>{children}</>;
}
