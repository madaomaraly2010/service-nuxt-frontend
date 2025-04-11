<template>
  <QForm ref="qFormRef">
    <slot></slot>
  </QForm>
  <div class="q-my-lg"></div>
  <slot name="actions">
    <div class="row">
      <div class="row q-gutter-lg col-3">
        <q-btn
          class="col"
          v-if="showSaveButton"
          :loading="saveLoading"
          :label="getSaveLabel"
          color="primary"
          @click="handleSave"
        />
        <q-btn
          class="col"
          v-if="showCancelButton"
          :label="getCancelLabel"
          color="negative"
          v-close-popup
          @click="handleCancel"
        />
      </div>
    </div>
  </slot>
</template>

<script setup lang="ts" generic="ModelType">
import type { QForm } from "quasar";
// import type { ModelResponse } from "~/Data/Responses/ModelResponse-Class";
const nuxtApp = useNuxtApp();
interface IFormPropType {
  // onSave?: () => Promise<ModelResponse<ModelType>>;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
  saveLoading?: boolean;
}
const props = withDefaults(defineProps<IFormPropType>(), {
  showCancelButton: true,
  showSaveButton: true,
  saveLoading: false,
  //saveLabel: "save",
  //cancelLabel: "cancel",
});
const qFormRef: Ref<QForm | undefined> = ref();

const getSaveLabel = computed(
  () => props.saveLabel || nuxtApp.$t("global.save")
);
const getCancelLabel = computed(
  () => props.cancelLabel || nuxtApp.$t("global.cancel")
);

const emit = defineEmits(["save", "cancel"]);
const handleSave = async () => {
  debugger;
  let validated: boolean | undefined = await qFormRef.value?.validate();
  if (validated) {
    // let response: ModelResponse<ModelType> | undefined = await props.onSave?.();
    // if (response?.success) {
    //   nuxtApp.$q.notify({
    //     message: nuxtApp.$t("messages.operation_successed"),
    //     position: "top",
    //   });
    // }
    emit("save");
  }
};
const handleCancel = () => {
  emit("cancel");
};
</script>

<style scoped></style>
