<template>
  <div>
    <div class="row block">
      <q-card-section class="q-pa-none q-ma-none">
        <base-table
          class="provider-table"
          :rows="store.providers"
          :columns="provider_column"
          flat
          bordered
        >
          <template #id="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7">{{
                    row?.id
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #fullname="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label
                    style="text-align: center"
                    class="text-bold text-grey-7"
                    >{{
                      (row.user?.first_name ?? " ") +
                      " " +
                      (row.user?.last_name ?? " ")
                    }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #work="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-red-7">{{
                  row.work?.arb_name
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #country="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  row.country?.arb_name
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #mobile="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  row.user?.mobile
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template #gender="{ row }">
            <q-td>
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  row.user?.gender == 1 ? "ذكر" : "أنثى"
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

import { useProviderStore } from "~/Data/Stores/useProviderStore";
const store = useProviderStore();
await store.findAll();

const provider_column: QTableColumn[] = [
  {
    name: "id",
    label: "السجل",
    field: "id",
    sortable: true,
    align: "left",
  },
  {
    name: "fullname",
    label: "الاسم",
    field: "id",
    sortable: true,
    align: "center",
  },
  {
    name: "mobile",
    label: "الجوال",
    field: "user.mobile",
    sortable: true,
    align: "left",
  },
  {
    name: "gender",
    label: "الجنس",
    field: "user.gender",
    sortable: true,
    align: "left",
  },
  {
    name: "country",
    label: "الجنسية",
    field: "country.arb_name",
    sortable: true,
    align: "left",
  },

  {
    name: "work",
    label: "العمل",
    field: "work.arb_name",
    sortable: true,
    align: "left",
  },
];
</script>

<style lang="css"></style>
