<template>
  <div>
    <BaseDialogForm ref="baseDialogRef" width="50vw" height="50vh">
      <PackageForm
        :dialog-ref="baseDialogRef"
        ref="formRef"
        :edit-row="editRow"
      ></PackageForm>
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

//
</script>

<style scoped></style>
