import { Section } from "@/components/ui/Section";
import { VideoCard } from "@/components/VideoCard";

const MOCK_VIDEOS = [
  {
    title: "Risveglio dolce",
    slug: "risveglio-dolce",
    duration: "15 min",
    isFree: true,
  },
  {
    title: "Yoga serale rilassante",
    slug: "yoga-serale",
    duration: "30 min",
  },
  {
    title: "Mobilità per la schiena",
    slug: "mobilita-schiena",
    duration: "20 min",
  },
];

export default function VideosPage() {
  return (
    <Section>
      <h1 className="font-serif text-3xl mb-8">Video</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.slug} {...video} />
        ))}
      </div>
    </Section>
  );
}
