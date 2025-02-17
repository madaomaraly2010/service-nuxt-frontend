import { defineNuxtPlugin } from "nuxt/app";
import { Quasar } from "quasar";
import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar);
  return {
    provide: {
      //   today: Date.now(),
      //  currentLocale: () => "",
    },
  };
});
