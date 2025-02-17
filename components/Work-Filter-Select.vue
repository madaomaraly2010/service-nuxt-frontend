<template>
  <q-select
    v-model="selectedWork"
    :options="workStore.works"
    option-label="arb_name"
    option-value="id"
    filled
    dense
    clearable
    @update:model-value="onWorkSelected"
    popup-content-style="text-align: right; direction: rtl;"
    input-style="text-align: right; direction: rtl;"
  >
    <!-- <template v-slot:label>
      <div class="rtl-label">اختر العمل</div>
    </template> -->
  </q-select>
</template>

<script lang="ts" setup>
import type { Work } from "~/Data/Models";
import { useWorkStore } from "../Data/Stores/useWorkStore";
import { useProviderStore } from "../Data/Stores/useProviderStore";

const workStore = useWorkStore();
const providerStore = useProviderStore();
await workStore.findAll();
console.log("store.Works", workStore.works);
const selectedWork = ref();
const emits = defineEmits(["workSelected"]);
const onWorkSelected = async (work: Work) => {
  providerStore.getByWork(work.id);
  console.log(work, "selected");
};
</script>
<style>
.rtl {
  direction: rtl;
  text-align: right;
}

.rtl-text .q-field__control {
  text-align: right;
}

.rtl-popup {
  direction: rtl;
  text-align: right;
}
.q-field .q-field__label {
  direction: rtl;
  text-align: right;
}
</style>
