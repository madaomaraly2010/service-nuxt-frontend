<template>
  <div>
    <q-page padding>
      <div class="row text-h4">
        {{ $t(I18Requestcustomer.title) }}
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
import { useRequestCustomerStore, useLookupStore } from "~/Data/Stores";
import { I18Requestcustomer } from "~/locales/i18-key";

const store = useRequestCustomerStore();

// const statusStore = useRequestStatusStore();
// await statusStore.findAll();
// provide(TableKeys.REQUEST_STATUS_KEY, statusStore);
await useLookupStore().fetchAllLookups();

await store.findAll();
</script>

<style scoped></style>
