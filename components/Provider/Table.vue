<template>
  <div>
    <ProviderFormDialog
      v-if="selectedRow"
      ref="dialogRef"
      :editRow="(selectedRow as Provider)"
    ></ProviderFormDialog>
    <q-card-section class="q-pa-none q-ma-none">
      <base-table
        class="provider-table"
        :rows="store.list"
        :columns="provider_columns"
        @action="onAction"
      >
        <template #top>
          <div class="row items-center">
            <div class="col">
              <WorkDropButton
                @on-work-clicked="onWorkSelected"
              ></WorkDropButton>
            </div>
            <div class="col">
              <WorkFilterSelect></WorkFilterSelect>
            </div>
          </div>
        </template>
        <template #detailsButton="{ row }">
          <BaseTableButtonColumn
            :label="$t('global.details')"
            @click="selectAndOpenDialog(row)"
          ></BaseTableButtonColumn>
        </template>
        <template #id="{ row }: { row: Provider }">
          <BaseTableColumn
            :display-value="row?.id?.toString()"
            col-class="text-bold text-red-7"
          ></BaseTableColumn>
        </template>
        <template #fullname="{ row }: { row: Provider }">
          <BaseTableColumn
            :display-value="row.user?.first_name"
            col-class="text-bold text-grey-7"
            col-style="text-align: center"
          ></BaseTableColumn>
        </template>
        <template #work_id="{ row }: { row: Provider }">
          <BaseTableColumn>
            <WorkDetails :image-size="5" :work="row.work"></WorkDetails>
          </BaseTableColumn>
        </template>

        <template #country_id="{ row }: { row: Provider }">
          <BaseTableColumn>
            <q-item-label class="text-bold text-grey-7">
              <span
                class="text-h5"
                :class="[
                  'flag-icon',
                  `flag-icon-${row.country?.iso_code?.toLowerCase()}`,
                ]"
              ></span>
              {{ row.country?.arb_name }}</q-item-label
            >
          </BaseTableColumn>
        </template>

        <template #mobile="{ row }: { row: Provider }">
          <BaseTableColumn
            col-class="text-bold text-grey-7"
            :display-value="row.user?.mobile"
          ></BaseTableColumn>
        </template>

        <template #gender="{ row }: { row: Provider }">
          <BaseTableColumn
            col-class="text-bold text-grey-7"
            :display-value="
              row?.gender == 1 ? $t(I18Global.male) : $t(I18Global.female)
            "
          ></BaseTableColumn>
        </template>
      </base-table>
    </q-card-section>
  </div>
</template>

<script lang="ts" setup>
import type { QTableColumn } from "quasar";
import { Provider, type Work } from "~/Data/Models";

import { useProviderStore } from "~/Data/Stores";
import type { TableActionType } from "~/common/common-types";
import { ProviderColumns, UserColumns } from "~/common/table-column-names";
import { I18Global, I18Provider, I18User } from "~/locales/i18-key";
import cloneDeep from "lodash/cloneDeep";
import { useUploadStore } from "~/Data/Stores/useUploadStore";
// import type { LookupStoreType } from "~/Data/Stores";

const dialogRef = ref(null);
const tableHelper = useTableHelper();
const store = useProviderStore();
// const lookupStore: LookupStoreType = useLookupStore();
// await lookupStore.fetchAllLookups();
await store.findAll();
const selectedRow: Ref<Provider | undefined> = ref<Provider>();
const nuxtApp = useNuxtApp();

const onAction = (action: TableActionType, row: Provider) => {};
const openCreateDialog = () => (dialogRef.value as any).open();
const onWorkSelected = async (w: Work) => {
  selectedRow.value = Provider.create(w.id);
  await nextTick();
  openCreateDialog();
};

const selectAndOpenDialog = async (row: Provider) => {
  const uploadStore = useUploadStore();
  uploadStore.originalProfilePictureUrl = row.profile_picture ?? "";
  uploadStore.previousFileUrl = "";
  selectedRow.value = cloneDeep(row);
  await nextTick();
  //@ts-ignore
  dialogRef?.value.open();
};
// const onCreateClicked = async () => {
//   selectedRow.value = Provider.create();
//   await nextTick();
//   //@ts-ignore
//   dialogRef?.value.open();
// };
const provider_columns: QTableColumn[] = [
  tableHelper.createButtonColumn(
    nuxtApp.$t(I18Global.details),
    "detailsButton"
  ),
  tableHelper.createColumn(
    ProviderColumns.id,
    nuxtApp.$t(I18Provider.Fields.id)
  ),
  tableHelper.createColumn(
    UserColumns.first_name,
    nuxtApp.$t(I18User.Fields.first_name),
    "fullname"
  ),
  tableHelper.createColumn(
    UserColumns.mobile,
    nuxtApp.$t(I18User.Fields.mobile)
  ),
  tableHelper.createColumn(
    ProviderColumns.gender,
    nuxtApp.$t(I18Provider.Fields.gender)
  ),
  tableHelper.createColumn(
    ProviderColumns.country_id,
    nuxtApp.$t(I18Provider.Fields.country_id)
  ),
  tableHelper.createColumn(
    ProviderColumns.work_id,
    nuxtApp.$t(I18Provider.Fields.work_id)
  ),
];
</script>

<style lang="css"></style>
