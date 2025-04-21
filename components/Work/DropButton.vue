<template>
  <q-btn-dropdown
    style="width: 7vw; height: 4vh"
    :label="$t(I18Global.add_new_row)"
    color="primary"
    dense
  >
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
import { I18Global } from "~/locales/i18-key";

const globalStore = useGlobalStore();
const workStore = useWorkStore();
const emits = defineEmits(["onWorkClicked"]);
const onWorkClicked = (w: Work) => emits("onWorkClicked", w);
</script>
<style scoped></style>
