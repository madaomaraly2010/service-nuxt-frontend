<template>
  <div>
    <q-page padding>
      <div class="row text-h4">
        {{ $t("request_customer.title") }}
      </div>
      <div class="row">
        <div class="col offset-1">
          <RequestCustomerTable></RequestCustomerTable>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { useRequestCustomerStore } from "~/Data/Stores";

const store = useRequestCustomerStore();

// await useRequestStatusStore().findAll();

await store.findAll();
</script>

<style scoped></style>
