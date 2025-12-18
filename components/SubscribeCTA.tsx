import Button from "./ui/Button";

export default function SubscribeCTA() {
  return (
    <div className="rounded-xl bg-accent-100 p-8 text-center">
      <h2 className="text-xl font-semibold text-gray-800">
        Sblocca tutti i video
      </h2>

      <p className="mt-2 text-gray-600">
        Accedi a tutte le lezioni e pratica quando vuoi.
      </p>

      <div className="mt-6">
        <Button>Abbonati</Button>
      </div>
    </div>
  );
}
