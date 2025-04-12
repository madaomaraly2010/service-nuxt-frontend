<template>
  <div>
    <BaseDialogForm
      v-bind="properties"
      :form-ref="formRef"
      ref="baseDialogRef"
      width="50vw"
      height="60vh"
    >
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          <PackageForm
            :show-save-button="true"
            :show-cancel-button="true"
            :dialog-ref="baseDialogRef"
            ref="formRef"
            :edit-row="editRow"
          ></PackageForm>
        </q-card-section>
      </q-card>
    </BaseDialogForm>
  </div>
</template>

<script setup lang="ts">
import type { IPackageDialogProps } from "~/common/common-types";

const baseDialogRef = ref();
const formRef = ref();

// {
//   requestCustomer: {
//     type: RequestCustomer,
//     required: true,
//   },
// }
const props = defineProps<IPackageDialogProps>();
//@ts-ignore
const open = () => {
  //@ts-ignore
  baseDialogRef.value.open();
};
defineExpose({
  open,
});

const properties = computed(
  (): IPackageDialogProps => ({
    ...props,
    
  })
);
</script>

<style scoped></style>
