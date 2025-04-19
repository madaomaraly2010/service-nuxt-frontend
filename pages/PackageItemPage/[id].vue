<template>
  <div>
    <q-page padding>
      <div class="row text-h4">
        {{ $t(I18Package.title) }}
      </div>
      <div class="row">
        <div class="col offset-1">
          <PackageItemTable
            v-if="packageRow"
            :package-row="packageRow"
          ></PackageItemTable>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import type { Package } from "~/Data/Models";
import {
  PackageItemResponse,
  PackageResponse,
} from "~/Data/Responses/Model-Responses";
import { usePackageItemStore } from "~/Data/Stores";
import { I18Package } from "~/locales/i18-key";
const store = usePackageItemStore();
const route = useRoute();
// const packageStore = usePackageStore();
debugger;

const packageRow: Ref<Package | undefined> = ref<Package | undefined>();

const response: PackageResponse = await usePackageService().findOne(
  +route.params.id
);
if (response.success && response.data!.length > 0) {
  packageRow.value = response.data![0];
  // packageStore.list.find(
  //   (item) => item.id === +route.params.id
  // );
  if (packageRow.value?.id) {
    let response: PackageItemResponse = await store.findAllByPackage(
      packageRow.value.id,
      {
        reFetch: true,
      }
    );
    console.log("PackageItemResponse", response);
  }
}
</script>

<style scoped></style>
