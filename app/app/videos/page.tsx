import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function MyVideosPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Per ora: mostra i pubblicati. In futuro: “entitlements / progress / favorites”.
  const { data: videos } = await supabase
    .from("videos")
    .select("id, title, slug")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">I miei video</h1>
      <ul className="space-y-2">
        {(videos ?? []).map((v) => (
          <li key={v.id}>
            <Link className="underline" href={`/videos/${v.slug}`}>
              {v.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
