<template>
  <div>
    <div class="row items-center" :dir="globalStore.direction">
      <div class="col-4 row items-center">
        <div class="col text-grey-8 text-subtitle1">
          {{ $t("request_customer.fields.month_number") }}
        </div>
        <div class="col">
          <span>{{ 14 }}</span>
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
          <request-customer-status
            :request-customer="requestCustomer"
            :show-label="true"
          ></request-customer-status>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row" :dir="globalStore.direction">
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
  </div>

  <!-- total_amount   discount_percent -->
  <div class="row q-gutter-lg justify-between" :dir="globalStore.direction">
    <div class="col row">
      <div class="col text-grey-8 text-subtitle1">
        {{ $t("request_customer.fields.down_payment") }}
      </div>
      <div class="col">
        <span>SR {{ requestCustomer.down_payment }}</span>
      </div>
    </div>
    <div class="col row">
      <div class="col text-grey-8 text-subtitle1">
        {{ $t("request_customer.fields.discount_value") }}
      </div>
      <div class="col">
        <span>SR {{ requestCustomer.discountValue }}</span>
      </div>
    </div>

    <div class="col row">
      <div class="col text-grey-8 text-subtitle1">
        {{ $t("request_customer.fields.discount_percent") }}
      </div>
      <div class="col">
        <span>{{ requestCustomer.discountPercent }}%</span>
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
</template>

<script setup lang="ts">
/*eslint no-unused-vars: "off"*/
import { RequestCustomer } from "~/Data/Models";
import { useGlobalStore } from "~/Data/Stores";
import { date } from "quasar";
const globalStore = useGlobalStore();
defineProps({
  requestCustomer: {
    type: RequestCustomer,
    required: true,
  },
});
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
