import { createBrowserClient } from "@supabase/ssr";

export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // preferisci publishable key se presente, altrimenti anon
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
