import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "./ui/Badge";

type VideoCardProps = {
  title: string;
  slug: string;
  duration: string;
  isFree?: boolean;
};

export function VideoCard({
  title,
  slug,
  duration,
  isFree = false,
}: VideoCardProps) {
  return (
    <Link href={`/videos/${slug}`}>
      <Card className="overflow-hidden hover:shadow-md transition">
        {/* Thumbnail placeholder */}
        <div className="aspect-video bg-border" />

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted">{duration}</span>
            {!isFree && <Badge>Solo abbonati</Badge>}
            {isFree && <Badge variant="accent">Free</Badge>}
          </div>

          <h3 className="font-serif text-lg leading-snug">{title}</h3>
        </div>
      </Card>
    </Link>
  );
}
