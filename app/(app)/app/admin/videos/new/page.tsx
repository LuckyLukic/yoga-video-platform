import Link from "next/link";
import { createVideoAction } from "../actions";

export default function AdminNewVideoPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Nuovo video</h1>
        <Link className="underline" href="/app/admin/videos">
          ← Back
        </Link>
      </div>

      <form action={createVideoAction} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Titolo</label>
          <input
            name="title"
            required
            className="mt-1 w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slug (opzionale)</label>
          <input
            name="slug"
            className="mt-1 w-full rounded-md border p-2"
            placeholder="es: yoga-mattina-10min"
          />
          <p className="mt-1 text-xs text-gray-600">
            Se vuoto, lo generiamo dal titolo.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium">Descrizione</label>
          <textarea
            name="description"
            className="mt-1 w-full rounded-md border p-2"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Vimeo video id</label>
            <input
              name="vimeo_video_id"
              className="mt-1 w-full rounded-md border p-2"
              placeholder="es: 123456789"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Thumbnail URL</label>
            <input
              name="thumbnail_url"
              className="mt-1 w-full rounded-md border p-2"
              placeholder="https://..."
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="is_published" />
          Pubblicato
        </label>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">
            Crea
          </button>
          <Link
            className="px-4 py-2 rounded-md border hover:bg-gray-50"
            href="/app/admin/videos"
          >
            Annulla
          </Link>
        </div>
      </form>
    </div>
  );
}
