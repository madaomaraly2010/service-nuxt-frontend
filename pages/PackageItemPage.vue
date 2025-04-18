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
import { usePackageItemStore } from "~/Data/Stores";
import { I18Package } from "~/locales/i18-key";

const store = usePackageItemStore();

await store.findAll();
</script>

<style scoped></style>
