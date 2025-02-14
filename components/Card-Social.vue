<template>
  <q-card class="bg-transparent no-shadow no-border" bordered>
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-sm">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-md-3 col-sm-12 col-xs-12"
        >
          <q-item :style="`background-color: ${item.color1}`" class="q-pa-none">
            <q-item-section
              side
              :style="`background-color: ${item.color2}`"
              class="q-pa-lg q-mr-none text-white"
            >
              <q-icon :name="item.icon" color="white" size="24px"></q-icon>
            </q-item-section>
            <q-item-section class="q-pa-md q-ml-none text-white">
              <q-item-label class="text-white text-h6 text-weight-bolder">{{
                item.value
              }}</q-item-label>
              <q-item-label>{{ item.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  iconPosition: String,
});

const itemsLeft = [
  {
    title: "إجمالى عدد الموظفين",
    icon: "person",
    value: "200",
    color1: "#5064b5",
    color2: "#3e51b5",
  },
  {
    title: "الطلبات المعلقة",
    icon: "fa-solid fa-file-signature",
    value: "500",
    color1: "#f37169",
    color2: "#f34636",
  },
  {
    title: "الطلبات المكتملة",
    icon: "fa-solid fa-rocket",
    value: "50",
    color1: "#ea6a7f",
    color2: "#ea4b64",
  },
  {
    title: "ايرادات اليوم",
    icon: "fa-solid fa-dollar-sign",
    value: "1020" + " SR",
    color1: "#a270b1",
    color2: "#9f52b1",
  },
];

const items = props.iconPosition == "left" ? itemsLeft : itemsLeft;
</script>
