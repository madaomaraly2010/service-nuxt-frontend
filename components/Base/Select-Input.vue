<template>
  <q-select v-bind="$attrs" v-model="theModelValue" outlined dense>
    <!-- Prepend Slot -->
    <template v-if="$slots.prepend" v-slot:prepend>
      <slot name="prepend"></slot>
    </template>

    <!-- Custom Selected Option -->
    <template v-if="$slots.selected" v-slot:selected>
      <slot name="selected"></slot>
    </template>

    <!-- Dropdown Options -->
    <template v-if="$slots.option" v-slot:option="scope">
      <slot name="option" v-bind="scope"></slot>
    </template>

    <!-- Append Slot -->
    <template v-if="$slots.append" v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
const theModelValue = defineModel<number>();
</script>
