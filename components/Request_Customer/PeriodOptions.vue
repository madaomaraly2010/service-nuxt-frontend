<template>
  <!-- class="col-3 offset-3" -->
  <div>
    <q-item-label class="text-blue-10 text-bold">
      {{ " الفترة" }}
    </q-item-label>
  </div>
  <div>
    <q-option-group
      @update:model-value="periodChanged"
      inline
      v-model="selectedTime"
      :options="periodOptions"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
import { PeriodEnum } from "~/Data/Enums/Period.enum";

const emits = defineEmits(["periodChanged"]);
const selectedTime = defineModel({
  default: PeriodEnum.TODAY,
});
const nuxtApp = useNuxtApp();
// const selectedTime: Ref<PeriodEnum> = ref<PeriodEnum>(PeriodEnum.TODAY);
const periodOptions = [
  { label: nuxtApp.$t("labels.today"), value: PeriodEnum.TODAY },
  { label: nuxtApp.$t("labels.last_week"), value: PeriodEnum.LAST_WEEK },
  { label: nuxtApp.$t("labels.last_month"), value: PeriodEnum.LAST_MONTH },
];
const periodChanged = () => {
  emits("periodChanged", selectedTime);
};
</script>

<style scoped></style>
