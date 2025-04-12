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
        <div class="col-2 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.down_payment") }}
        </div>
        <div class="col-7">
          <!-- <span>SR {{ editRow.down_payment }}</span> -->
          <BaseNumberInput
            v-model="editRow.down_payment"
            :show-currency="true"
            :min="0"
            currency="SR"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col-3 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.discount_value") }}
        </div>
        <div class="col-7">
          <span>SR {{ editRow.discountValue }}</span>
        </div>
      </div>

      <div class="col-4 row q-gutter-xs">
        <div class="col-1 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.discount_percent") }}
        </div>
        <div class="col-10">
          <!-- <span>{{ editRow.discountPercent }}%</span> -->
          <BaseNumberInput
            v-model="editRow.discountPercent"
            :show-spin="true"
            :show-percent="true"
            :min="0"
            :max="100"
          ></BaseNumberInput>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row" :dir="globalStore.direction">
      <div class="col-4 row q-gutter-xs">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.total_before_discount") }}
        </div>
        <div class="col">
          <span>SR {{ editRow.total }}</span>
        </div>
      </div>
      <div class="col-4 row q-gutter-xs border bg-green-1">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.net_total_amount") }}
        </div>
        <div class="col">
          <span>SR {{ editRow.wage_amount }}</span>
        </div>
      </div>
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import { useGlobalStore, usePackageStore } from "~/Data/Stores";
import { date } from "quasar";
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
