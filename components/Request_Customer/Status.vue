<template>
  <div :dir="globalStore.direction">
    <q-item>
      <q-item-label
        class="row items-center text-grey-8 text-center text-subtitle1"
      >
        <div v-if="showLabel" class="q-mx-sm">
          {{ $t("request_customer.fields.request_status") }}
        </div>
        <q-badge
          class="q-pa-sm col"
          :color="getStatusColor(requestCustomer?.request_status_id ?? 0)"
          >{{ requestCustomer?.status?.arb_name }}
        </q-badge>
      </q-item-label>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { RequestCustomer } from "~/Data/Models";
import { useGlobalStore } from "~/Data/Stores";

const globalStore = useGlobalStore();
defineProps({
  requestCustomer: {
    type: RequestCustomer,
    required: true,
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
});

const getStatusColor = (status: number): string => {
  // PENDING = 1,
  // APPROVED = 2,
  // IN_PROGRESS = 3,
  // COMPLETED = 4,
  // CANCELLED = 5,
  // REJECTED = 6,
  // EXPIRED = 7,

  const badgeColors: any = {
    1: "yellow-8",
    2: "green-6",
    3: "blue-6",
    4: "teal-6",
    5: "grey-7",
    6: "red-6",
    7: "orange-6",
  };
  return badgeColors[status];
};
</script>

<style scoped></style>
