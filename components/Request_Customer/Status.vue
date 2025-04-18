<template>
  <div :dir="globalStore.direction">
    <q-item>
      <q-item-label
        class="row items-center text-grey-8 text-center text-subtitle1"
      >
        <div v-if="showLabel" class="q-mx-sm">
          {{ $t("request_customer.fields.request_status") }}
        </div>
        <!-- :color="getStatusColor(requestCustomer?.request_status_id ?? 0)" -->
        <!-- :style="{
            backgroundColor: getStatusColor(requestCustomer?.request_status_id ?? 0),
            // borderStyle:'solid',
            // borderWidth:"2px",
            // borderColor: badgeColors[requestCustomer?.request_status_id ?? 0],
          }" -->
        <q-badge
          class="q-pa-sm col"
          :style="{
            color: 'white',
            backgroundColor: getStatusColor(
              requestCustomer?.request_status_id ?? 0
            ),
            borderColor: badgeColors[requestCustomer?.request_status_id ?? 0],
            borderStyle: 'solid',
            borderWidth: '2px',
          }"
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

const hexToRgba = (hex: string, alpha: number = 1): string => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Expand short form (#FFF) to full form (#FFFFFF)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const badgeColors: Record<number, string> = {
  1: "#A78BFA",
  2: "#10B981",
  3: "#3B82F6",
  4: "#22C55E",
  5: "#EF4444",
  6: "#DC2626",
  7: "#9CA3AF",
  // 1: "yellow-8",
  // 2: "green-6",
  // 3: "blue-6",
  // 4: "teal-6",
  // 5: "grey-7",
  // 6: "red-6",
  // 7: "orange-6",
};

const getStatusColor = (status: number): string => {
  const alpha = 0.6; // Adjust the alpha value as needed
  // PENDING = 1,
  // APPROVED = 2,
  // IN_PROGRESS = 3,
  // COMPLETED = 4,
  // CANCELLED = 5,
  // REJECTED = 6,
  // EXPIRED = 7,

  //@ts-ignore
  const backColors: Record<number, string> = {
    1: hexToRgba(badgeColors[status], alpha),
    2: hexToRgba(badgeColors[status], alpha),
    3: hexToRgba(badgeColors[status], alpha),
    4: hexToRgba(badgeColors[status], alpha),
    5: hexToRgba(badgeColors[status], alpha),
    6: hexToRgba(badgeColors[status], alpha),
    7: hexToRgba(badgeColors[status], alpha),
  };
  // return backColors[status];
  return badgeColors[status];
};
</script>

<style scoped></style>
