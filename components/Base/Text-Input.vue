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
      :rules="getRules"
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
import { ValidatorRules } from "~/common/validations";
interface ITextInputPropType {
  isPassword?: boolean;
  required?: boolean;
  email?: boolean;
  mobile?: boolean;
}
const props = defineProps<ITextInputPropType & QInputProps>();
const isPwd = ref(true);
const qInputRef: Ref<QInput | null> = ref<QInput | null>(null);
const nuxtApp = useNuxtApp();

const getRules = computed(() => {
  const { required = false, email = false, mobile = false } = props;
  const vRules: ((value: any) => any)[] = [];
  if (required) vRules.push(ValidatorRules.required(nuxtApp.$t));
  if (email) vRules.push(ValidatorRules.email(nuxtApp.$t));
  if (mobile) vRules.push(ValidatorRules.mobile(nuxtApp.$t));
  return vRules;
});
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
