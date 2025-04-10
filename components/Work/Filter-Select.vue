<template>
  <div>
    <q-item-label class="text-blue-10 text-bold">
      {{ " العمل" }}
    </q-item-label>
  </div>
  <div>
    <q-select
      v-model="selectedWork"
      :options="workStore.list"
      option-label="arb_name"
      option-value="id"
      outlined
      dense
      clearable
      :popup-content-class="globalStore.direction == 'rtl' ? 'rtl' : ''"
      @update:model-value="onWorkSelected"
    >
    </q-select>
  </div>
</template>

<script lang="ts" setup>
import type { Work } from "~/Data/Models";
import { useGlobalStore, useProviderStore } from "~/Data/Stores";

import { useWorkStore } from "~/Data/Stores/useWorkStore";

const workStore = useWorkStore();
const providerStore = useProviderStore();

const globalStore = useGlobalStore();

const selectedWork = defineModel();
const emits = defineEmits(["workSelected"]);
const onWorkSelected = async (work: Work) => {
  await providerStore.getByWork(work.id, {
    reFetch: true,
  });
  console.log(work, "selected");
};
</script>
<style></style>
