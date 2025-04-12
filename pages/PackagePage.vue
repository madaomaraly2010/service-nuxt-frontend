<template>
  <div>
    <q-page padding>
      <div class="row text-h4">
        {{ $t("request_customer.title") }}
      </div>
      <div class="row">
        <div class="col offset-1">
          <PackageTable></PackageTable>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { usePackageStore } from "~/Data/Stores";

const store = usePackageStore();

await store.findAll();
</script>

<style scoped></style>
