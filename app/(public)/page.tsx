import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function PublicHomePage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-32">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Il tuo spazio per praticare,
            <br />
            ovunque tu sia
          </h1>

          <p className="text-muted text-lg mb-8">
            Video di yoga e meditazione guidati da insegnanti esperti. Un
            percorso di benessere, con calma e consapevolezza.
          </p>

          <Button href="/signup">Inizia il tuo percorso</Button>
        </div>
      </Section>

      {/* VALUE */}
      <Section className="bg-surface">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h3 className="font-serif text-xl mb-3">Pratica consapevole</h3>
            <p className="text-muted">
              Sessioni pensate per accompagnarti, senza fretta.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="font-serif text-xl mb-3">Insegnanti qualificati</h3>
            <p className="text-muted">
              Un metodo chiaro, accessibile e rispettoso del corpo.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="font-serif text-xl mb-3">Ovunque, quando vuoi</h3>
            <p className="text-muted">Da casa, in viaggio, nei tuoi tempi.</p>
          </Card>
        </div>
      </Section>

      {/* PREVIEW */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl mb-4">Scopri il catalogo</h2>

          <p className="text-muted mb-6">
            Lezioni di yoga, meditazione e mobilità, organizzate per livello e
            durata.
          </p>

          <Button href="/videos" variant="ghost">
            Vai ai video
          </Button>
        </div>
      </Section>
    </>
  );
}
