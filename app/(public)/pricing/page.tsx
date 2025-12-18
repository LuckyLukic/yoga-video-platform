import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-serif text-4xl mb-4">Pratica senza limiti</h1>

        <p className="text-muted mb-12">
          Accesso completo a tutte le lezioni di yoga e meditazione. Un unico
          abbonamento, senza vincoli.
        </p>

        <Card className="p-10">
          <h2 className="font-serif text-2xl mb-4">Abbonamento completo</h2>

          <p className="text-muted mb-6">
            Tutti i contenuti, presenti e futuri.
          </p>

          <div className="mb-8">
            <div className="text-3xl font-serif">
              €19
              <span className="text-base text-muted"> / mese</span>
            </div>

            <div className="text-sm text-muted mt-2">
              oppure €180 / anno (2 mesi risparmiati)
            </div>
          </div>

          <Button href="/signup">Inizia il tuo percorso</Button>

          <p className="text-xs text-muted mt-6">
            Disdici in qualsiasi momento. Nessun impegno.
          </p>
        </Card>
      </div>
    </Section>
  );
}
