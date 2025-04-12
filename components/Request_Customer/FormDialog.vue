<template>
  <div>
    <BaseDialogForm
      v-bind="properties"
      :form-ref="requestFormRef"
      ref="baseDialogRef"
      width="50vw"
      height="60vh"
    >
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          <RequestCustomerForm
            :show-save-button="true"
            :show-cancel-button="true"
            :save-label="'OK'"
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

// {
//   requestCustomer: {
//     type: RequestCustomer,
//     required: true,
//   },
// }
const props = defineProps<IRequestCustomerDialogProps>();

//@ts-ignore
const open = () => {
  //@ts-ignore
  baseDialogRef.value.open();
};
defineExpose({
  open,
});

const properties = computed(
  (): IRequestCustomerDialogProps => ({
    ...props,
  })
);
</script>

<style scoped></style>
