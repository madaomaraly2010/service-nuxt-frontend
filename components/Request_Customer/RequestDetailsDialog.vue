<template>
  <div>
    <BaseDialogForm ref="baseDialogRef">
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          <RequestCustomerRequestDetails
            :request-customer="requestCustomer"
          ></RequestCustomerRequestDetails>
        </q-card-section>
      </q-card>
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import { RequestCustomer } from "~/Data/Models";
const baseDialogRef = ref(null);
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
