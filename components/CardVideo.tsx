import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  href: string;
  thumbnailUrl?: string | null;
  level?: string | null;
};

export default function VideoCard({ title, href, thumbnailUrl, level }: Props) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-video bg-gray-100">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No preview
          </div>
        )}
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-base font-medium text-gray-800 group-hover:text-primary-600">
          {title}
        </h3>

        {level && <p className="text-xs text-gray-500">Livello: {level}</p>}
      </div>
    </Link>
  );
}
