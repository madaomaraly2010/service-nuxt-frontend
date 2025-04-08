<template>
  <div>
    <q-input
      v-bind="props"
      dense
      outlined
      v-model="theNumber"
      mask="#########"
      lazy-rules
      :rules="getRules()"
    >
      <template v-slot:append>
        <span class="text-subtitle1" v-if="currency && showCurrency">{{
          currency
        }}</span>

        <span class="text-subtitle1" v-if="showPercent"> % </span>
      </template>
      <template v-slot:after>
        <q-btn v-if="showSpin" flat round icon="add" @click="increase" />
      </template>
      <template v-slot:before>
        <q-btn v-if="showSpin" flat round icon="remove" @click="decrease" />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts" setup>
import type { QInputProps } from "quasar";

interface INumberInputPropType {
  showSpin?: boolean;
  showCurrency?: boolean;
  currency?: string;
  min?: number;
  max?: number;
  showPercent?: boolean;
}

const nuxtApp = useNuxtApp();
const getRules = () => {
  let maxVal = props.max ?? 0;
  let minVal = props.min ?? 0;

  return [
    ...(props.rules ?? []),
    (val: number) =>
      val <= maxVal || nuxtApp.$t("messages.greater_than_max", { val: maxVal }),
    (val: number) =>
      val > minVal || nuxtApp.$t("messages.less_than_min", { val: minVal }),
  ];
};
const props = defineProps<INumberInputPropType & QInputProps>();

const theNumber = defineModel<number>();

const increase = () => {
  let currentValue = theNumber?.value ?? 0;
  if (props.max) {
    if (currentValue + 1 > props.max) {
      currentValue--;
    }
  }
  theNumber.value = currentValue + 1;
};
const decrease = () => {
  let currentValue = theNumber?.value ?? 0;
  if (props.min) {
    if (currentValue - 1 < props.min) {
      currentValue++;
    }
  }
  theNumber.value = currentValue - 1;
};

// watch(theNumber, (val) => {
//   let v = val ?? 0;
//   if (v < 1) theNumber.value = 1;
//   else if (v > 10) theNumber.value = 10;
// });
</script>

<style scoped></style>
