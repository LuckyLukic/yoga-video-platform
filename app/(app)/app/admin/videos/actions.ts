"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createVideoAction(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const title = String(formData.get("title") ?? "").trim();
  const slugRaw = String(formData.get("slug") ?? "").trim();
  const slug = slugRaw ? slugify(slugRaw) : slugify(title);

  const description = String(formData.get("description") ?? "").trim() || null;
  const vimeo_video_id =
    String(formData.get("vimeo_video_id") ?? "").trim() || null;
  const thumbnail_url =
    String(formData.get("thumbnail_url") ?? "").trim() || null;
  const is_published = formData.get("is_published") === "on";

  if (!title) throw new Error("Titolo obbligatorio");
  if (!slug) throw new Error("Slug obbligatorio");

  const { data, error } = await supabase
    .from("videos")
    .insert({
      title,
      slug,
      description,
      vimeo_video_id,
      thumbnail_url,
      is_published,
    })
    .select("id")
    .single();

  if (error) throw error;

  revalidatePath("/app/admin/videos");
  redirect(`/app/admin/videos/${data.id}`);
}

export async function updateVideoAction(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const title = String(formData.get("title") ?? "").trim();
  const slugRaw = String(formData.get("slug") ?? "").trim();
  const slug = slugRaw ? slugify(slugRaw) : slugify(title);

  const description = String(formData.get("description") ?? "").trim() || null;
  const vimeo_video_id =
    String(formData.get("vimeo_video_id") ?? "").trim() || null;
  const thumbnail_url =
    String(formData.get("thumbnail_url") ?? "").trim() || null;
  const is_published = formData.get("is_published") === "on";

  if (!title) throw new Error("Titolo obbligatorio");
  if (!slug) throw new Error("Slug obbligatorio");

  const { error } = await supabase
    .from("videos")
    .update({
      title,
      slug,
      description,
      vimeo_video_id,
      thumbnail_url,
      is_published,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/app/admin/videos");
  revalidatePath(`/app/admin/videos/${id}`);
  revalidatePath(`/videos/${slug}`);
}

export async function togglePublishAction(id: string, nextValue: boolean) {
  const supabase = await createSupabaseServerClient();

  if (nextValue) {
    const { data: video, error } = await supabase
      .from("videos")
      .select("title, slug, vimeo_video_id")
      .eq("id", id)
      .single();

    if (error) throw error;

    if (!video.title || !video.slug || !video.vimeo_video_id) {
      throw new Error(
        "Video incompleto: titolo, slug e Vimeo ID sono obbligatori per la pubblicazione"
      );
    }
  }

  const { error } = await supabase
    .from("videos")
    .update({
      is_published: nextValue,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/app/admin/videos");
  revalidatePath(`/app/admin/videos/${id}`);
}
