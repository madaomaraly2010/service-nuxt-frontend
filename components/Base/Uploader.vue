<template>
  <div>
    <q-card flat class="q-pa-md">
      <div class="relative-position" style="width: 13vw; height: 21vh">
        <!-- Loader overlay -->

        <q-uploader
          url="http://your-upload-endpoint.com/upload"
          color="white"
          flat
          ref="uploaderRef"
          bordered
          :label="$t(I18Global.add_profile_picture)"
          text-color="black"
          style="width: 13vw; height: 21vh"
          accept="image/*"
          :auto-upload="false"
          :max-files="1"
          @added="onFileAdded"
        >
          <template #header="scope">
            <q-item @click="scope.pickFiles">
              <q-uploader-add-trigger />
              <q-item-section v-ripple>
                <q-item-label class="ellipsis text-center q-pa-sm text-grey-6">
                  {{ $t(I18Global.add_profile_picture) }}
                  <q-icon
                    v-if="profilePicture"
                    class="cursor-pointer"
                    name="edit"
                    size="sm"
                  ></q-icon>
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:list="scope">
            <q-item
              clickable
              @click="scope.pickFiles"
              v-ripple
              v-if="!profilePicture"
            >
              <q-uploader-add-trigger />

              <q-item-section class="flex flex-center">
                <q-icon size="lg" color="grey-6" name="upload"></q-icon>
              </q-item-section>
            </q-item>

            <q-item class="flex flex-center" v-if="profilePicture">
              <q-item-section avatar>
                <img
                  :src="profilePicture"
                  style="
                    width: 6vw;
                    height: 10vh;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                />
              </q-item-section>

              <q-item-section side>
                <q-btn
                  icon="close"
                  size="md"
                  color="grey-6"
                  flat
                  round
                  dense
                  @click="removeFile(scope)"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-uploader>
        <q-inner-loading :showing="loading">
          <q-spinner size="50px" color="primary" />
        </q-inner-loading>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import type { QUploader } from "quasar";
import { useUploadStore } from "~/Data/Stores/useUploadStore";
import { I18Global } from "~/locales/i18-key";
import type { SupabaseType } from "~/plugins/supabase.client";
// const props = defineProps<{
//   originalFileUrl: String | "";
// }>();
const profilePicture = defineModel<string>();
const loading = ref(false);
const uploaderRef: Ref<QUploader | null> = ref<QUploader | null>(null);
const uploadStore = useUploadStore();

const nuxtApp = useNuxtApp();
const uploadHelper = useUploadHelper();
const onFileAdded = async (files: readonly File[]) => {
  loading.value = true;
  //@ts-ignore
  await uploadFile(files[0]);

  uploaderRef.value?.reset();
  loading.value = false;
};
const uploadFile = async (file: File) => {
  debugger;
  if (!file) return;
  const fileExt = file.name.split(".").pop();
  const fileName = `tfkloc_0/user_${Date.now()}.${fileExt}`;
  //@ts-ignore
  const supabase: SupabaseType = nuxtApp.$supabase;
  // const { error: uploadError } = await supabase.storage
  //   .from("app-service-images") // your Supabase storage bucket name
  //   .upload(fileName, file, {
  //     cacheControl: "3600",
  //     upsert: true,
  //   });
  const uploadErrorMessage = await uploadHelper.uploadFile(fileName, file);

  if (uploadErrorMessage) {
    console.error("Upload error:", uploadErrorMessage);
    return;
  }

  // const { data: publicData } = supabase.storage
  //   .from("app-service-images")
  //   .getPublicUrl(fileName);
  const publicUrl = await uploadHelper.getPublicUrl(fileName);

  if (
    uploadStore.previousFileUrl
    //&&    uploadStore.previousFileUrl != uploadStore.originalProfilePictureUrl
  ) {
    //====delete previously uploaded file
    await uploadHelper.deleteUrlFromSupabase(uploadStore.previousFileUrl);
  }
  profilePicture.value = publicUrl; //publicData.publicUrl;

  uploadStore.previousFileUrl = profilePicture.value ?? "";
};
const removeFile = (scope: QUploader) => {
  // if (profilePicture.value && profilePicture.value != originalFileUrl) {
  //   //====delete previously uploaded file
  //   UploadHelper.deleteUrlFromSupabase(
  //     nuxtApp.$supabase as SupabaseType,
  //     profilePicture.value
  //   );
  // }

  profilePicture.value = "";
  if (scope.files.length == 0) {
    return;
  }
  scope.removeFile(scope.files[0]);
};
</script>

<style scoped></style>
