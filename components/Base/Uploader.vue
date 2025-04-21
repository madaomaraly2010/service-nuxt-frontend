<template>
  <div>
    <q-uploader
      url="http://your-upload-endpoint.com/upload"
      color="white"
      text-color="black"
      style="width: 11vw; height: 18vh"
      label="Upload your image"
      accept="image/*"
      :auto-upload="false"
      :max-files="1"
      v-model="uploadedFile"
      @added="onFileAdded"
    >
      <template #header>
        <q-item-section v-ripple>
          <q-item-label class="ellipsis text-center q-pa-sm text-grey-6">
            {{ $t(I18Global.add_profile_picture) }}
          </q-item-label>
        </q-item-section>
      </template>

      <template v-slot:list="scope">
        <q-item
          clickable
          @click="scope.pickFiles"
          v-ripple
          v-if="scope.files.length == 0"
        >
          <q-uploader-add-trigger />

          <q-item-section class="flex flex-center">
            <q-icon size="lg" color="grey-6" name="upload"></q-icon>
          </q-item-section>
        </q-item>
        <q-item v-if="scope.files.length > 0">
          <q-item-section v-if="scope.files[0].__img" thumbnail class="gt-xs">
            <img
              :src="getImageSource(scope)"
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
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
              @click="scope.removeFile(scope.files[0])"
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
const uploadedFile = defineModel<File>();

const getImageSource = (scope: QUploader) => {
  //   if (uploadedFile.value) return URL.createObjectURL(uploadedFile.value);
  console.log(" scope.files[0].__img.src", scope.files[0].__img.src);
  return scope.files[0].__img.src;
};
const onFileAdded = (files: File[]) => {
  if (files.length > 0) {
    debugger;
    //@ts-ignore
    uploadedFile.value = files[0]; // save the native File object
  }
};
</script>

<style scoped></style>
<!-- 
<template v-slot:list="scope">
    <q-list separator>

      <q-item
        clickable
        @click="scope.pickFiles"
        v-ripple
        v-if="scope.files.length == 0"
      >
        <q-item-section v-ripple>
          <q-item-label class="full-width ellipsis">
            {{ $t(I18Global.add_profile_picture) }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="upload"></q-icon>
        </q-item-section>
      </q-item>
      <q-uploader-add-trigger />
      <q-item v-for="file in scope.files" :key="file.__key">
        <q-item-section>
           <q-item-label class="full-width ellipsis">
            {{ file.name }}
          </q-item-label>

          <q-item-label caption>
            Status: {{ file.__status }}
          </q-item-label> 

           <q-item-label caption>
            {{ file.__sizeLabel }} / {{ file.__progressLabel }}
          </q-item-label> 
        </q-item-section>

        <q-item-section v-if="file.__img" thumbnail class="gt-xs">
          <img
            :src="file.__img.src"
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
            class="gt-xs"
            size="12px"
            flat
            dense
            round
            icon="delete"
            @click="scope.removeFile(file)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </template> -->
