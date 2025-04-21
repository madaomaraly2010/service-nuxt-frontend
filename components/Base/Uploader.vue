<template>
  <div>
    <!-- <q-img :src="profilePicture" width="5vw" height="5vh"></q-img> -->
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
  </div>
</template>

<script setup lang="ts">
import type { QUploader } from "quasar";
import { I18Global } from "~/locales/i18-key";
const profilePicture = defineModel<string>();
const uploaderRef: Ref<QUploader | null> = ref<QUploader | null>(null);
const onFileAdded = async (file: File[]) => {
  profilePicture.value = URL.createObjectURL(file[0]);
  uploaderRef.value?.reset();
};
const removeFile = (scope: QUploader) => {
  profilePicture.value = "";
  if (scope.files.length == 0) {
    return;
  }
  scope.removeFile(scope.files[0]);
};
</script>

<style scoped></style>
