<template>
  <QForm ref="qFormRef">
    <slot></slot>
  </QForm>
  <div class="q-my-lg"></div>
  <slot name="actions">
    <div class="">
      <div class="row">
        <q-btn-group
          class="row col"
          unelevated
          :spread="!showSaveButton || !showCancelButton"
        >
          <q-btn
            class="cursor-pointer"
            v-if="showSaveButton"
            :loading="loading"
            :label="getSaveLabel"
            color="blue-8"
            @click="handleSave()"
          />
          <q-btn
            class="cursor-pointer q-mx-sm"
            v-if="showCancelButton"
            :label="getCancelLabel"
            color="red-4"
            v-close-popup
            @click="handleCancel"
          />
        </q-btn-group>
        <!-- <q-btn
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
        /> -->
      </div>
    </div>
  </slot>
</template>

<script setup lang="ts" generic="ModelType">
import type { QForm } from "quasar";
import type { IBaseFormProps } from "~/common/common-types";
// import type { ModelResponse } from "~/Data/Responses/ModelResponse-Class";
const nuxtApp = useNuxtApp();

const props = withDefaults(defineProps<IBaseFormProps>(), {
  showCancelButton: true,
  showSaveButton: true,
  saveLoading: false,
});
const qFormRef: Ref<QForm | undefined> = ref();
const loading = ref(false);
const getSaveLabel = computed(
  () => props.saveLabel || nuxtApp.$t("global.save")
);
const getCancelLabel = computed(
  () => props.cancelLabel || nuxtApp.$t("global.cancel")
);

const emit = defineEmits(["save", "cancel"]);
const handleSave = async () => {
  let validated: boolean | undefined = await qFormRef.value?.validate();
  if (validated) {
    // let response: ModelResponse<ModelType> | undefined = await props.onSave?.();
    // if (response?.success) {
    //   nuxtApp.$q.notify({
    //     message: nuxtApp.$t("messages.operation_successed"),
    //     position: "top",
    //   });
    // }
    //emit("save");
    loading.value = true;
    //@ts-ignore
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    //await sleep(3000); //
    await props.onSave?.();
    loading.value = false;
    debugger;
    props.dialogRef?.close();
  }
};
const handleCancel = () => {
  emit("cancel");
};
</script>

<style scoped></style>
