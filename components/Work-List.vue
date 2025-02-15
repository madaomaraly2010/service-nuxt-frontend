<template>
  <q-page padding>
    <q-list bordered>
      <q-item v-for="work in workList" :key="work.id" clickable>
        <q-item-section avatar>
          <q-avatar size="sm">
            <img :src="work.image_url" alt="work image" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ work.eng_name }}</q-item-label>
          <q-item-label caption>{{ work.arb_name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
const workList = [
  {
    id: 1,
    arb_name: "سباك",
    eng_name: "Plumber",
    image_url:
      "https://drive.google.com/file/d/11LEFZJlrb6LCHbtzzi0WrZT_LQ0jiqEY/view?usp=drive_link",
  },
  {
    id: 2,
    arb_name: "نجار",
    eng_name: "Carpenter",
    image_url:
      "https://drive.google.com/file/d/1DSOgVUMCPW2EU4owzwDhISWeava1dVXK/view?usp=drive_link",
  },
  {
    id: 3,
    arb_name: "كهربائى",
    eng_name: "Electrician",
    image_url:
      "https://drive.google.com/file/d/1LraB7bQn4bffQUv--misYFcXbiMQ0eEH/view?usp=drive_link",
  },
  {
    id: 4,
    arb_name: "فنى تكييف",
    eng_name: "Air Conditioner",
    image_url:
      "https://drive.google.com/file/d/1ymq2yL98m-kylGHpcQJSbC2hL_oH3EJn/view?usp=drive_link",
  },
  {
    id: 5,
    arb_name: "مربية منزل",
    eng_name: "Baby Sitter",
    image_url:
      "https://drive.google.com/file/d/1aYPFnMKN76tQyXohiQtvHrOg7efAF9LE/view?usp=drive_link",
  },
  {
    id: 6,
    arb_name: "سواق خصوصى",
    eng_name: "Driver",
    image_url:
      "https://drive.google.com/file/d/1-F2xLol8yh-Rde7DFt1PsY-nH5bDBzqR/view?usp=drive_link",
  },
];
</script>
