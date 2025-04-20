<template>
  <q-toolbar class="q-my-lg q-pa-xs">
    <q-item-label :dir="globalStore.direction" class="col-12 text-h6">{{
      title
    }}</q-item-label>
  </q-toolbar>

  <QForm ref="qFormRef">
    <slot></slot>
  </QForm>
  <QSeparator class="q-my-md"></QSeparator>
  <slot name="actions">
    <div class="">
      <div class="row">
        <q-btn-group
          class="row col"
          unelevated
          rounded
          :spread="!showSaveButton || !showCancelButton"
        >
          <q-btn
            class="cursor-pointer"
            v-if="showSaveButton"
            :loading="loading"
            :label="getSaveLabel"
            color="blue-8"
            rounded
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
      </div>
    </div>
  </slot>
</template>

<script setup lang="ts" generic="ModelType">
import type { QForm } from "quasar";
import type { IBaseFormProps } from "~/common/common-types";
import { I18Global } from "~/locales/i18-key";
import { useGlobalStore } from "~/Data/Stores";

const nuxtApp = useNuxtApp();
const props = defineProps<IBaseFormProps>();
const qFormRef: Ref<QForm | undefined> = ref();
const loading = ref(false);
const globalStore = useGlobalStore();
const getSaveLabel = computed(
  () => props.saveLabel || nuxtApp.$t(I18Global.save)
);
const getCancelLabel = computed(
  () => props.cancelLabel || nuxtApp.$t(I18Global.cancel) // I18Global.Fields.cancel
);

const emit = defineEmits(["save", "cancel"]);
const handleSave = async () => {
  let validated: boolean | undefined = await qFormRef.value?.validate();
  let preValidate: boolean =
    (await props.onPrevalidate?.(qFormRef.value as QForm)) ?? true;

  if (validated && preValidate) {
    loading.value = true;
    //@ts-ignore
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    //await sleep(3000); //
    await props.onSave?.();
    loading.value = false;
    // debugger;
    props.dialogRef?.close();
  }
};
const handleCancel = () => {
  emit("cancel");
};
</script>

<style scoped></style>
