import { Button } from "@/components/ui/Button";

export function PaywallOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center max-w-sm p-6">
        <h3 className="font-serif text-xl mb-4">
          Contenuto riservato agli abbonati
        </h3>
        <p className="text-muted mb-6">
          Accedi a tutte le lezioni e pratica senza limiti.
        </p>
        <Button href="/pricing">Sblocca con abbonamento</Button>
      </div>
    </div>
  );
}
