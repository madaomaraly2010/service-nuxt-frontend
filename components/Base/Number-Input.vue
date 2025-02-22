<template>
  <div>
    <q-input
      v-bind="$attrs"
      dense
      outlined
      v-model="theNumber"
      mask="#########"
      lazy-rules
    ></q-input>
  </div>
</template>

<script lang="ts" setup>
const theNumber = defineModel<number>();
</script>

<style scoped></style>
