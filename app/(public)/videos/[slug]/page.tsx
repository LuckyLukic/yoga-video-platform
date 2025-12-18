import { Section } from "@/components/ui/Section";
import { PaywallOverlay } from "@/components/PaywallOverlay";

const MOCK_VIDEO = {
  title: "Yoga serale rilassante",
  duration: "30 min",
  description:
    "Una pratica dolce per rilassare corpo e mente prima di dormire.",
  isAccessible: false, // ← simuliamo utente NON abbonato
};

export default function VideoPage() {
  const { title, duration, description, isAccessible } = MOCK_VIDEO;

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        {/* Player */}
        <div className="relative mb-8">
          <div className="aspect-video bg-border rounded-xl overflow-hidden">
            {/* Vimeo embed in futuro */}
          </div>

          {!isAccessible && <PaywallOverlay />}
        </div>

        {/* Meta */}
        <h1 className="font-serif text-3xl mb-2">{title}</h1>
        <p className="text-muted mb-4">{duration}</p>

        <p className="text-muted max-w-2xl">{description}</p>
      </div>
    </Section>
  );
}
