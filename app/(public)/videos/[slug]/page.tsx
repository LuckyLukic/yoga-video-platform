export const revalidate = 60;

import { createSupabaseServerClient } from "@/lib/supabase/server";
import VideoPlayer from "@/components/VideoPlayer";
import SubscribeCTA from "@/components/SubscribeCTA";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ============================
   SEO — Metadata dinamici
============================ */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = await createSupabaseServerClient();

  const { data: video } = await supabase
    .from("videos")
    .select("title, description, thumbnail_url, is_published")
    .eq("slug", params.slug)
    .single();

  if (!video || !video.is_published) {
    return {
      title: "Video non trovato",
    };
  }

  return {
    title: `${video.title} | Yoga Platform`,
    description: video.description ?? undefined,
    openGraph: {
      title: video.title,
      description: video.description ?? undefined,
      images: video.thumbnail_url ? [video.thumbnail_url] : [],
    },
  };
}

/* ============================
   Page
============================ */
export default async function VideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createSupabaseServerClient();

  const { data: video } = await supabase
    .from("videos")
    .select(
      `
        id,
        title,
        description,
        vimeo_embed_url,
        is_published
      `
    )
    .eq("slug", params.slug)
    .single();

  if (!video || !video.is_published) notFound();

  // TODO: FASE 3 → sostituire con vero entitlement
  const hasAccess = false;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">{video.title}</h1>

      {video.description && (
        <p className="text-gray-600">{video.description}</p>
      )}

      {hasAccess ? (
        <VideoPlayer embedUrl={video.vimeo_embed_url!} />
      ) : (
        <SubscribeCTA />
      )}
    </div>
  );
}
