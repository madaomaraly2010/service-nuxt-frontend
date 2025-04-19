<template>
  <div>
    <q-page padding>
      <div class="row text-h4">
        {{ $t(I18Package.title) }}
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
import { I18Package } from "~/locales/i18-key";
debugger;
const store = usePackageStore();

await store.findAll({
  reFetch: true,
});
</script>

<style scoped></style>
