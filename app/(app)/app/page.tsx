import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function AppHomePage() {
  return (
    <Section className="pt-32">
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl mb-4">Bentornato</h1>

        <p className="text-muted mb-8">
          Questo è il tuo spazio. Prenditi il tempo che ti serve e scegli la
          pratica giusta per oggi.
        </p>

        <Button href="/app/videos">Vai ai video</Button>
      </div>
    </Section>
  );
}
