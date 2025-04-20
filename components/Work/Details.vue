<template>
  <div class="row items-center" :dir="globalStore.direction">
    <q-avatar>
      <q-img
        fit="contain"
        :src="'/images/' + work?.image_url + '.png'"
        :width="`${imageSize}vw`"
        :height="`${imageSize}vh`"
      ></q-img>
    </q-avatar>
    <q-item-label class="text-subtitle1 text-grey-8">{{
      work?.arb_name
    }}</q-item-label>
  </div>
</template>

<script setup lang="ts">
import { Work } from "~/Data/Models";
import { useGlobalStore } from "~/Data/Stores";

const globalStore = useGlobalStore();
defineProps({
  work: {
    type: Work,
    required: true,
  },
  imageSize: {
    type: Number,
    default: 6,
  },
});
</script>

<style scoped></style>
