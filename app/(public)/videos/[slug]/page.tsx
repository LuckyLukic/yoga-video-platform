import { createSupabaseServerClient } from "@/lib/supabase/server";
import VideoPlayer from "@/components/VideoPlayer";
import SubscribeCTA from "@/components/SubscribeCTA";
import { notFound } from "next/navigation";

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
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <p className="mb-6">{video.description}</p>

      {hasAccess ? (
        <VideoPlayer embedUrl={video.vimeo_embed_url!} />
      ) : (
        <SubscribeCTA />
      )}
    </div>
  );
}
