<template>
  <div class="row" :dir="globalStore.direction">
    <q-avatar>
      <q-img :src="provider?.profile_picture" width="6vw" height="6vh"></q-img>
    </q-avatar>
    <div class="column">
      <div class="column justify-evenly items-md-start">
        <div class="text-black col text-subtitle1">
          {{ provider?.user.first_name }}
        </div>
        <div class="text-grey-9 col text-subtitle1">
          @{{ provider?.nick_name }}
        </div>

        <div class="text-grey-9 col text-subtitle1 text-left">
          <!-- <span
            :class="`flag-icon flag-icon-${provider.country?.iso_code?.toLowerCase()}`"
          ></span> -->
          <span
            class="text-h5"
            :class="[
              'flag-icon',
              `flag-icon-${provider.country?.iso_code?.toLowerCase()}`,
            ]"
          ></span>
          <span class="q-mx-md">{{ provider.country?.arb_name }}</span>
        </div>
      </div>
      <div class="row">
        <div>
          <q-rating
            v-if="provider.rating"
            v-model="provider.rating"
            size="1vw"
            color="amber"
            icon="star"
            icon-half="star_half"
            icon-selected="star"
            :max="5"
            readonly
          >
          </q-rating>
          <span class="q-mx-md">{{ provider?.rating }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Provider } from "~/Data/Models";
import { useGlobalStore } from "~/Data/Stores";

const globalStore = useGlobalStore();
defineProps({
  provider: {
    type: Provider,
    required: true,
  },
});
</script>

<style scoped></style>
