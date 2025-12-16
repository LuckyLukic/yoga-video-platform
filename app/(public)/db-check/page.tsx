import { createClient } from "@supabase/supabase-js";

export default async function DbCheckPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ bypass RLS
  );

  const { data, error } = await supabase.from("prova").select("*").limit(1);

  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
}
