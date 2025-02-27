<template>
  <div>
    <q-item-label class="text-blue-10 text-bold">
      {{ "حالة الطلب" }}
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
const nuxtApp = useNuxtApp();
const emits = defineEmits(["statusChanged"]);
const selectedRequestStatus = defineModel({
  default: RequestStatusEnum.All,
});
// const selectedRequestStatus: Ref<RequestStatusEnum> = ref<RequestStatusEnum>(
//   RequestStatusEnum.All
// );
const requestStatusOptions = [
  {
    label: nuxtApp.$t("request_customer.fields.all"),
    value: RequestStatusEnum.All,
  },
  {
    label: nuxtApp.$t("request_customer.fields.pending"),
    value: RequestStatusEnum.PENDING,
  },
  {
    label: nuxtApp.$t("request_customer.fields.approved"),
    value: RequestStatusEnum.APPROVED,
  },
  {
    label: nuxtApp.$t("request_customer.fields.inprogress"),
    value: RequestStatusEnum.IN_PROGRESS,
  },
  {
    label: nuxtApp.$t("request_customer.fields.completed"),
    value: RequestStatusEnum.COMPLETED,
  },
  {
    label: nuxtApp.$t("request_customer.fields.cancelled"),
    value: RequestStatusEnum.CANCELLED,
  },
  {
    label: nuxtApp.$t("request_customer.fields.rejected"),
    value: RequestStatusEnum.REJECTED,
  },
  {
    label: nuxtApp.$t("request_customer.fields.expired"),
    value: RequestStatusEnum.EXPIRED,
  },
];
const statusChanged = () => {
  emits("statusChanged", selectedRequestStatus);
};
</script>

<style scoped></style>
