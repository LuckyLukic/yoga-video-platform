import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function AdminHomePage() {
  return (
    <Section className="pt-24">
      <h1 className="font-serif text-2xl mb-6">Area Admin</h1>

      <div className="flex gap-4">
        <Button href="/app/admin/videos">Gestisci video</Button>

        <Button variant="secondary" href="/app">
          Torna all’area utente
        </Button>
      </div>
    </Section>
  );
}
