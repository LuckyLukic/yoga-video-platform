import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { loginAction, googleOAuthAction } from "@/app/(auth)/actions";

export default function LoginPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-md mx-auto">
        <h1 className="font-serif text-3xl mb-4">Bentornato</h1>

        <p className="text-muted mb-8">Accedi per continuare la tua pratica.</p>

        <form action={loginAction} className="space-y-4 mb-6">
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

          <Button>Accedi</Button>
        </form>

        <div className="text-center text-xs text-muted mb-6">oppure</div>

        <form action={googleOAuthAction}>
          <Button variant="secondary">Accedi con Google</Button>
        </form>

        <p className="text-sm text-muted mt-6">
          Non hai un account?{" "}
          <Link href="/signup" className="underline">
            Registrati
          </Link>
        </p>
      </div>
    </Section>
  );
}
