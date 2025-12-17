"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    await supabase.auth.signUp({
      email,
      password,
    });
    window.location.href = "/app";
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Signup</h1>

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

      <button onClick={signUp} className="border px-4 py-2">
        Crea account
      </button>
    </div>
  );
}
