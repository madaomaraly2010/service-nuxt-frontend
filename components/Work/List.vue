<template>
  <q-page padding>
    <q-list bordered>
      <q-item
        v-for="work in workList"
        :key="work.id"
        clickable
        @click="onWorkSelected(work)"
      >
        <q-item-section avatar>
          <q-avatar size="sm">
            <img :src="work.icon" alt="work image" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ work.eng_name }}</q-item-label>
          <q-item-label caption>{{ work.arb_name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import type { Work } from "~/Data/Models";

const emits = defineEmits(["workSelected"]); // Define the custom event
const onWorkSelected = (work: Work) => {
  emits("workSelected", work);
};
const workList: Work[] = [];
</script>
