<template>
  <div>
    <div class="row block">
      <q-card-section class="q-pa-none q-ma-none">
        <q-table
          class="provider-table"
          :rows="store.providers"
          :columns="provider_column"
          flat
          bordered
        >
          <template v-slot:body-cell-id="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7">{{
                    props.row?.id
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-work="props">
            <q-td :props="props">
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  props.row.work?.arb_name
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template v-slot:body-cell-country="props">
            <q-td :props="props">
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  props.row.country?.arb_name
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <template v-slot:body-cell-mobile="props">
            <q-td :props="props">
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  props.row.user?.mobile
                }}</q-item-label>
              </q-item>
            </q-td>
          </template>

          <!-- <template v-slot:body-cell-gender="props">
            <q-td :props="props">
              <q-item>
                <q-item-label class="text-bold text-grey-7">{{
                  props.row.user?.gender
                }}</q-item-label>
              </q-item>
            </q-td>
          </template> -->
        </q-table>
      </q-card-section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QTableColumn } from "quasar";
import { Provider } from "~/Data/Models";
import { useProviderStore } from "~/Data/Stores/useProviderStore";
const store = useProviderStore();
await store.findAll();

const provider_column: QTableColumn[] = [
  {
    name: "id",
    label: "السجل",
    field: "id",
    sortable: true,
    // align: "left",
  },
  {
    name: "fullname",
    label: "الاسم",
    field: "id",
    sortable: true,
    format(val, row: Provider) {
      return (row.user?.first_name ?? " ") + " " + (row.user?.last_name ?? " ");
    },
    // align: "left",
  },
  {
    name: "mobile",
    label: "الجوال",
    field: "user.mobile",
    sortable: true,
    // align: "left",
  },
  {
    name: "gender",
    label: "الجنس",
    field: "user.gender",
    sortable: true,
    format: (val: any, row: Provider) => {
      return row.user?.gender == 1 ? "ذكر" : "أنثى";
    },
    // align: "left",
  },
  {
    name: "country",
    label: "الجنسية",
    field: "country.arb_name",
    sortable: true,
    // align: "left",
  },

  {
    name: "work",
    label: "العمل",
    field: "work.arb_name",
    sortable: true,
    // align: "left",
  },
];
</script>

<style lang="css"></style>
