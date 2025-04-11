<template>
  <div>
    <q-select
      outlined
      option-label="arb_name"
      option-value="id"
      v-model="status"
      label="Request Status"
      :options="rowList"
      emit-value
      map-options
    />
  </div>
</template>
<script setup lang="ts">
import { useRequestStatusStore } from "~/Data/Stores";

const statusStore = useRequestStatusStore();
const rowList = computed(() => statusStore.list);
const status = defineModel<number>();
</script>

<style scoped></style>
