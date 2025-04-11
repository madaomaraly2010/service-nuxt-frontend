<template>
  <BaseForm @save="onSave" :save-loading="loading" v-bind="props">
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row items-center q-col-gutter-none">
        <div class="col-4 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.month_number") }}
        </div>
        <div class="col-8">
          <BaseNumberInput
            v-model="requestCustomer.month_number"
            :min="1"
            :max="12"
            :show-spin="true"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.request_date") }}
        </div>
        <div class="col">
          <span>{{
            date.formatDate(requestCustomer?.request_date, "DD/MM/YYYY")
          }}</span>
        </div>
      </div>

      <div class="col-4 row">
        <div class="col">
          <RequestCustomerStatusDropDown
            v-model="requestCustomer.request_status_id"
          >
          </RequestCustomerStatusDropDown>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row items-center" :dir="globalStore.direction">
      <ProviderFullName
        class="col-4"
        v-if="requestCustomer.provider"
        :provider="requestCustomer.provider"
      ></ProviderFullName>
      <WorkDetails
        class="col-4"
        v-if="requestCustomer.work"
        :work="requestCustomer.work"
      ></WorkDetails>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>

    <!-- total_amount   discount_percent -->
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row">
        <div class="col-2 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.down_payment") }}
        </div>
        <div class="col-7">
          <!-- <span>SR {{ requestCustomer.down_payment }}</span> -->
          <BaseNumberInput
            v-model="requestCustomer.down_payment"
            :show-currency="true"
            currency="SR"
          ></BaseNumberInput>
        </div>
      </div>
      <div class="col-4 row">
        <div class="col-3 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.discount_value") }}
        </div>
        <div class="col-7">
          <span>SR {{ requestCustomer.discountValue }}</span>
        </div>
      </div>

      <div class="col-4 row q-gutter-xs">
        <div class="col-1 text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.discount_percent") }}
        </div>
        <div class="col-10">
          <!-- <span>{{ requestCustomer.discountPercent }}%</span> -->
          <BaseNumberInput
            v-model="requestCustomer.discountPercent"
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
          <span>SR {{ requestCustomer.total }}</span>
        </div>
      </div>
      <div class="col-4 row q-gutter-xs border bg-green-1">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.net_total_amount") }}
        </div>
        <div class="col">
          <span>SR {{ requestCustomer.wage_amount }}</span>
        </div>
      </div>
    </div>
  </BaseForm>
</template>

<script setup lang="ts">
import { useGlobalStore, useRequestCustomerStore } from "~/Data/Stores";
import { date } from "quasar";
import type { IRequestDetailsFormProps } from "~/common/common-types";

const globalStore = useGlobalStore();
const props = defineProps<IRequestDetailsFormProps>();
const requestStore = useRequestCustomerStore();
const loading = ref();
const onSave = async () => {
  loading.value = true;
  await requestStore.update(props.requestCustomer);
  loading.value = false;
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
