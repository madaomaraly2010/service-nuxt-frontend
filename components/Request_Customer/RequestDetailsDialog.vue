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
          <RequestCustomerRequestDetailsForm
            :dialog-ref="baseDialogRef"
            ref="requestFormRef"
            :request-customer="requestCustomer"
          ></RequestCustomerRequestDetailsForm>
        </q-card-section>
      </q-card>
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import { RequestCustomer } from "~/Data/Models";
const baseDialogRef = ref();
const requestFormRef = ref();
defineProps({
  requestCustomer: {
    type: RequestCustomer,
    required: true,
  },
});
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
