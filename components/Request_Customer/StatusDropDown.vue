<template>
  <div>
    <q-select
      outlined
      option-label="arb_name"
      option-value="id"
      v-model="status"
      label="Request Status"
      :options="statusStore.list"
      emit-value
      map-options
    />
  </div>
</template>
<script setup lang="ts">
import { useRequestStatusStore } from "~/Data/Stores";

const statusStore = useRequestStatusStore();

const status = defineModel<number>();
</script>

<style scoped></style>
