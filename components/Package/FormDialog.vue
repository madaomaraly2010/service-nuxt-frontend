<template>
  <div>
    <BaseDialogForm ref="baseDialogRef" width="50vw" height="50vh">
      <!-- <q-card flat class="q-pa-md">
        <q-card-section class="text-h6 text-primary"> -->
      <PackageForm
        :dialog-ref="baseDialogRef"
        ref="formRef"
        :edit-row="editRow"
      ></PackageForm>
      <!-- </q-card-section>
      </q-card> -->
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import type { IPackageDialogProps } from "~/common/common-types";

const baseDialogRef = ref();
const formRef = ref();

defineProps<IPackageDialogProps>();
//@ts-ignore
const open = () => {
  //@ts-ignore
  baseDialogRef.value.open();
};
defineExpose({
  open,
});

// const properties = computed(
//   (): IPackageDialogProps => ({
//     ...props,
//   })
// );
</script>

<style scoped></style>
