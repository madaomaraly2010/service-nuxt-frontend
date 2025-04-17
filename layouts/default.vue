<template>
  <!-- view="hHh lpR fFf" -->
  <q-layout :dir="globalStore.direction" view="lHh Lpr lFf" class="bg-grey-1">
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
          <!-- <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="nuxtApp.$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn> -->
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="fas fa-sign-out-alt"
            v-if="nuxtApp.$q.screen.gt.sm"
          ></q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge
              ref="badgeRef"
              color="red"
              text-color="white"
              floating
              style="width: 1.5vw; height: 1.5vh"
              class="q-py-sm display: flex; align-items: center; justify-content: center;"
            >
              <span>223</span>
            </q-badge>
            <!-- <q-tooltip>Notifications</q-tooltip> -->
            <q-popup-proxy
              ref="popupRef"
              transition-show="fade"
              transition-hide="fade"
            >
              <message-list></message-list>
            </q-popup-proxy>
          </q-btn>
          <q-btn-dropdown :label="userStore.loggedUser?.username" round flat>
            <q-tooltip>Account</q-tooltip>
            <q-list>
              <q-item clickable v-ripple @click="userStore.logout()">
                <q-item-section>
                  <q-item-label>{{ $t("logout") }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :side="globalStore.direction == 'rtl' ? 'right' : 'left'"
      bordered
      show-if-above
      behavior="desktop"
      class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in drawerItems"
            :key="link.text"
            @click="gotoPage(link)"
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
      <!-- <q-btn @click="globalStore.toggleDirection">Change to arabic</q-btn> -->
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useGlobalStore, useUserStore, useMessageStore } from "../Data/Stores";
import type { Message } from "~/Data/Models/Message";
import { I18Drawer } from "~/locales/i18-key";
const globalStore = useGlobalStore();
const userStore = useUserStore();
const messageStore = useMessageStore();

const leftDrawerOpen = ref(false);
const search = ref("");
const nuxtApp = useNuxtApp();

const badgeRef = ref();

// const motion = useMotion(badgeRef);

onMounted(() => {
  (nuxtApp.$socket as any).on("orderRequest", (requestRow: Message) => {
    console.log(requestRow.id);
    messageStore.addMessage(requestRow);
    useMotion(badgeRef, {
      initial: { x: 0 },
      visible: {
        x: [0, -10, 0] as any,
        transition: {
          repeat: 3,
          repeatType: "loop",
          duration: 500,
        },
      }, // issue:
    });
  });
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const gotoPage = (item: any) => {
  useRouter().push("/" + item.page);
};
const app = useNuxtApp();

const drawerItems = [
  {
    icon: "home",
    text: app.$t(I18Drawer.Items.main),
    page: "RequestCustomerPage",
  }, // Home icon for main
  {
    icon: "account-tie",
    text: app.$t(I18Drawer.Items.employees),
    page: "RequestCustomerPage",
  }, // Suit-tie for employees
  {
    icon: "worker",
    text: app.$t(I18Drawer.Items.workers),
    page: "RequestCustomerPage",
  }, // Worker icon
  {
    icon: "mdi-account-group",
    text: app.$t(I18Drawer.Items.customers),
    page: "RequestCustomerPage",
  },
  // Group icon for customers
  {
    icon: "mdi-file-document",
    text: app.$t(I18Drawer.Items.packages),
    page: "PackagePage",
  }, // Document icon for requests

  {
    icon: "mdi-file-document",
    text: app.$t(I18Drawer.Items.requests),
    page: "RequestCustomerPage",
  }, // Document icon for requests

  {
    icon: "mdi-information",
    text: app.$t(I18Drawer.Items.aboutus),
    page: "RequestCustomerPage",
  }, // Info icon for About Us
  {
    icon: "mdi-logout",
    text: app.$t(I18Drawer.Items.logout),
    page: "RequestCustomerPage",
  }, // Logout icon for exit
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
