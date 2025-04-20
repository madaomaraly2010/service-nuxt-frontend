<template>
  <q-td>
    <q-item>
      <q-item-section>
        <slot>
          <q-item-label :style="colStyle" :class="colClass">{{
            displayValue
          }}</q-item-label>
        </slot>
      </q-item-section>
    </q-item>
  </q-td>
</template>

<script setup lang="ts">
defineProps({
  displayValue: {
    type: String,
    default: "",
  },
  colStyle: {
    type: String,
    default: "",
  },
  colClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
