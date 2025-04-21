<template>
  <div>
    <q-item-label class="text-blue-10 text-bold">
      {{ $t(I18Requestcustomer.Fields.request_status) }}
    </q-item-label>
  </div>
  <div>
    <q-option-group
      inline
      @update:model-value="statusChanged"
      v-model="selectedRequestStatus"
      :options="requestStatusOptions"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
import { RequestStatusEnum } from "~/Data/Enums/RequestStatus.enum";
import { I18Requestcustomer } from "~/locales/i18-key";
const nuxtApp = useNuxtApp();
const emits = defineEmits(["statusChanged"]);
const selectedRequestStatus = ref(RequestStatusEnum.All);
// const selectedRequestStatus = defineModel({
//   default: RequestStatusEnum.All,
// });
// const selectedRequestStatus: Ref<RequestStatusEnum> = ref<RequestStatusEnum>(
//   RequestStatusEnum.All
// );
const requestStatusOptions = [
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.all),
    value: RequestStatusEnum.All,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.pending),
    value: RequestStatusEnum.PENDING,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.approved),
    value: RequestStatusEnum.APPROVED,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.inprogress),
    value: RequestStatusEnum.IN_PROGRESS,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.completed),
    value: RequestStatusEnum.COMPLETED,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.cancelled),
    value: RequestStatusEnum.CANCELLED,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.rejected),
    value: RequestStatusEnum.REJECTED,
  },
  {
    label: nuxtApp.$t(I18Requestcustomer.Fields.expired),
    value: RequestStatusEnum.EXPIRED,
  },
];
const statusChanged = (statusId: number) => {
  emits("statusChanged", statusId);
};
</script>

<style scoped></style>
