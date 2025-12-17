"use client";

export default function VideoPlayer({ embedUrl }: { embedUrl: string }) {
  return (
    <div className="aspect-video">
      <iframe
        src={embedUrl}
        className="w-full h-full rounded-lg"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
