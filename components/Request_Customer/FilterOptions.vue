<template>
  <div class="row">
    <div class="col-4">
      <WorkFilterSelect
        v-model="selectedWork"
        @work-selected="workSelected"
      ></WorkFilterSelect>
    </div>
  </div>
  <q-separator inset color="grey-3 q-my-sm"></q-separator>
  <div class="row">
    <div class="col">
      <request-customer-period-options
        v-model="selectedPeriod"
        @period-changed="periodChanged"
      ></request-customer-period-options>
    </div>
  </div>

  <q-separator inset color="grey-3 q-my-sm"></q-separator>
  <div class="row">
    <div class="col">
      <request-customer-request-status-options
        v-model="selectedStatus"
        @status-changed="statusChanged"
      ></request-customer-request-status-options>
    </div>
  </div>
  <q-separator inset color="grey-3 q-my-sm"></q-separator>
</template>

<script setup lang="ts">
import { PeriodEnum } from "~/Data/Enums/Period.enum";
import { RequestStatusEnum } from "~/Data/Enums/RequestStatus.enum";
import type { Work } from "~/Data/Models";
import { useProviderStore } from "~/Data/Stores";
//@ts-ignore
const providerStore = useProviderStore();

const selectedWork = ref();
const selectedPeriod: Ref<PeriodEnum> = ref<PeriodEnum>(PeriodEnum.TODAY);
const selectedStatus: Ref<RequestStatusEnum> = ref<RequestStatusEnum>(
  RequestStatusEnum.All
);

const periodChanged = (period: PeriodEnum) => {
  console.log("Selected Period", period);
};
const statusChanged = (status: RequestStatusEnum) => {
  console.log("Selected Status", status);
};
const workSelected = (work: Work) => {
  console.log("Selected Work", work);
};
</script>

<style scoped></style>
