import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { togglePublishAction, updateVideoAction } from "../actions";

export default async function AdminEditVideoPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createSupabaseServerClient();

  const { data: video, error } = await supabase
    .from("videos")
    .select(
      "id,title,slug,description,vimeo_video_id,thumbnail_url,is_published,created_at,updated_at"
    )
    .eq("id", params.id)
    .single();

  if (error || !video) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-xl font-semibold">Video non trovato</h1>
        <p className="mt-4 text-red-600">
          {error?.message ?? "Missing record"}
        </p>
        <Link className="underline mt-4 inline-block" href="/app/admin/videos">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold">Modifica video</h1>
        <Link className="underline" href="/app/admin/videos">
          ← Back
        </Link>
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm">
        <span>Stato:</span>
        <span>
          {video.is_published ? "✅ Pubblicato" : "⛔️ Non pubblicato"}
        </span>
        <form
          action={async () => {
            "use server";
            await togglePublishAction(video.id, !video.is_published);
          }}
        >
          <button className="ml-2 px-2 py-1 rounded border hover:bg-gray-50">
            {video.is_published ? "Unpublish" : "Publish"}
          </button>
        </form>
        <Link className="ml-auto underline" href={`/videos/${video.slug}`}>
          Apri public
        </Link>
      </div>

      <form
        action={async (fd) => {
          "use server";
          await updateVideoAction(video.id, fd);
        }}
        className="mt-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Titolo</label>
          <input
            name="title"
            required
            defaultValue={video.title}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input
            name="slug"
            required
            defaultValue={video.slug}
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descrizione</label>
          <textarea
            name="description"
            defaultValue={video.description ?? ""}
            className="mt-1 w-full rounded-md border p-2"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Vimeo video id</label>
            <input
              name="vimeo_video_id"
              defaultValue={video.vimeo_video_id ?? ""}
              className="mt-1 w-full rounded-md border p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Thumbnail URL</label>
            <input
              name="thumbnail_url"
              defaultValue={video.thumbnail_url ?? ""}
              className="mt-1 w-full rounded-md border p-2"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="is_published"
            defaultChecked={!!video.is_published}
          />
          Pubblicato
        </label>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">
            Salva
          </button>
          <Link
            className="px-4 py-2 rounded-md border hover:bg-gray-50"
            href="/app/admin/videos"
          >
            Annulla
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          created_at: {String(video.created_at)} · updated_at:{" "}
          {String(video.updated_at)}
        </p>
      </form>
    </div>
  );
}
