<template>
  <BaseForm
    :on-save="onSave"
    :title="$t(I18Package.title)"
    :show-cancel-button="true"
    :show-save-button="true"
    :dialog-ref="dialogRef"
  >
    <div class="" :dir="globalStore.direction">
      <div class="row items-center q-col-gutter-none">
        <div class="col-12">
          <BaseTextInput
            :label="$t(I18Packageitem.Fields.name)"
            v-model="editRow.arb_name"
          ></BaseTextInput>
        </div>
      </div>

      <QSeparator class="q-my-lg"></QSeparator>
      <!-- total_amount   discount_percent -->
      <div class="col-12 row items-center" :dir="globalStore.direction">
        <div class="col-4 row">
          <!-- <div class="col-7"> -->
          <BaseNumberInput
            v-model="editRow.month_number"
            :label="$t(I18Packageitem.Fields.month_number)"
            :min="1"
            :max="12"
            :show-spin="true"
          ></BaseNumberInput>
          <!-- </div> -->
        </div>
        <div class="col-4 row">
          <!-- <div class="col-7"> -->
          <BaseNumberInput
            v-model="editRow.discount_percent"
            :label="$t(I18Packageitem.Fields.discount_percent)"
            prefix="%"
            :min="0"
            :max="100"
          ></BaseNumberInput>
          <!-- </div> -->
        </div>

        <div class="col-4 row">
          <!-- <div class="col-7"> -->
          <BaseNumberInput
            v-model="editRow.down_payment_percent"
            :label="$t(I18Packageitem.Fields.down_payment_percent)"
            prefix="%"
            :min="0"
            :max="100"
          ></BaseNumberInput>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import type { PackageItemResponse } from "~/Data/Responses/Model-Responses";
import { useGlobalStore, usePackageItemStore } from "~/Data/Stores";
// import { date } from "quasar";
import type { IPackageItemFormProps } from "~/common/common-types";
import { I18Messages, I18Package, I18Packageitem } from "~/locales/i18-key";

const globalStore = useGlobalStore();
const props = defineProps<IPackageItemFormProps>();
const store = usePackageItemStore();
const uiHelper = useUIHelper();

const onSave = async () => {
  let response: PackageItemResponse = await store.save(props.editRow);
  if (response.success) {
    uiHelper.showSucceedMessage(I18Messages.operation_successed);
  }
};
</script>

<style scoped>
.border {
  border-radius: 5px;
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
}
</style>
