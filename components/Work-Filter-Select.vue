<template>
  <q-select
    v-model="selectedWork"
    :options="workList"
    option-label="arb_name"
    option-value="id"
    filled
    dense
    clearable
    popup-content-style="text-align: right; direction: rtl;"
    input-style="text-align: right; direction: rtl;"
  >
    <template v-slot:label>
      <div class="rtl-label">اختر العمل</div>
    </template>
  </q-select>
</template>

<script setup>
import { ref } from "vue";

const selectedWork = ref(null);
const workList = ref([
  { id: 1, arb_name: "سباك", eng_name: "Plumber" },
  { id: 2, arb_name: "نجار", eng_name: "Carpenter" },
  { id: 3, arb_name: "كهربائى", eng_name: "Electrician" },
  { id: 4, arb_name: "فنى تكييف", eng_name: "Air Conditioner" },
  { id: 5, arb_name: "مربية منزل", eng_name: "Baby Sitter" },
  { id: 6, arb_name: "سواق خصوصى", eng_name: "Driver" },
]);
</script>
<style>
.rtl {
  direction: rtl;
  text-align: right;
}

.rtl-text .q-field__control {
  text-align: right;
}

.rtl-popup {
  direction: rtl;
  text-align: right;
}
.q-field .q-field__label {
  direction: rtl;
  text-align: right;
}
</style>
