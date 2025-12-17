import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppNav() {
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
    <nav className="flex gap-4">
      <Link href="/app">Dashboard</Link>
      <Link href="/app/videos">I miei video</Link>
      {isAdmin && <Link href="/app/admin/videos">Admin</Link>}
      <Link href="/auth/logout">Logout</Link>
    </nav>
  );
}
