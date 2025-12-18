import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { signupAction, googleOAuthAction } from "@/app/(auth)/actions";

export default function SignupPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-3xl mb-4">Inizia il tuo percorso</h1>

        <p className="text-muted mb-8">
          Crea un account per accedere a tutte le lezioni e praticare con
          continuità.
        </p>

        {/* Email signup */}
        <form action={signupAction} className="space-y-4 mb-6">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-full border border-border px-4 py-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-full border border-border px-4 py-3"
          />

          <Button>Continua</Button>
        </form>

        {/* Divider */}
        <div className="text-center text-xs text-muted mb-6">oppure</div>

        {/* Google */}
        <form action={googleOAuthAction}>
          <Button variant="secondary">Continua con Google</Button>
        </form>
        <p className="text-sm text-muted mt-6">
          Hai già un account?{" "}
          <Link href="/login" className="underline">
            Accedi
          </Link>
        </p>
      </div>
    </Section>
  );
}
