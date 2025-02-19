<template>
  <div>
    <CardSocial></CardSocial>
    <CardCharts></CardCharts>
    <div class="q-pa-sm row">
      <div class="col-3">
        <q-item class="" dense="">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-users" size="md" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-bold">العمالة المتاحة</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="fa-solid fa-check-circle" size="md" color="green" />
          </q-item-section>
        </q-item>
      </div>
      <!-- Empty columns to push the button to column 4 -->
      <WorkDropButton class="col-3 offset-1"></WorkDropButton>
      <div class="row col-3">
        <WorkFilterSelect class="col"></WorkFilterSelect>
      </div>
    </div>

    <div class="row">
      <div class="col-3 q-pa-sm">
        <CardTableSales></CardTableSales>
      </div>
      <div class="col-9 block q-pa-sm">
        <ProviderTable></ProviderTable>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss" scoped></style>
