// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import path from "path";
import fs from "fs";
export default defineNuxtConfig({
  // Ensures pages directory is used
  pages: true,
  ssr: false,

  imports: {
    dirs: [
      "composables",
      "composables/helpers",
      "data/stores",
      "composables/table-services-composables",
    ],
  },
  modules: [
    "nuxt-quasar-ui",
    "@nuxtjs/i18n",
    "nuxt-echarts",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
    "nuxt-lodash",
  ],
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
    "flag-icon-css/css/flag-icons.min.css",
  ],

  build: {
    transpile: ["quasar"],
  },

  quasar: {
    plugins: ["Notify", "Loading"],
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
    defaultLocale: "ar",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en/labels.json",
        files: [...getFileList(".\\locales\\en")],
        name: "English",
      },
      {
        code: "ar",
        iso: "ar-EG",
        files: [...getFileList(".\\locales\\ar")],
        name: "العربية",
      },
    ],
    // ],
    // locales: [
    //   {
    //     code: "en-US",
    //     iso: "en-US",
    //     name: "English(US)",
    //     file: "en-US.json",
    //   },
    //   {
    //     code: "ar-EG",
    //     iso: "ar-EG",
    //     name: "Arabic(EG)",
    //     file: "ar-EG.json",
    //   },
    // ],
  },

  compatibilityDate: "2025-02-19",
});

function getFileList(folderPath: string): string[] {
  const absoluteFolderPath = path.resolve(__dirname, folderPath);

  // Read all files in the folder
  const files = fs.readdirSync(absoluteFolderPath);

  // Filter and return only .json files
  return files
    .filter((file: string) => file.endsWith(".json"))
    .map((file: string) => path.join(absoluteFolderPath, file));
}
