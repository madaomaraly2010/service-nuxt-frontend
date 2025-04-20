<template>
  <q-select
    v-bind="props"
    ref="qSelectRef"
    v-model="theModelValue"
    outlined
    dense
  >
    <!-- Prepend Slot -->
    <template v-if="$slots.prepend" v-slot:prepend>
      <slot name="prepend"></slot>
    </template>

    <!-- Custom Selected Option -->
    <template v-if="$slots.selected" v-slot:selected>
      <slot name="selected"></slot>
    </template>

    <!-- Dropdown Options -->
    <template v-if="$slots.option" v-slot:option="scope">
      <slot name="option" v-bind="scope"></slot>
    </template>

    <!-- Append Slot -->
    <template v-if="$slots.append" v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import type { QSelect, QSelectProps } from "quasar";
import { defineModel } from "vue";
const theModelValue = defineModel<number>();

interface ISelectPropType {}

const props = defineProps<ISelectPropType & QSelectProps>();

const qSelectRef: Ref<QSelect | null> = ref(null);

defineExpose({
  validate: () => qSelectRef?.value?.validate?.(),
  resetValidation: () => qSelectRef?.value?.resetValidation?.(),
});
</script>
