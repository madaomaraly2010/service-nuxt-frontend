<template>
  <div class="row items-center" :dir="globalStore.direction">
    <q-avatar>
      <q-img
        :src="'/images/' + work?.image_url + '.png'"
        width="6vw"
        height="6vh"
      ></q-img>
    </q-avatar>
    <q-item-label>{{ work?.arb_name }}</q-item-label>
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
});
</script>

<style scoped></style>
