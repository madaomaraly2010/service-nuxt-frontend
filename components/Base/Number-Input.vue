<template>
  <div>
    <q-input
      filled
      v-model="theNumber"
      label="Wage Amount"
      mask="#######"
      fill-mask="0"
      lazy-rules
      
    ></q-input>
  </div>
</template>

<script lang="ts" setup>
const theNumber = defineModel<string>();
</script>

<style scoped></style>
