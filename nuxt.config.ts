// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  // Ensures pages directory is used
  pages: true,

  modules: ["nuxt-quasar-ui", "@nuxtjs/i18n", "nuxt-echarts", "@pinia/nuxt"],
  devtools: { enabled: true },

  router: {
    options: {},
  },

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  postcss: {
    plugins: {
      autoprefixer: {}, // Enable Autoprefixer
      "postcss-rtlcss": {}, // Example for RTL support
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap",
        },
      ],
    },
  },

  css: [
    "~/assets/css/global.css", // ✅ Load global styles
    "quasar/dist/quasar.css",
    "@quasar/extras/material-icons/material-icons.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],

  build: {
    transpile: ["quasar"],
  },

  quasar: {
    config: {
      extras: ["fontawesome-v5"],
      rtl: true, // Enable RTL globally for Quasar components
    },
  },

  i18n: {
    /* module options */
    lazy: true,
    langDir: "../locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "ar-EG",
        iso: "ar-EG",
        name: "Arabic(EG)",
        file: "ar-EG.json",
      },
    ],
    defaultLocale: "ar-EG",
  },

  compatibilityDate: "2025-02-19",
});