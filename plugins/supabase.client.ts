import { createClient } from "@supabase/supabase-js";
export type SupabaseType = ReturnType<typeof createClient>;
export default defineNuxtPlugin((nuxtApp) => {
  const supabaseUrl = "https://lsrmukrxkkimweephguw.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzcm11a3J4a2tpbXdlZXBoZ3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MzE1OTAsImV4cCI6MjA1NDAwNzU5MH0.elemLweuza1b7jilXMtSnUmzVgR3sTPj_ed6YpQQF34";

  const supabase: SupabaseType = createClient(supabaseUrl, supabaseKey);

  // Provide it globally as $supabase
  nuxtApp.provide("supabase", supabase);
});
