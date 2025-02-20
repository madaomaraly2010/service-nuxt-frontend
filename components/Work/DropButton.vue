<template>
  <q-btn-dropdown label="إضافة" color="secondary" dense="">
    <q-list :class="globalStore.direction == 'rtl' ? 'rtl' : ''" separator>
      <q-item v-for="work in workStore.list" :key="work.id" clickable>
        <q-item-section avatar>
          <q-icon :name="work.icon" size="sm" />
        </q-item-section>
        <q-item-section>
          <!-- <q-item-label>{{ work.eng_name }}</q-item-label> -->
          <q-item-label>{{ work.arb_name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "~/Data/Stores/useGlobalStore";
import { useWorkStore } from "~/Data/Stores/useWorkStore";

const globalStore = useGlobalStore();
const workStore = useWorkStore();

const workList = ref([
  { id: 1, arb_name: "سباك", eng_name: "Plumber", icon: "fas fa-wrench" },
  { id: 2, arb_name: "نجار", eng_name: "Carpenter", icon: "fas fa-hammer" },
  { id: 3, arb_name: "كهربائى", eng_name: "Electrician", icon: "fas fa-bolt" },
  {
    id: 4,
    arb_name: "فنى تكييف",
    eng_name: "Air Conditioner",
    icon: "fas fa-fan",
  },
  {
    id: 5,
    arb_name: "مربية منزل",
    eng_name: "Baby Sitter",
    icon: "fas fa-baby",
  },
  { id: 6, arb_name: "سواق خصوصى", eng_name: "Driver", icon: "fas fa-car" },
]);
</script>
<style scoped>
/* .rtl {
  direction: rtl;
  text-align: right;
}

.rtl-text .q-field__control {
  text-align: right;
}

.rtl-popup {
  direction: rtl;
  text-align: right;
} */
</style>
