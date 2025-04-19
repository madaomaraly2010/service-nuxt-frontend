<template>
  <q-card class="q-pa-md rounded-borders shadow-2 row-card">
    <q-card-section class="row items-center justify-between">
      <div>
        <div class="text-h6 text-primary">{{ row.arb_name }}</div>
      </div>
      <div class="row">
        <!-- <div>{{ $t(I18Packageitem.Fields.discount_percent) }}</div> -->
        <q-badge
          color="green-2"
          text-color="dark"
          class="text-bold"
          style="font-size: 1.6rem"
        >
          -{{ row.discount_percent ?? 0 }}%
        </q-badge>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-sm">
        <div class="col-6">
          <!-- <q-icon name="event" size="20px" class="q-mr-sm" /> -->
          <!-- <span class="text-weight-medium">Valid for</span> -->
          <div class="text-subtitle1 text-grey-7">
            {{ $t(I18Packageitem.Fields.month_number) }}
            <span class="text-h5 text-primary">{{ row.month_number }}</span>
          </div>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <!-- <q-icon name="payments" size="20px" class="q-mr-sm" /> -->
          <span class="text-weight-medium text-grey-7">{{
            $t(I18Packageitem.Fields.down_payment_percent)
          }}</span>
          <span class="text-h6 q-mx-md text-primary">
            {{ row.down_payment_percent }}%
          </span>
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        color="primary"
        :label="$t(I18Global.details)"
        @click="handleEdit(row)"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { PackageItem } from "~/Data/Models";
import { I18Global, I18Packageitem } from "~/locales/i18-key";
const emits = defineEmits(["detailsClicked"]);

defineProps({
  row: {
    type: PackageItem,
    required: true,
  },
});

const handleEdit = (row: PackageItem) => {
  emits("detailsClicked", row);
};
</script>

<style scoped>
.row-card {
  max-width: 400px;
  background: #fff;
  border: 1px solid #e0e0e0;
}
.rounded-borders {
  border-radius: 12px;
}
</style>
