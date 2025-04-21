<template>
  <div style="width: 14vw; height: 4vh">
    <q-select
      v-model="selectedWork"
      :options="workStore.list"
      option-label="arb_name"
      option-value="id"
      outlined
      :label="$t(I18Provider.Fields.work_id)"
      dense
      clearable
      :popup-content-class="globalStore.direction == 'rtl' ? 'rtl' : ''"
      @update:model-value="onWorkSelected"
      @clear="onClear"
    >
    </q-select>
  </div>
</template>

<script lang="ts" setup>
import type { Work } from "~/Data/Models";
import { useGlobalStore, useProviderStore } from "~/Data/Stores";

import { useWorkStore } from "~/Data/Stores/useWorkStore";
import { I18Provider } from "~/locales/i18-key";

const workStore = useWorkStore();
const providerStore = useProviderStore();

const globalStore = useGlobalStore();

const selectedWork = defineModel();
const emits = defineEmits(["workSelected"]);
const onClear = async () => {
  await providerStore.findAll({ reFetch: true });
};
const onWorkSelected = async (work: Work) => {
  await providerStore.getByWork(work.id, {
    reFetch: true,
  });
  console.log(work, "selected");
};
</script>
<style></style>
