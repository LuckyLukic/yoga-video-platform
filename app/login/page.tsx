"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else window.location.href = "/app";
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/app`,
      },
    });
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-600">{error}</p>}

      <button onClick={signInWithEmail} className="border px-4 py-2">
        Login
      </button>

      <button onClick={signInWithGoogle} className="border px-4 py-2">
        Login con Google
      </button>

      <div className="text-center text-sm text-gray-600">
        Non hai un account?{" "}
        <a href="/auth/signup" className="underline">
          Registrati
        </a>
      </div>
    </div>
  );
}
