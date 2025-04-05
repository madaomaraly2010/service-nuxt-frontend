<template>
  <div>
    <div class="row" :dir="globalStore.direction">
      <div class="col row">
        <div class="col-4 text-grey-8">
          {{ $t("request_customer.fields.month_number") }}
        </div>
        <div class="col-1">
          <span>{{ 14 }}</span>
        </div>
      </div>
      <div class="col row">
        <div class="col-4 text-grey-8">
          {{ $t("request_customer.fields.request_date") }}
        </div>
        <div class="col-1">
          <span>{{
            date.formatDate(requestCustomer?.request_date, "DD/MM/YYYY")
          }}</span>
        </div>
      </div>
    </div>
    <QSeparator class="q-my-lg"></QSeparator>
    <div class="row q-gutter-lg">
      <ProviderFullName
        class="col"
        v-if="requestCustomer.provider"
        :provider="requestCustomer.provider"
      ></ProviderFullName>
      <WorkDetails
        class="col"
        v-if="requestCustomer.work"
        :work="requestCustomer.work"
      ></WorkDetails>
    </div>

    <QSeparator class="q-my-lg"></QSeparator>
  </div>

  <!-- total_amount   discount_percent -->
  <div class="row q-gutter-lg" :dir="globalStore.direction">
    <div class="col row">
      <div class="col-5 text-grey-8">
        {{ $t("request_customer.fields.down_payment") }}
      </div>
      <div class="col-2">
        <span>{{ 53455454 }}</span>
      </div>
    </div>
    <div class="col row">
      <div class="col-6 text-grey-8">
        {{ $t("request_customer.fields.discount_value") }}
      </div>
      <div class="col-2">
        <span>{{ 4532534543 }}</span>
      </div>
    </div>

    <div class="col row">
      <div class="col-6 text-grey-8">
        {{ $t("request_customer.fields.discount_percent") }}
      </div>
      <div class="col-2">
        <span>{{ 53453465 }}</span>
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

<style scoped></style>
