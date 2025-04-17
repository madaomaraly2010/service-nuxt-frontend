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

      <q-separator />

      <!-- Footer Slot (Buttons) -->
      <!-- <q-card-actions align="right">
        <slot name="footer">
          <q-btn label="Save" color="primary" @click="handleSave" />
          <q-btn
            label="Cancel"
            color="negative"
            flat
            v-close-popup
            @click="handleCancel"
          />
        </slot>
      </q-card-actions> -->
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/Data/Stores";
import type { IBaseDialogProps } from "~/common/common-types";
//====
// import { defineProps, defineEmits, ref, defineExpose } from "vue";
const globalStore = useGlobalStore();
// Props for customization

// //@ts-ignore
const props = defineProps<IBaseDialogProps>();

const emit = defineEmits(["save", "cancel", "close"]);
const isOpen = ref(false);

// // Methods to open and close the dialog
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

// const handleSave = () => {
//   emit("save");
//   close();
// };

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
//  // Expose methods to the parent
// eslint-disable-next-line no-undef
// defineExpose({ open, close, cancel });
</script>
