<template>
  <q-layout :dir="globalStore.direction" view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn
          flat
          no-caps
          no-wrap
          class="q-ml-xs"
          v-if="nuxtApp.$q.screen.gt.xs"
        >
          <!-- <q-icon :name="fabYoutube" color="red" size="28px" /> -->
          <q-avatar>
            <q-img
              fit="fill"
              src="/images/App-Logo.png"
              alt="App Logo"
              width="5vw"
              height="5vh"
            />
          </q-avatar>
          <q-toolbar-title
            shrink
            class="text-weight-bolder q-ma-sm text-green-10"
          >
            خدماتى
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <!-- <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn> -->
          <!-- <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn> -->
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="nuxtApp.$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in drawerItems"
            :key="link.text"
            v-ripple
            clickable
          >
            <q-item-section>
              <q-item-label style="text-align: right">{{
                link.text
              }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-icon color="grey" size="md" :name="link.icon" />
            </q-item-section>
            <q-separator class="q-my-md" />
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <!-- <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-btn @click="globalStore.toggleDirection">Change to arabic</q-btn>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useGlobalStore } from "../Data/Stores/useGlobalStore";
const globalStore = useGlobalStore();
const leftDrawerOpen = ref(false);
const search = ref("");
const nuxtApp = useNuxtApp();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const app = useNuxtApp();
// const gotoAbout = () => {
//   // nuxtApp.$router.push("/about");
//   nuxtApp.$q.lang.rtl = !nuxtApp.$q.lang.rtl;
// };
// const drawerItems = [
//   { icon: "", text: app.$t("drawer.items.main") },
//   { icon: "", text: app.$t("drawer.items.employees") },
//   { icon: "", text: app.$t("drawer.items.workers") },
//   { icon: "", text: app.$t("drawer.items.customers") },
//   { icon: "", text: app.$t("drawer.items.requests") },
//   { icon: "", text: app.$t("drawer.items.exit") },
//   { icon: "", text: app.$t("drawer.items.aboutus") },
// ];
const drawerItems = [
  { icon: "home", text: app.$t("drawer.items.main") }, // Home icon for main
  { icon: "account-tie", text: app.$t("drawer.items.employees") }, // Suit-tie for employees
  { icon: "worker", text: app.$t("drawer.items.workers") }, // Worker icon
  { icon: "mdi-account-group", text: app.$t("drawer.items.customers") }, // Group icon for customers
  { icon: "mdi-file-document", text: app.$t("drawer.items.requests") }, // Document icon for requests
  { icon: "mdi-logout", text: app.$t("drawer.items.logout") }, // Logout icon for exit
  { icon: "mdi-information", text: app.$t("drawer.items.aboutus") }, // Info icon for About Us
];
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
