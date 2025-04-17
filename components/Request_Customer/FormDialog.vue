<template>
  <div>
    <BaseDialogForm
      :form-ref="requestFormRef"
      ref="baseDialogRef"
      width="50vw"
      height="60vh"
    >
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          <RequestCustomerForm
            :dialog-ref="baseDialogRef"
            ref="requestFormRef"
            :edit-row="editRow"
          ></RequestCustomerForm>
        </q-card-section>
      </q-card>
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import type { IRequestCustomerDialogProps } from "~/common/common-types";
const baseDialogRef = ref();
const requestFormRef = ref();

defineProps<IRequestCustomerDialogProps>();

//@ts-ignore
const open = () => {
  //@ts-ignore
  baseDialogRef.value.open();
};
defineExpose({
  open,
});
</script>

<style scoped></style>
