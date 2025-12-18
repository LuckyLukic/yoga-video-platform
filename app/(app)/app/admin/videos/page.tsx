import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminVideosPage() {
  const videos: any[] = []; // per ora vuoto

  return (
    <div className="space-y-8">
      {/* Header sezione */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl mb-1">Video</h1>
          <p className="text-sm text-muted">
            Gestisci i contenuti pubblicati sulla piattaforma
          </p>
        </div>

        <Button href="/app/admin/videos/new">+ Nuovo video</Button>
      </div>

      {/* Contenuto */}
      <Card className="p-6">
        {videos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted mb-4">Nessun video ancora.</p>

            <p className="text-sm text-muted mb-6">
              Inizia creando il primo contenuto per i tuoi utenti.
            </p>

            <Button href="/app/admin/videos/new" variant="secondary">
              Crea il primo video
            </Button>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-muted border-b">
              <tr>
                <th className="py-2 text-left">Titolo</th>
                <th className="py-2 text-left">Slug</th>
                <th className="py-2 text-left">Stato</th>
                <th className="py-2 text-right">Azioni</th>
              </tr>
            </thead>

            <tbody>{/* rows */}</tbody>
          </table>
        )}
      </Card>
    </div>
  );
}
