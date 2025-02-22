<template>
  <q-dialog
    v-model="isOpen"
    :persistent="persistent"
    :transition-show="transitionShow"
    :transition-hide="transitionHide"
  >
    <q-card
      :style="{ maxWidth: maxWidth, maxHeight: maxHeight }"
      class="q-pa-sm"
    >
      <!-- Header Slot (Title & Close Button) -->
      <q-card-section class="row items-center">
        <slot name="header">
          <div class="text-h6">{{ title }}</div>
        </slot>
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
      <q-card-actions align="right">
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
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import { defineProps, defineEmits, ref, defineExpose } from "vue";

// Props for customization
const props = defineProps({
  title: {
    type: String,
    default: "Dialog",
  },
  minWidth: {
    type: String,
    default: "500px",
  },
  maxWidth: {
    type: String,
    default: "50vw",
  },
  maxHeight: {
    type: String,
    default: "85vh",
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: true,
  },
  transitionShow: {
    type: String,
    default: "fade",
  },
  transitionHide: {
    type: String,
    default: "fade",
  },
});

const emit = defineEmits(["save", "cancel", "close"]);
const isOpen = ref(false);

// Methods to open and close the dialog
const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
  emit("close");
};

const handleSave = () => {
  emit("save");
  close();
};

const handleCancel = () => {
  emit("cancel");
  close();
};

const handleClose = () => {
  emit("close");
  close();
};

// Expose methods to the parent
defineExpose({ open, close });
</script>
