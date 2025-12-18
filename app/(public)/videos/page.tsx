export const revalidate = 60;

import { createSupabaseServerClient } from "@/lib/supabase/server";
import VideoCard from "@/components/CardVideo";

type SearchParams = {
  q?: string;
  level?: string;
  maxDuration?: string;
  tag?: string;
};

export default async function VideosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const supabase = await createSupabaseServerClient();

  let query = supabase
    .from("videos")
    .select("id,title,slug,thumbnail_url,level,duration_minutes,tags")
    .eq("is_published", true);

  if (searchParams.q) {
    query = query.textSearch("search_vector", searchParams.q, {
      type: "websearch",
    });
  }

  if (searchParams.level) {
    query = query.eq("level", searchParams.level);
  }

  if (searchParams.maxDuration) {
    query = query.lte("duration_minutes", Number(searchParams.maxDuration));
  }

  if (searchParams.tag) {
    query = query.contains("tags", [searchParams.tag]);
  }

  const { data: videos } = await query.order("created_at", {
    ascending: false,
  });

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-8">
        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-gray-800">Video Yoga</h1>

        {/* FILTER BAR */}
        <form className="flex flex-wrap gap-3 bg-gray-50 p-4 rounded-lg">
          <input
            type="text"
            name="q"
            placeholder="Cerca..."
            defaultValue={searchParams.q}
            className="w-full sm:w-auto flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />

          <select
            name="level"
            defaultValue={searchParams.level}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Livello</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select
            name="maxDuration"
            defaultValue={searchParams.maxDuration}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Durata max</option>
            <option value="10">≤ 10 min</option>
            <option value="20">≤ 20 min</option>
            <option value="30">≤ 30 min</option>
          </select>

          <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
            Filtra
          </button>
        </form>

        {/* RESULTS */}
        {videos && videos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <VideoCard
                key={v.id}
                title={v.title}
                href={`/videos/${v.slug}`}
                thumbnailUrl={v.thumbnail_url}
                level={v.level}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            Nessuna lezione disponibile al momento. Torna presto 🌿
          </p>
        )}
      </main>
    </>
  );
}
