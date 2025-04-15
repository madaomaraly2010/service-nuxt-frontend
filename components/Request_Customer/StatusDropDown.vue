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
import type { RequestStatusStoreType } from "~/Data/Stores/useRequestStatusStore";
import { TableKeys } from "~/common/table-keys";

// const statusStore = useRequestStatusStore();
const statusStore = inject<RequestStatusStoreType>(
  TableKeys.REQUEST_STATUS_KEY
);
console.log("statusStore from dropdown", statusStore);
const rowList = computed(() => statusStore?.list);
const status = defineModel<number>();
</script>

<style scoped></style>
