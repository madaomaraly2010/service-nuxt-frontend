<template>
  <QForm ref="qFormRef">
    <slot></slot>
  </QForm>
  <q-card>
    <QCardActions>
      <q-btn label="Save" color="primary" @click="handleSave" />
      <q-btn
        label="Cancel"
        color="negative"
        flat
        v-close-popup
        @click="handleCancel"
      />
    </QCardActions>
  </q-card>
</template>

<script setup lang="ts" generic="ModelType">
import type { QForm } from "quasar";
import type { ModelResponse } from "~/Data/Responses/ModelResponse-Class";

interface IFormPropType {
  onSave?: () => Promise<ModelResponse<ModelType>>;
}
const props = defineProps<IFormPropType>();
const qFormRef: Ref<QForm | undefined> = ref();

const emit = defineEmits(["save", "cancel"]);

const handleSave = async () => {
  let validated: boolean | undefined = await qFormRef.value?.validate();

  if (validated) {
    let response: ModelResponse<ModelType> = await props.onSave?.();
  }
};
const handleCancel = () => {};
</script>

<style scoped></style>
