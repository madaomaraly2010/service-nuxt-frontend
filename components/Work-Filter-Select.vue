<template>
  <!-- popup-content-style="text-align: right; direction: rtl;"
    input-style="text-align: right; direction: rtl;" -->
  <!-- <q-btn @click="fillWorks">Fill Works</q-btn> -->
  <q-select
    v-model="selectedWork"
    :options="workStore.works"
    option-label="arb_name"
    option-value="id"
    filled
    dense
    clearable
    @update:model-value="onWorkSelected"
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
// import { config } from "../Data/UrlsConfig";
// import type { WorkResponse } from "~/Data/Responses/Model-Responses";
// import { ModelResponse } from "~/Data/Responses/ModelResponse-Class";

const workStore = useWorkStore();
const providerStore = useProviderStore();

// let { data } = await useFetch(config.Work.API_WORK_GET);
debugger;
await workStore.findAll();
debugger;
//  //=====this gives error :[nuxt] [request error] [unhandled] [500] Cannot stringify arbitrary non-POJOs
const selectedWork = ref();
const emits = defineEmits(["workSelected"]);
const onWorkSelected = async (work: Work) => {
  providerStore.getByWork(work.id);
  console.log(work, "selected");
};
// const fillWorks = async () => {
//   await workStore.findAll();
// };
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
