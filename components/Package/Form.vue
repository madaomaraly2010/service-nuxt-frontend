<template>
  <BaseForm :on-save="onSave" v-bind="properties">
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row items-center q-col-gutter-none">
        <div>
          <BaseTextInput
            :label="$t('package.fields.name')"
            v-model="editRow.arb_name"
          ></BaseTextInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col">
          <BaseDateInput
            :label="$t('package.fields.start_date')"
            v-model="editRow.start_date"
          >
          </BaseDateInput>
        </div>
      </div>

      <div class="col-4 row">
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
    <div class="row items-center" :dir="globalStore.direction">
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
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import { useGlobalStore, usePackageStore } from "~/Data/Stores";
// import { date } from "quasar";
import type { IPackageFormProps } from "~/common/common-types";

const globalStore = useGlobalStore();
const props = defineProps<IPackageFormProps>();
const store = usePackageStore();
const loading = ref();
const onSave = async () => {
  loading.value = true;
  await store.update(props.editRow);
  loading.value = false;
};
const properties = computed(
  (): IPackageFormProps => ({
    ...props,
  })
);
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
