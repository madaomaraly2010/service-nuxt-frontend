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
import { useGlobalStore } from "~/Data/Stores/useGlobalStore";
import { useProviderStore } from "~/Data/Stores/useProviderStore";
import { useWorkStore } from "~/Data/Stores/useWorkStore";

const workStore = useWorkStore();
//@ts-ignore
const providerStore = useProviderStore();
const globalStore = useGlobalStore();

const selectedWork = defineModel();
const emits = defineEmits(["workSelected"]);
const onWorkSelected = async (work: Work) => {
  //providerStore.getByWork(work.id);
  console.log(work, "selected");
};
</script>
<style></style>
