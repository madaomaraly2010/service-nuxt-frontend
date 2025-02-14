<template>
  <div class="row q-col-gutter-sm q-py-sm">
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <!-- style="background-color: #38b1c5" -->

      <q-card class="q-ma-xs no-shadow" bordered>
        <q-card-section class="text-h6 text-gray">
          الطلبات خلال الشهور
        </q-card-section>
        <q-card-section class="q-pa-none">
          <VChart
            :option="requestsChartOptions"
            class="q-mt-md"
            :resizable="true"
            autoresize
            style="height: 250px"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <!-- style="background-color: #ea4b64" -->
      <q-card class="q-ma-xs no-shadow" bordered>
        <q-card-section class="text-h6 text-gray">
          لإيرادات حسب الباقة
        </q-card-section>
        <q-card-section class="q-pa-none">
          <VChart
            :option="revenueChartOptions"
            class="q-mt-md"
            :resizable="true"
            autoresize
            style="height: 250px"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <!-- style="background-color: #1e88e5" -->

      <q-card class="q-ma-xs no-shadow" bordered>
        <q-card-section class="text-h6 text-gray">
          اتجاه طلبات الخدمة (آخر 12 شهرًا)
        </q-card-section>
        <q-card-section class="q-pa-none">
          <VChart
            :option="ordersChartOptions"
            class="q-mt-md"
            :resizable="true"
            autoresize
            style="height: 250px"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts"; // ✅ Correct way to import
import { TooltipComponent } from "echarts/components";
echarts.use([TooltipComponent]);
const BarChart = {
  tooltip: { show: true },
  title: {
    show: true,
    textStyle: { color: "rgba(0, 0, 0 , .87)", fontFamily: "sans-serif" },
  },
  grid: { containLabel: true, bottom: "10%", top: "5%" },
  xAxis: {
    show: false,
    type: "category",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "dashed",
      },
    },
    axisLabel: { show: false },
  },
  yAxis: {
    show: false,
    type: "value",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisLabel: { show: false },
    splitLine: { lineStyle: { type: "dashed" } },
    axisTick: {
      show: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "dashed",
      },
    },
  },
  series: [
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: { normal: { color: "rgba(0,0,0,0.1)" } },
      barWidth: "50%",
    },
    {
      barWidth: "50%",
      type: "bar",
      itemStyle: { normal: { color: "#ffffff" } },
    },
  ],
  dataset: {
    source: [
      { label: "0D", max: 500, sales: 220 },
      {
        label: "1D",
        max: 500,
        sales: 182,
      },
      { label: "2D", max: 500, sales: 191 },
      {
        label: "3D",
        max: 500,
        sales: 234,
      },
      { label: "4D", max: 500, sales: 290 },
      {
        label: "5D",
        max: 500,
        sales: 330,
      },
      { label: "6D", max: 500, sales: 310 },
      {
        label: "7D",
        max: 500,
        sales: 123,
      },
      { label: "8D", max: 500, sales: 442 },
      {
        label: "9D",
        max: 500,
        sales: 321,
      },
      { label: "10D", max: 500, sales: 90 },
      {
        label: "11D",
        max: 500,
        sales: 149,
      },
      { label: "12D", max: 500, sales: 210 },
      {
        label: "13D",
        max: 500,
        sales: 122,
      },
      { label: "14D", max: 500, sales: 133 },
      {
        label: "15D",
        max: 500,
        sales: 334,
      },
      { label: "16D", max: 500, sales: 198 },
      {
        label: "17D",
        max: 500,
        sales: 123,
      },
      { label: "18D", max: 500, sales: 125 },
      { label: "19D", max: 500, sales: 220 },
    ],
  },
};
const LineChart = {
  tooltip: { show: true },
  title: {
    show: true,
    textStyle: { color: "rgba(0, 0, 0 , .87)", fontFamily: "sans-serif" },
  },
  grid: { containLabel: true, left: "0", bottom: "0", right: "0" },
  xAxis: {
    show: false,
    type: "category",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "dashed",
      },
    },
    axisLabel: { show: false },
    boundaryGap: false,
  },
  yAxis: {
    show: false,
    type: "value",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisLabel: { show: false },
    splitLine: { lineStyle: { type: "dashed" } },
    axisTick: {
      show: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "dashed",
      },
    },
  },
  series: [{ type: "line", areaStyle: {}, smooth: true }],
  dataset: {
    source: [
      { month: "Jan", "Unique Visit": 296, "Page View": 548 },
      {
        month: "Feb",
        "Unique Visit": 1181,
        "Page View": 714,
      },
      { month: "Mar", "Unique Visit": 235, "Page View": 961 },
      {
        month: "Apr",
        "Unique Visit": 294,
        "Page View": 580,
      },
      { month: "May", "Unique Visit": 765, "Page View": 730 },
      {
        month: "Jun",
        "Unique Visit": 412,
        "Page View": 1249,
      },
      { month: "Jul", "Unique Visit": 1125, "Page View": 267 },
      {
        month: "Aug",
        "Unique Visit": 800,
        "Page View": 251,
      },
      { month: "Sep", "Unique Visit": 948, "Page View": 1043 },
      {
        month: "Oct",
        "Unique Visit": 1046,
        "Page View": 1118,
      },
      { month: "Nov", "Unique Visit": 363, "Page View": 573 },
      {
        month: "Dec",
        "Unique Visit": 909,
        "Page View": 283,
      },
    ],
  },
  color: ["#2196f3"],
};

