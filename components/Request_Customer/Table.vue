<template>
  <div>
    <div class="row justify-center">Put filter options here</div>
    <div class="row justify-center">
      <q-card-section style="width: 70vw" class="q-pa-none q-ma-none">
        <base-table :rows="store.list" :columns="theColumns" flat bordered>
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
                <q-item-label class="text-bold text-grey-7 text-center">{{
                  row.request_status
                }}</q-item-label>
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
const store = useRequestCustomerStore();
await store.findAll();
const nuxtApp = useNuxtApp();
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
</script>

<style lang="css"></style>
