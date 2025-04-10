import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eldglheibpfcfzpjfxbh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZGdsaGVpYnBmY2Z6cGpmeGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDE0MjQsImV4cCI6MjA1OTc3NzQyNH0.I9eZbtzCi4A6aU-MZrJqvzs1ofkoclvA1BH4wDDIEqk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
