<template>
  <BaseForm :on-save="onSave" v-bind="properties">
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row items-center q-col-gutter-none">
        <div class="col-4 text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.month_number) }}
        </div>
        <div class="col-8">
          <BaseNumberInput
            v-model="editRow.month_number"
            :min="1"
            :max="12"
            :show-spin="true"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.request_date) }}
        </div>
        <div class="col">
          <span>{{
            date.formatDate(editRow?.request_date, "DD/MM/YYYY")
          }}</span>
        </div>
      </div>

      <div class="col-4 row">
        <div class="col">
          <RequestCustomerStatusDropDown v-model="editRow.request_status_id">
          </RequestCustomerStatusDropDown>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row items-center" :dir="globalStore.direction">
      <ProviderFullName
        class="col-4"
        v-if="editRow.provider"
        :provider="editRow.provider"
      ></ProviderFullName>
      <WorkDetails
        class="col-4"
        v-if="editRow.work"
        :work="editRow.work"
      ></WorkDetails>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>

    <!-- total_amount   discount_percent -->
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row">
        <div class="col-2 text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.down_payment) }}
        </div>
        <div class="col-7">
          <!-- <span>SR {{ requestCustomer.down_payment }}</span> -->
          <BaseNumberInput
            v-model="editRow.down_payment"
            :show-currency="true"
            :min="0"
            :max="10000000"
            currency="SR"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col-3 text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.discount_value) }}
        </div>
        <div class="col-7">
          <span>SR {{ editRow.discountValue }}</span>
        </div>
      </div>

      <div class="col-4 row q-gutter-xs">
        <div class="col-1 text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.discount_percent) }}
        </div>
        <div class="col-10">
          <span>{{ editRow.discountPercent.toFixed(1) }}%</span>
          <!-- <BaseNumberInput
            v-if="editRow.discountPercent"
            v-model="editRow.discountPercent"
            :show-spin="true"
            :show-percent="true"
            :min="0"
            :max="100"
          ></BaseNumberInput> -->
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row" :dir="globalStore.direction">
      <div class="col-4 row q-gutter-xs">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.total_before_discount) }}
        </div>
        <div class="col">
          <span>SR {{ editRow.total }}</span>
        </div>
      </div>
      <div class="col-4 row q-gutter-xs border bg-green-1">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t(I18Requestcustomer.Fields.net_total_amount) }}
        </div>
        <div class="col">
          <span>SR {{ editRow.wage_amount }}</span>
        </div>
      </div>
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import { useGlobalStore, useRequestCustomerStore } from "~/Data/Stores";
import { date } from "quasar";
import type { IRequestCustomerFormProps } from "~/common/common-types";
import { I18Requestcustomer } from "~/locales/i18-key";

const globalStore = useGlobalStore();
const props = defineProps<IRequestCustomerFormProps>();
const requestStore = useRequestCustomerStore();
const loading = ref();
const onSave = async () => {
  loading.value = true;
  await requestStore.update(props.editRow);
  loading.value = false;
};
const properties = computed(
  (): IRequestCustomerFormProps => ({
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
