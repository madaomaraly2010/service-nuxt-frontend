<template>
  <div>
    <q-input
      filled
      v-model="theNumber"
      label="Wage Amount"
      mask="#######"
      :fill-mask="0"
      input-class="text-right"
    ></q-input>
    <p>{{ theNumber }}</p>
  </div>
</template>

<script lang="ts" setup>
const theNumber = defineModel<string>();
</script>

<style scoped></style>
