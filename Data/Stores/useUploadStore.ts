export const useUploadStore = defineStore("upload", {
  state: () => ({
    originalProfilePictureUrl: "" as string,
    previousFileUrl: "" as string,
  }),
});
