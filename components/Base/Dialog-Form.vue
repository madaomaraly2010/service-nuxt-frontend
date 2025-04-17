<template>
  <q-dialog
    class="q-pa-sm"
    v-model="isOpen"
    :persistent="persistent"
    :transition-show="transitionShow"
    :transition-hide="transitionHide"
  >
    <q-card
      flat
      class="q-pa-sm no-border"
      :style="{
        minWidth: width,
        minHeight: height,
      }"
    >
      <!-- Header Slot (Title & Close Button) -->
      <q-card-section
        class="row items-center no-padding"
        :dir="globalStore.direction"
      >
        <slot name="header"> </slot>
        <q-space />
        <q-btn
          v-if="closable"
          icon="close"
          flat
          round
          dense
          v-close-popup
          @click="handleClose"
        />
      </q-card-section>

      <q-separator />

      <!-- Default Slot (Main Content) -->
      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/Data/Stores";
import type { IBaseDialogProps } from "~/common/common-types";
const globalStore = useGlobalStore();
const props = defineProps<IBaseDialogProps>();
const emit = defineEmits(["cancel", "close"]);
const isOpen = ref(false);
const open = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
  emit("close");
};
const cancel = () => {
  handleCancel();
};
const handleCancel = () => {
  emit("cancel");
  close();
};
const handleClose = () => {
  // emit("close");
  close();
};
defineExpose({ open, close, cancel });
onMounted(() => {
  console.log("props.formRef", props.width);
});
</script>
