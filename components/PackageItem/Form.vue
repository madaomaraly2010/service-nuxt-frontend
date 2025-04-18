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
            :label="$t('package.fields.name')"
            v-model="editRow.arb_name"
          ></BaseTextInput>
        </div>
      </div>
      <QSeparator class="q-my-lg"></QSeparator>
      <div class="row q-gutter-md">
        <div class="col">
          <BaseDateInput
            :label="$t('package.fields.start_date')"
            v-model="editRow.start_date"
          >
          </BaseDateInput>
        </div>
        <div class="col">
          <BaseDateInput
            :label="$t('package.fields.end_date')"
            v-model="editRow.end_date"
          >
          </BaseDateInput>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <!-- total_amount   discount_percent -->
    <div class="col-12 row items-center" :dir="globalStore.direction">
      <div class="col-4 row">
        <div class="col-7">
          <!-- <span>SR {{ editRow.down_payment }}</span> -->
          <BaseNumberInput
            v-model="editRow.valid_days"
            :label="$t('package.fields.valid_days')"
            :min="0"
            :max="100"
            :show-spin="true"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-4">
        <QToggle
          :label="$t(I18Package.Fields.is_active)"
          v-model="editRow.is_active"
          color="green"
          :trueValue="1"
          :falseValue="0"
          size="lg"
        ></QToggle>
      </div>
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import type { PackageResponse } from "~/Data/Responses/Model-Responses";
import { useGlobalStore, usePackageStore } from "~/Data/Stores";
// import { date } from "quasar";
import type { IPackageFormProps } from "~/common/common-types";
import { I18Messages, I18Package } from "~/locales/i18-key";

const globalStore = useGlobalStore();
const props = defineProps<IPackageFormProps>();
const store = usePackageStore();
const uiHelper = useUIHelper();

const onSave = async () => {
  let response: PackageResponse = await store.save(props.editRow);
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
