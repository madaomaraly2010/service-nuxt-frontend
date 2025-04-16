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
import {
  useLookupStore,
  type LookupStoreType,
} from "~/Data/Stores/useLookupStore";

const lookupStore: LookupStoreType = useLookupStore();

console.log("getStatusStore", lookupStore.requestStatusStore);
// const statusStore = useRequestStatusStore();
// const statusStore = inject<RequestStatusStoreType>(
//   TableKeys.REQUEST_STATUS_KEY
// );
console.log("statusStore from dropdown", lookupStore?.requestStatusStore);

const rowList = computed(() => lookupStore?.requestStatusStore.list);
const status = defineModel<number>();
</script>

<style scoped></style>
