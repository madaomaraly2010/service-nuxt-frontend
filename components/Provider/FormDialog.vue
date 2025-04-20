<template>
  <BaseDialogForm ref="baseDialogRef" width="40vw" height="70vh">
    <ProviderForm
      ref="formRef"
      :dialog-ref="baseDialogRef"
      :edit-row="editRow"
    ></ProviderForm>
  </BaseDialogForm>
</template>

<script setup lang="ts">
import type { IProviderDialogProps } from "~/common/common-types";

const baseDialogRef = ref();
const formRef = ref();

defineProps<IProviderDialogProps>();
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
