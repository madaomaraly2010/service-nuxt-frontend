<template>
  <div>
    <div class="row">
      <q-card-section class="q-pa-none q-ma-none col-3">
        <q-table
          hide-bottom
          class="custom-table"
          :rows="sales_data"
          :columns="sales_column"
        >
          <template v-slot:body-cell-work="props">
            <q-td :props="props">
              <q-item>
                <q-item-section side>
                  <q-avatar color="blue-4">
                    <q-icon
                      :name="props.row.icon"
                      :color="props.row.color"
                      size="sm"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-bold text-grey-7">{{
                    props.row.work
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-availableNumber="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <!-- <q-item-label class="text-h6">{{
                    props.row.availableNumber   
                  }}</q-item-label> -->
                  <q-circular-progress
                    :value="props.row.availableNumber"
                    size="50px"
                    :thickness="0.2"
                    color="blue"
                    track-color="grey-3"
                    show-value
                    class="text-weight-bold"
                  />
                </q-item-section>
              </q-item>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { QTableColumn } from "quasar";

const sales_data = [
  {
    work: "مربية منزل",
    availableNumber: 34,
    icon: "fa-solid fa-baby",
    color: "grey-9",
  },
  {
    work: " سواق خصوصى ",
    availableNumber: 21,
    icon: "fa-solid fa-taxi",
    color: "grey-9",
  },
  {
    work: "سباك",
    availableNumber: 0,
    icon: "fa-solid fa-faucet",
    color: "grey-9",
  },
  {
    work: "نجار",
    availableNumber: 3,
    icon: "fa-solid fa-hammer",
    color: "grey-9",
  },
  {
    work: "كهربائى",
    availableNumber: 5,
    icon: "fa-solid fa-bolt",
    color: "grey-9",
  },
  // {
  //   work: "فنى تكييف",
  //   availableNumber: 10,
  //   icon: "fa-solid fa-fan",
  //   color: "teal-9",
  // },
];
const sales_column: QTableColumn[] = [
  {
    name: "work",
    label: "العمل",
    field: "work",
    sortable: true,
    align: "left",
  },
  {
    name: "availableNumber",
    label: "متاح",
    field: "availableNumber",
    sortable: true,
    align: "left",
  },
];

const getColor = (val: number) => {
  if (val > 70 && val <= 100) {
    return "green";
  } else if (val > 50 && val <= 70) {
    return "blue";
  }
  return "red";
};
const getChipColor = (status: string) => {
  if (status == "Canceled") {
    return "negative";
  } else if (status == "Sent") {
    return "positive";
  } else if (status == "Pending") {
    return "warning";
  } else if (status == "Paid") {
    return "info";
  } else {
    return "dark";
  }
};
</script>

<style lang="css"></style>
