<template>
  <div>
    <BaseDialogForm ref="baseDialogRef" width="50vw" height="50vh">
      <PackageItemForm
        :package-row="packageRow"
        :dialog-ref="baseDialogRef"
        ref="formRef"
        :edit-row="editRow"
      ></PackageItemForm>
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import type { IPackageItemDialogProps } from "~/common/common-types";

const baseDialogRef = ref();
const formRef = ref();

defineProps<IPackageItemDialogProps>();
//@ts-ignore
const open = () => {
  //@ts-ignore
  baseDialogRef.value.open();
};
defineExpose({
  open,
});

//
</script>

<style scoped></style>
