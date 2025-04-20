<template>
  <q-td class="text-left">
    <q-item class="text-center">
      <q-item-section class="text-center">
        <q-btn
          v-bind="$attrs"
          class="text-bold"
          icon="list"
          flat
          color="blue-6"
          >{{ label }}</q-btn
        >
      </q-item-section>
    </q-item>
  </q-td>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
