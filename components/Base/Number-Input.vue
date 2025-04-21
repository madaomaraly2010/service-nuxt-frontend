<template>
  <q-input
    ref="qInputRef"
    v-bind="props"
    dense
    outlined
    hide-bottom-space
    v-model="theNumber"
    mask="#########"
    :rules="getRules()"
  >
    <template v-slot:append>
      <span class="text-subtitle1" v-if="currency && showCurrency">{{
        currency
      }}</span>

      <span class="text-subtitle1" v-if="showPercent"> % </span>
    </template>
    <template v-slot:after>
      <q-btn dense v-if="showSpin" flat round icon="add" @click="increase" />
    </template>
    <template v-slot:before>
      <q-btn dense v-if="showSpin" flat round icon="remove" @click="decrease" />
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import type { QInput, QInputProps } from "quasar";
import { ValidatorRules } from "~/common/validations";

interface INumberInputPropType {
  showSpin?: boolean;
  showCurrency?: boolean;
  currency?: string;
  min?: number;
  max?: number;
  required?: boolean;
  showPercent?: boolean;
}
const props = defineProps<INumberInputPropType & QInputProps>();
const theNumber = defineModel<number>();
const qInputRef: Ref<QInput | null> = ref<QInput | null>(null);

const nuxtApp = useNuxtApp();

watch(theNumber, (val) => {
  qInputRef.value?.validate();
});
onMounted(() => {
  // let minVal = props?.min ?? 0;
  // theNumber.value = minVal;
});

const getRules = () => {
  // debugger;
  let maxVal = props.max ?? 0;
  let minVal = props.min ?? 0;
  const { required = false } = props;
  const vRules = [];
  if (required) {
    vRules.push(ValidatorRules.required(nuxtApp.$t));
  }
  if (minVal > 0) {
    vRules.push(ValidatorRules.minValue(nuxtApp.$t, minVal));
  }
  if (maxVal > 0) {
    vRules.push(ValidatorRules.maxValue(nuxtApp.$t, maxVal));
  }

  return vRules;
};

// const getRules = () => {
//   // debugger;
//   let maxVal = props.max ?? 0;
//   let minVal = props.min ?? 0;

//   return [
//     ...(props.rules ?? []),
//     (val: number) =>
//       val <= maxVal || nuxtApp.$t("messages.greater_than_max", { val: maxVal }),
//     (val: number) => {
//       console.log("Val", val);
//       return (
//         val >= minVal || nuxtApp.$t("messages.less_than_min", { val: minVal })
//       );
//     },
//   ];
// };

const increase = () => {
  // debugger;
  let currentValue = theNumber?.value ?? 0;
  if (props.max) {
    if (currentValue + 1 > props.max) {
      currentValue--;
    }
  }
  theNumber.value = +currentValue + 1;
};
const decrease = () => {
  // debugger;
  let currentValue = theNumber?.value ?? 0;
  if (props.min) {
    if (currentValue - 1 < props.min) {
      currentValue++;
    }
  }
  theNumber.value = +currentValue - 1;
};

defineExpose({
  validate: () => qInputRef?.value?.validate?.(),
  resetValidation: () => qInputRef?.value?.resetValidation?.(),
});
</script>

<style scoped></style>
