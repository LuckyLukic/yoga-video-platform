import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function sitemap() {
  const supabase = await createSupabaseServerClient();

  const { data: videos } = await supabase
    .from("videos")
    .select("slug, updated_at")
    .eq("is_published", true);

  const videoUrls =
    videos?.map((v) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/videos/${v.slug}`,
      lastModified: v.updated_at ?? undefined,
    })) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/videos`,
    },
    ...videoUrls,
  ];
}
