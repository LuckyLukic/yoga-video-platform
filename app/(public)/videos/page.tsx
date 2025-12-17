import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function VideosPage() {
  const supabase = await createSupabaseServerClient();

  const { data: videos, error } = await supabase
    .from("videos")
    .select("id, title, slug, thumbnail_url")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return <div className="text-red-600">Errore: {error.message}</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Video</h1>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(videos ?? []).map((v) => (
          <li key={v.id} className="border rounded p-3">
            <Link
              className="font-semibold underline"
              href={`/videos/${v.slug}`}
            >
              {v.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
