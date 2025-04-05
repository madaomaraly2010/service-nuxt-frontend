<template>
  <div>
    <request-customer-filter-options></request-customer-filter-options>
    <request-customer-request-details-dialog
      v-if="selectedRequest"
      :requestCustomer="selectedRequest"
      ref="dialogRef"
    ></request-customer-request-details-dialog>
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
          <template #detailsButton="{ row }">
            <q-td class="text-left">
              <q-item class="text-center">
                <q-item-section class="text-center">
                  <q-btn
                    @click="selectAndOpenDialog(row)"
                    flat
                    color="blue-6"
                    >{{ $t("global.details") }}</q-btn
                  >
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #id="{ row }">
            <q-td class="text-left">
              <q-item class="text-center">
                <q-item-section class="text-center">
                  <q-item-label
                    class="text-bold text-grey-7 text-center text-h6"
                    >{{ row?.id }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #request_date="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    date.formatDate(row?.request_date, "DD/MM/YYYY")
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
                    row.provider?.user?.first_name ?? " "
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #provider_work="{ row }">
            <q-td style="width: 10vw">
              <q-item>
                <q-item-section>
                  <div class="row q-gutter-xs">
                    <div class="col">
                      <q-icon
                        :name="row.provider?.work.icon"
                        size="xs"
                        class="q-ml-sm"
                      />
                    </div>
                    <div class="col text-grey-7 text-bold text-center">
                      {{ row.provider?.work?.arb_name ?? " " }}
                    </div>
                  </div>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #user_fullname="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7 text-left">{{
                  row.user?.first_name ?? " "
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #user_mobile="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-red-7 text-left">{{
                  row.user?.mobile ?? " "
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <!-- <template #wage_amount="{ row }">
            <q-td class="text-center">
              <q-item class="text-center">
                <q-item-label class="text-bold text-grey-7 text-center">{{
                  row.wage_amount
                }}</q-item-label>
              </q-item>
            </q-td>
          </template> -->

          <template #request_status_id="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7 text-center">
                  <q-badge
                    class="q-pa-sm"
                    :color="getStatusColor(row.request_status)"
                    >{{ row.status.arb_name }}
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

import { useRequestCustomerStore } from "~/Data/Stores";
import { date } from "quasar";
import type { RequestCustomer } from "~/Data/Models";
const dialogRef = ref(null);
const selectedRequest: Ref<RequestCustomer | undefined> =
  ref<RequestCustomer>();
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
const selectAndOpenDialog = async (req: RequestCustomer) => {
  debugger;
  selectedRequest.value = req;
  await nextTick();
  //@ts-ignore
  dialogRef?.value.open();
};
const theColumns: QTableColumn[] = [
  {
    name: "detailsButton",
    label: "",
    field: "id",
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "center",
  },
  {
    name: "id",
    label: nuxtApp.$t("request_customer.fields.id"),
    field: "id",
    sortable: true,
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "center",
  },
  {
    name: "request_date",
    label: nuxtApp.$t("request_customer.fields.request_date"),
    field: "request_date",
    sortable: true,
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "center",
  },

  {
    name: "provider_fullname",
    label: nuxtApp.$t("request_customer.fields.provider_fullname"),
    field: "provider_id",
    sortable: true,
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "center",
  },

  {
    name: "provider_work",
    label: nuxtApp.$t("provider.fields.work_id"),
    field: "work_id",
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    sortable: true,
    align: "center",
  },
  {
    name: "user_fullname",
    label: nuxtApp.$t("request_customer.fields.user_fullname"),
    field: "user_id",
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    sortable: true,
    align: "center",
  },

  {
    name: "user_mobile",
    label: nuxtApp.$t("user.fields.mobile"),
    field: "user_id",
    sortable: true,
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "left",
  },
  // {
  //   name: "wage_amount",
  //   label: nuxtApp.$t("provider.fields.wage_amount"),
  //   field: "country.arb_name",
  //   sortable: true,
  //   align: "left",
  // },

  {
    name: "request_status_id",
    label: nuxtApp.$t("request_customer.fields.request_status"),
    field: "request_status_id",
    sortable: true,
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "left",
  },
];

const getStatusColor = (status: number): string => {
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

// const getRequestStatusName = (status: number): string => {
//   switch (status) {
//     case RequestStatusEnum.PENDING:
//       return nuxtApp.$t("request_customer.fields.pending");
//     case RequestStatusEnum.APPROVED:
//       return nuxtApp.$t("request_customer.fields.approved");
//     case RequestStatusEnum.IN_PROGRESS:
//       return nuxtApp.$t("request_customer.fields.inprogress");
//     case RequestStatusEnum.COMPLETED:
//       return nuxtApp.$t("request_customer.fields.completed");
//     case RequestStatusEnum.CANCELLED:
//       return nuxtApp.$t("request_customer.fields.cancelled");
//     case RequestStatusEnum.REJECTED:
//       return nuxtApp.$t("request_customer.fields.rejected");
//     case RequestStatusEnum.EXPIRED:
//       return nuxtApp.$t("request_customer.fields.expired");
//     default:
//       return "Unknown";
//   }
// };
</script>

<style lang="css"></style>