// Service Requests Trend (Line Chart)
// Service Requests Trend (Line Chart)
const requestsChartOptions = ref({
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
  },
  yAxis: { type: "value" },
  series: [
    {
      type: "line",
      data: [320, 400, 380, 450, 480, 530, 600, 620, 650, 580, 700, 750],
      smooth: true,
    },
  ],
});

const revenueChartOptions = ref({
  tooltip: { trigger: "item" },
  legend: {
    orient: "vertical",
    left: "left",
    textStyle: {
      fontFamily: "Cairo, Arial, sans-serif", // ✅ Custom font for legend
      fontSize: 14,
    },
  },
  series: [
    {
      name: "الإيرادات حسب الباقة",
      type: "pie",
      radius: ["40%", "70%"], // ✅ Increased inner & outer radius

      label: {
        fontFamily: "Cairo, Arial, sans-serif", // ✅ Custom font for labels
      },
      labelLine: {
        show: true,
        length: 10,
        length2: 10,
      },
      itemStyle: {
        borderColor: "#fff", // ✅ White borders between slices
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
      data: [
        { value: 9000, name: "باقة شهرين" },
        { value: 15500, name: "باقة 4 أشهر" },
        { value: 22000, name: "باقة 6 أشهر" },
        { value: 35000, name: "باقة 12 شهر" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 25,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.7)",
        },
      },
    },
  ],
});

// Daily Completed Orders (Bar Chart)
const ordersChartOptions = ref({
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: Array.from({ length: 14 }, (_, i) => `اليوم ${i + 1}`),
  },
  yAxis: { type: "value" },
  series: [
    {
      type: "bar",
      data: [15, 22, 18, 25, 30, 28, 35, 40, 37, 42, 48, 50, 55, 60],
    },
  ],
});

const pieOptions = ref({
  legend: {
    top: "5%",
    left: "center",
    selected: {
      "Search Engine": true,
      Direct: true,
      Email: true,
      "Union Ads": true,
      "Video Ads": true,
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["30%", "70%"],
      roseType: "angle",
      itemStyle: {
        borderRadius: [20, 5, 5, 10],
      },
      label: {
        show: true,
      },
      data: [
        { value: 800, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 400, name: "Video Ads" },
      ],
    },
  ],
});

const LineChart2 = {
  tooltip: { show: true },
  title: {
    show: true,
    textStyle: { color: "rgba(0, 0, 0 , .87)", fontFamily: "sans-serif" },
  },
  grid: { containLabel: true, left: "0", bottom: "0", right: "0" },
  xAxis: {
    show: true,
    type: "category",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "dashed",
      },
    },
    axisLabel: { show: true },
    boundaryGap: false,
  },
  yAxis: {
    show: false,
    type: "value",
    axisLine: {
      lineStyle: { color: "rgba(0, 0, 0 , .54)", type: "dashed" },
    },
    axisLabel: { show: false },
    splitLine: { lineStyle: { type: "dashed" } },
    axisTick: {
      show: true,
      lineStyle: {
        show: true,
        color: "rgba(0, 0, 0 , .54)",
        type: "solid",
      },
    },
  },
  series: [{ type: "line", areaStyle: {}, smooth: false }],
  dataset: {
    source: [
      { month: "Jan", "Unique Visit": 296, "Page View": 548 },
      {
        month: "Feb",
        "Unique Visit": 1181,
        "Page View": 714,
      },
      { month: "Mar", "Unique Visit": 235, "Page View": 961 },
      {
        month: "Apr",
        "Unique Visit": 294,
        "Page View": 580,
      },
      { month: "May", "Unique Visit": 765, "Page View": 730 },
      {
        month: "Jun",
        "Unique Visit": 412,
        "Page View": 1249,
      },
      { month: "Jul", "Unique Visit": 1125, "Page View": 267 },
      {
        month: "Aug",
        "Unique Visit": 800,
        "Page View": 251,
      },
      { month: "Sep", "Unique Visit": 948, "Page View": 1043 },
      {
        month: "Oct",
        "Unique Visit": 1046,
        "Page View": 1118,
      },
      { month: "Nov", "Unique Visit": 363, "Page View": 573 },
      {
        month: "Dec",
        "Unique Visit": 909,
        "Page View": 283,
      },
    ],
  },
  color: ["#45c2c5"],
};
</script>
