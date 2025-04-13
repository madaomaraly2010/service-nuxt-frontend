<template>
  <div>
    <div class="row">
      <package-form-dialog
        v-if="editRow"
        ref="dialogRef"
        :editRow="editRow as Package"
      ></package-form-dialog>

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
          <template #start_date="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    date.formatDate(row?.start_date, "DD/MM/YYYY")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #end_date="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    date.formatDate(row?.end_date, "DD/MM/YYYY")
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template #valid_days="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    row.valid_days ?? " "
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #is_active="{ row }">
            <q-td style="width: 10vw">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    row.is_active ?? " "
                  }}</q-item-label>
                </q-item-section>
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

import { usePackageStore } from "~/Data/Stores";

import { date } from "quasar";
import type { Package } from "~/Data/Models";
import { TableKeys } from "~/common/table-keys";
import { PackageColumns } from "~/common/table-column-names";
import { I18Package } from "~/locales/i18-key";
const dialogRef = ref(null);
const selectedRow: Ref<Package | undefined> = ref<Package>();
const store = usePackageStore();
// await store.findAll();
const editRow = ref<Package>();

const nuxtApp = useNuxtApp();

const tableHelper = useTableHelper();

const pagination = ref({
  page: 1,
  rowsPerPage: 20, // Control number of rows per page
});
const selectAndOpenDialog = async (req: Package) => {
  selectedRow.value = req;
  await nextTick();
  //@ts-ignore
  dialogRef?.value.open();
};
const theColumns: QTableColumn[] = [
  tableHelper.createButtonColumn(nuxtApp.$t("global.details")),
  tableHelper.createColumn(
    TableKeys.PACKAGE_KEY,
    PackageColumns.arb_name,
    "name"
  ),
  tableHelper.createColumn(
    TableKeys.PACKAGE_KEY,
    "start_date",
    nuxtApp.$t(I18Package.Fields.start_date)
  ),
  tableHelper.createColumn(
    TableKeys.PACKAGE_KEY,
    "end_date",
    nuxtApp.$t(I18Package.Fields.end_date)
  ),
  tableHelper.createColumn(
    TableKeys.PACKAGE_KEY,
    "valid_days",
    nuxtApp.$t(I18Package.Fields.valid_days)
  ),
  tableHelper.createColumn(
    TableKeys.PACKAGE_KEY,
    "is_active",
    nuxtApp.$t(I18Package.Fields.is_active)
  ),
];
</script>

<style lang="css"></style>
