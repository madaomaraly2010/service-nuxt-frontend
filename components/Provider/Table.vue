<template>
  <div>
    <div class="row bg-amber">
      <ProviderAddEditDialogForm
        v-if="defaultWork"
        :default-work="defaultWork"
        ref="providerRef"
      ></ProviderAddEditDialogForm>
      <div class="col-3">
        <WorkDropButton @on-work-clicked="onWorkSelected"></WorkDropButton>
      </div>
      <div class="col-3">
        <WorkFilterSelect></WorkFilterSelect>
      </div>
    </div>
    <q-card-section class="q-pa-none q-ma-none">
      <base-table
        class="provider-table"
        :rows="store.list"
        :columns="provider_columns"
        @action="onAction"
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
                row?.gender == 1 ? "ذكر" : "أنثى"
              }}</q-item-label>
            </q-item>
          </q-td>
        </template>
      </base-table>
    </q-card-section>
  </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import type { QTableColumn } from "quasar";
import type { Provider, Work } from "~/Data/Models";

import { useProviderStore } from "~/Data/Stores/useProviderStore";
import type { TableActionType } from "~/common/common-types";
const store = useProviderStore();
const providerRef = ref(null);
const defaultWork = ref<Work>();
await store.findAll();
const onAction = (action: TableActionType, row: Provider) => {};
const openDialog = () => (providerRef.value as any).openDialog();
const onWorkSelected = (w: Work) => {
  defaultWork.value = w;
  openDialog();
};
const provider_columns: QTableColumn[] = [
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
    field: "gender",
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
