import type { SupabaseType } from "~/plugins/supabase.client";

export const useUploadHelper = () => {
  const nuxtApp = useNuxtApp();
  //@ts-ignore
  const supabase: SupabaseType = nuxtApp.$supabase;
  return {
    async uploadFile(fileName: string, file: File) {
      const { error: uploadError } = await supabase.storage
        .from("app-service-images") // your Supabase storage bucket name
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: true,
        });
      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        return "Error uploading file:";
      }
      return null;
    },
    async getPublicUrl(fileName: string) {
      const { data: publicData } = supabase.storage
        .from("app-service-images")
        .getPublicUrl(fileName);
      if (publicData) {
        return publicData.publicUrl;
      }
    },

    async deleteUrlFromSupabase(publicUrl: string) {
      debugger;
      const [bucket, thePath] = this.getPathFromPublicUrl(publicUrl);
      const { error } = await supabase.storage
        .from("app-service-images")
        .remove([thePath]);
    },

    getPathFromPublicUrl(publicUrl: string): [string, string] {
      const filePath = this.getStoragePathFromUrl(publicUrl); // returns "app-service-images/tfkloc_0/user_1713884772.jpg"

      const bucket = filePath.split("/")[0]; // "app-service-images"
      const objectPath = filePath.split("/").slice(1).join("/"); // "tfkloc_0/user_1713884772.jpg"
      return [bucket, objectPath];
    },
    getStoragePathFromUrl(url: string): string {
      try {
        const { pathname } = new URL(url);
        const segments = pathname.split("/");

        // Find where 'public' appears and return everything after it
        const publicIndex = segments.findIndex((s) => s === "public");

        if (publicIndex === -1) return "";

        return segments.slice(publicIndex + 1).join("/");
      } catch {
        return "";
      }
    },
  };
};
