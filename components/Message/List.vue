<template>
  <q-card :dir="globalStore.direction" class="q-pa-sm" style="width: 19vw">
    <q-list separator>
      <q-item v-if="messageStore.list.length === 0">
        <q-item-section class="text-grey">No notifications</q-item-section>
      </q-item>

      <q-item
        class="row justify-between"
        v-for="(message, index) in messageStore.list"
        :key="index"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-icon name="done"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label
            >{{ message.title }}
            <span class="text-green text-bold text-caption"
              >({{
                formatDate.formatDate(message.created_at, "YYYY-MM-DD HH:mm")
              }})</span
            >
          </q-item-label>
          <q-item-label caption :lines="2">{{
            message.description
          }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-btn
            color="primary"
            flat
            round
            outline
            dense
            icon="detail"
            @click="goToDetails(message)"
          >
            تفاصيل
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script setup lang="ts">
import type { Message } from "~/Data/Models/Message";
import { useMessageStore, useGlobalStore } from "~/Data/Stores";
import { date } from "quasar";

const formatDate = date;
const messageStore = useMessageStore();
const globalStore = useGlobalStore();

await messageStore.findAll();

console.log("messageStore.list", messageStore.list);

const goToDetails = (message: Message) => {
  console.log(message.id);
};
</script>

<style scoped>
/* Optional TailwindCSS for styling */
</style>
