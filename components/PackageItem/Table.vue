<template>
  <div>
    <div class="row">
      <package-item-form-dialog
        v-if="selectedRow"
        :package-row="packageRow"
        ref="dialogRef"
        :editRow="(selectedRow as PackageItem)"
      ></package-item-form-dialog>

      <q-card-section style="width: 70vw" class="q-pa-none q-ma-none">
        <base-table
          :show-toolbar="true"
          :show-create-button="true"
          @on-create-button-clicked="onCreateClicked"
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
                    @click="selectAndOpenDialog(row as PackageItem)"
                    flat
                    color="blue-6"
                    >{{ $t("global.details") }}</q-btn
                  >
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #name="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-red-7 text-center">{{
                    (row as PackageItem).arb_name
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #month_number="{ row }">
            <q-td>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">{{
                    (row as PackageItem).month_number ?? " "
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #discount_percent="{ row }">
            <q-td style="width: 10vw">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">
                    {{
                      (row as PackageItem).discount_percent
                        ? (row as PackageItem).discount_percent + "%"
                        : " "
                    }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>

          <template #down_payment_percent="{ row }">
            <q-td style="width: 10vw">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7 text-center">
                    {{
                      (row as PackageItem).down_payment_percent
                        ? (row as PackageItem).down_payment_percent + "%"
                        : " "
                    }}
                  </q-item-label>
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

import { usePackageItemStore } from "~/Data/Stores";

import { PackageItemColumns } from "~/common/table-column-names";
import { I18Global, I18Package, I18Packageitem } from "~/locales/i18-key";
import cloneDeep from "lodash/cloneDeep";
import { PackageItem } from "~/Data/Models";
import type { IPackageItemTableProps } from "~/common/common-types";

const dialogRef = ref(null);
const selectedRow: Ref<PackageItem | undefined> = ref<PackageItem>();
const store = usePackageItemStore();
const nuxtApp = useNuxtApp();
const tableHelper = useTableHelper();
const props = defineProps<IPackageItemTableProps>();
const pagination = ref({
  page: 1,
  rowsPerPage: 20, // Control number of rows per page
});
const selectAndOpenDialog = async (req: PackageItem) => {
  selectedRow.value = cloneDeep(req);
  await nextTick();
  //@ts-ignore
  dialogRef?.value.open();
};
const onCreateClicked = async () => {
  selectedRow.value = PackageItem.create(props.packageRow?.id);
  await nextTick();
  //@ts-ignore
  dialogRef?.value.open();
};
const theColumns: QTableColumn[] = [
  tableHelper.createButtonColumn(
    nuxtApp.$t(I18Global.details),
    "detailsButton"
  ),
  tableHelper.createColumn(
    PackageItemColumns.arb_name,
    nuxtApp.$t(I18Package.Fields.name),
    "name"
  ),
  tableHelper.createColumn(
    PackageItemColumns.month_number,
    nuxtApp.$t(I18Packageitem.Fields.month_number)
  ),

  tableHelper.createColumn(
    PackageItemColumns.discount_percent,
    nuxtApp.$t(I18Packageitem.Fields.discount_percent)
  ),

  tableHelper.createColumn(
    PackageItemColumns.down_payment_percent,
    nuxtApp.$t(I18Packageitem.Fields.down_payment_percent)
  ),
];
</script>

<style lang="css"></style>
