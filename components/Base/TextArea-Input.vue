<template>
  <!-- A basic QTextarea usage -->
  <q-input
    type="textarea"
    v-model="textValue"
    counter
    rows="3"
    maxlength="300"
    outlined
  />
</template>

<script setup lang="ts">
const textValue = defineModel<string>();
</script>
