<template>
  <div>
    <q-input
      ref="qInputRef"
      outlined
      dense
      v-model="theValue"
      :label="label"
      v-bind="$attrs"
      lazy-rules
      :rules="rules"
      :type="getType()"
    >
      <template v-if="$slots.prepend" v-slot:prepend>
        <slot name="prepend"></slot>
      </template>
      <template v-slot:append>
        <q-btn
          v-if="isPassword"
          flat
          dense
          round
          :icon="isPwd ? 'visibility' : 'visibility_off'"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts" setup>
import type { QInput, QInputProps } from "quasar";
interface ITextInputPropType {
  isPassword?: boolean;
}
const props = defineProps<ITextInputPropType & QInputProps>();
const isPwd = ref(true);
const qInputRef: Ref<QInput | null> = ref<QInput | null>(null);
// const props = defineProps({
//   rules: {
//     type: Object as PropType<ValidationRule[]>,
//   },
//   label: {
//     type: String as PropType<string>,
//   },
//   isPassword: {
//     type: Boolean as PropType<boolean>,
//   },
// });

defineExpose({
  validate: () => qInputRef?.value?.validate?.(),
  resetValidation: () => qInputRef?.value?.resetValidation?.(),
});
const theValue = defineModel<string>();
const getType = () => {
  if (props.isPassword) {
    if (isPwd.value) return "password";
    return "text";
  }
  return "text";
};
</script>

<style scoped>
.rtl-label .q-field__label {
  text-align: right;
  direction: rtl;
}
</style>
