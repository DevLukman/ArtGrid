import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eldglheibpfcfzpjfxbh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZGdsaGVpYnBmY2Z6cGpmeGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDIwMTQyNCwiZXhwIjoyMDU5Nzc3NDI0fQ.nqRliVAOuJu0QoR9V6Laik9_QJWQh5CuTtlWdQyiZ8c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
