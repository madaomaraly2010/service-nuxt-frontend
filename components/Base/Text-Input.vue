<template>
  <div>
    <q-input
      outlined
      filled
      v-model="theValue"
      :label="label"
      stack-label
      v-bind="$attrs"
      lazy-rules
      :rules="rules"
      :type="getType()"
    >
      <template v-if="$slots.prepend" v-slot:prepend>
        <slot name="prepend"></slot>
      </template>
      <template v-if="isPassword" v-slot:append>
        <q-btn
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
import type { ValidationRule } from "quasar";
import type { PropType } from "vue";
const isPwd = ref(true);
const props = defineProps({
  rules: {
    type: Object as PropType<ValidationRule[]>,
  },
  label: {
    type: String as PropType<string>,
  },
  isPassword: {
    type: Boolean as PropType<boolean>,
  },
});
const theValue = defineModel<string>();
const getType = () => {
  if (props.isPassword) {
    if (isPwd.value) return "text";
    return "password";
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
