import { defineNuxtPlugin } from "nuxt/app";

import "quasar/dist/quasar.css";
import "@quasar/extras/material-icons/material-icons.css";

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(Quasar);
  return {
    provide: {
      today: Date.now(),
      t: (nuxtApp.$i18n as any).t,
    },
  };
});
