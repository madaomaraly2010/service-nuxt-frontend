<template>
  <q-btn-dropdown label="إضافة" color="secondary" dense>
    <q-list :class="globalStore.direction == 'rtl' ? 'rtl' : ''" separator>
      <q-item
        v-for="work in workStore.list"
        :key="work.id"
        clickable
        @click="onWorkClicked(work)"
      >
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

<script setup lang="ts">
import type { Work } from "~/Data/Models";
import { useGlobalStore } from "~/Data/Stores/useGlobalStore";
import { useWorkStore } from "~/Data/Stores/useWorkStore";

const globalStore = useGlobalStore();
const workStore = useWorkStore();
const emits = defineEmits(["onWorkClicked"]);
const onWorkClicked = (w: Work) => emits("onWorkClicked", w);
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
