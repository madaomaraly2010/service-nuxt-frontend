<template>
  <div>
    <request-customer-filter-options></request-customer-filter-options>

    <div class="row">
      <q-card-section style="width: 70vw" class="q-pa-none q-ma-none">
        <base-table
          :rows="store.list"
          style="height: 50vh"
          :columns="theColumns"
          flat
          bordered
          :pagination="pagination"
        >
          <template #id="{ row }">
            <q-td class="text-left">
              <q-item class="text-center">
                <q-item-section class="text-center">
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    row?.id
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #request_date="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    row?.request_date
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #provider_fullname="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    (row.provider?.user?.first_name ?? " ") +
                    " " +
                    (row.provider?.user?.last_name ?? " ")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #user_fullname="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-red-7 text-left">{{
                  (row.user?.first_name ?? " ") +
                  " " +
                  (row.user?.last_name ?? " ")
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #wage_amount="{ row }">
            <q-td class="text-center">
              <q-item class="text-center">
                <q-item-label class="text-bold text-grey-7 text-center">{{
                  row.wage_amount
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #request_status="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7 text-center">
                  <q-badge
                    class="q-pa-sm"
                    :color="getBadgeColorFromRequestStatus(row.request_status)"
                    >{{ getRequestStatusName(row.request_status) }}
                  </q-badge>
                </q-item-label>
              </q-item>
            </q-td>
          </template>
        </base-table>
      </q-card-section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QTableColumn } from "quasar";
import { RequestStatusEnum } from "~/Data/Enums/RequestStatus.enum";

import { useRequestCustomerStore } from "~/Data/Stores";
const store = useRequestCustomerStore();
await store.findAll();
const nuxtApp = useNuxtApp();
// const selectedTime: Ref<"today" | "last_week" | "last_month"> = ref("today");
// const selectedRequestStatus: Ref<RequestStatusEnum> = ref<RequestStatusEnum>(
//   RequestStatusEnum.All
// );
const pagination = ref({
  page: 1,
  rowsPerPage: 20, // Control number of rows per page
});
// const periodOptions = [
//   { label: nuxtApp.$t("labels.today"), value: "today" },
//   { label: nuxtApp.$t("labels.last_week"), value: "last_week" },
//   { label: nuxtApp.$t("labels.last_month"), value: "last_month" },
// ];
// const requestStatusOptions = [
//   {
//     label: nuxtApp.$t("request_customer.fields.all"),
//     value: RequestStatusEnum.All,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.pending"),
//     value: RequestStatusEnum.PENDING,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.approved"),
//     value: RequestStatusEnum.APPROVED,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.inprogress"),
//     value: RequestStatusEnum.IN_PROGRESS,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.completed"),
//     value: RequestStatusEnum.COMPLETED,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.cancelled"),
//     value: RequestStatusEnum.CANCELLED,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.rejected"),
//     value: RequestStatusEnum.REJECTED,
//   },
//   {
//     label: nuxtApp.$t("request_customer.fields.expired"),
//     value: RequestStatusEnum.EXPIRED,
//   },
// ];
const theColumns: QTableColumn[] = [
  {
    name: "id",
    label: nuxtApp.$t("request_customer.fields.id"),
    field: "id",
    sortable: true,
    // align: "left",
    align: "center",
  },
  {
    name: "request_date",
    label: nuxtApp.$t("request_customer.fields.request_date"),
    field: "request_date",
    sortable: true,
    align: "center",
  },

  {
    name: "provider_fullname",
    label: nuxtApp.$t("request_customer.fields.provider_fullname"),
    field: "provider_id",
    sortable: true,
    align: "center",
  },

  {
    name: "user_fullname",
    label: nuxtApp.$t("request_customer.fields.user_fullname"),

    field: "user_id",
    sortable: true,
    align: "left",
  },
  {
    name: "wage_amount",
    label: nuxtApp.$t("provider.fields.wage_amount"),
    field: "country.arb_name",
    sortable: true,
    align: "left",
  },

  {
    name: "request_status",
    label: nuxtApp.$t("request_customer.fields.request_status"),
    field: "request_status",
    sortable: true,
    align: "left",
  },
];

const getBadgeColorFromRequestStatus = (status: number): string => {
  // PENDING = 1,
  // APPROVED = 2,
  // IN_PROGRESS = 3,
  // COMPLETED = 4,
  // CANCELLED = 5,
  // REJECTED = 6,
  // EXPIRED = 7,

  const badgeColors: any = {
    1: "yellow-8",
    2: "green-6",
    3: "blue-6",
    4: "teal-6",
    5: "grey-7",
    6: "red-6",
    7: "orange-6",
  };
  return badgeColors[status];
};

const getRequestStatusName = (status: number): string => {
  switch (status) {
    case RequestStatusEnum.PENDING:
      return nuxtApp.$t("request_customer.fields.pending");
    case RequestStatusEnum.APPROVED:
      return nuxtApp.$t("request_customer.fields.approved");
    case RequestStatusEnum.IN_PROGRESS:
      return nuxtApp.$t("request_customer.fields.inprogress");
    case RequestStatusEnum.COMPLETED:
      return nuxtApp.$t("request_customer.fields.completed");
    case RequestStatusEnum.CANCELLED:
      return nuxtApp.$t("request_customer.fields.cancelled");
    case RequestStatusEnum.REJECTED:
      return nuxtApp.$t("request_customer.fields.rejected");
    case RequestStatusEnum.EXPIRED:
      return nuxtApp.$t("request_customer.fields.expired");
    default:
      return "Unknown";
  }
};
</script>

<style lang="css"></style>
