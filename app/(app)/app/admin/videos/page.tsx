import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { togglePublishAction } from "./actions";

export default async function AdminVideosPage() {
  const supabase = await createSupabaseServerClient();

  const { data: videos, error } = await supabase
    .from("videos")
    .select("id,title,slug,is_published,updated_at,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-xl font-semibold">Admin · Videos</h1>
        <p className="mt-4 text-red-600">Errore: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold">Admin · Videos</h1>
        <Link
          href="/app/admin/videos/new"
          className="px-3 py-2 rounded-md border hover:bg-gray-50"
        >
          + Nuovo video
        </Link>
      </div>

      <div className="mt-6 border rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-gray-50 text-sm font-medium">
          <div className="col-span-5">Titolo</div>
          <div className="col-span-4">Slug</div>
          <div className="col-span-1">Stato</div>
          <div className="col-span-2 text-right">Azioni</div>
        </div>

        <div className="divide-y">
          {videos?.map((v) => (
            <div
              key={v.id}
              className="grid grid-cols-12 gap-2 px-4 py-3 items-center"
            >
              <div className="col-span-5">
                <Link className="underline" href={`/app/admin/videos/${v.id}`}>
                  {v.title}
                </Link>
              </div>
              <div className="col-span-4 text-sm text-gray-600">/{v.slug}</div>
              <div className="col-span-1 text-sm">
                {v.is_published ? "✅" : "⛔️"}
              </div>
              <div className="col-span-2 flex justify-end gap-2">
                <form
                  action={async () => {
                    "use server";
                    await togglePublishAction(v.id, !v.is_published);
                  }}
                >
                  <button className="px-2 py-1 rounded border text-sm hover:bg-gray-50">
                    {v.is_published ? "Unpublish" : "Publish"}
                  </button>
                </form>
                <Link
                  href={`/videos/${v.slug}`}
                  className="px-2 py-1 rounded border text-sm hover:bg-gray-50"
                >
                  Public
                </Link>
              </div>
            </div>
          ))}

          {(!videos || videos.length === 0) && (
            <div className="px-4 py-8 text-sm text-gray-600">
              Nessun video ancora. Crea il primo con “Nuovo video”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
