<template>
  <div>
    <q-input
      v-bind="$attrs"
      filled
      v-model="theNumber"
      mask="#######"
      fill-mask="0"
      lazy-rules
    ></q-input>
  </div>
</template>

<script lang="ts" setup>
const theNumber = defineModel<number>();
</script>

<style scoped></style>
