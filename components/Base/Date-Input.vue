<template>
  <div>
    <!--@vue-ignore-->
    <q-input dense outlined="" v-model="date" mask="date" :label="label">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    required: true,
    type: String,
  },
});
const date = defineModel<Date | null>();
// function isInvalidDate(date: Date) {
//   return isNaN(new Date(date).getTime());
// }
// const onDateChanged = (val: Date) => (date.value = val ? new Date(val) : null);
// Computed property to format the date as a string
// const formattedDate = computed({
//   get: () =>
//     date.value && !isInvalidDate(date.value)
//       ? new Date(date.value).toISOString().split("T")[0]
//       : "",
//   set: (val) => {
//     date.value = val ? new Date(val) : null;
//   },
// });
</script>
