type Props = {
  embedUrl: string;
};

export default function VideoPlayer({ embedUrl }: Props) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded">
      <iframe
        src={embedUrl}
        className="w-full h-full"
        loading="lazy"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
