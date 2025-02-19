<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md login-card">
      <q-card-section>
        <div class="text-h5 text-center">{{ app.$i18n.t("login.login") }}</div>
        <!-- <div class="text-h5 text-center">{{ app.$i18n.t("login.login") }}</div> -->
      </q-card-section>
      <q-card-section>
        <q-form @submit="doLogin" ref="loginForm">
          <!-- Email Input -->
          <q-input
            v-model="email"
            label="Email"
            filled
            lazy-rules
            :rules="[
              (val) => !!val || $t('error.email_not_correct'),
              (val) => /.+@.+\..+/.test(val) || 'Enter a valid email',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <!-- Password Input -->
          <q-input
            v-model="password"
            label="Password"
            filled
            lazy-rules
            type="password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => !!val || 'Password is required']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-btn
                flat
                dense
                round
                :icon="isPwd ? 'visibility' : 'visibility_off'"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <!-- Login Button -->
          <q-btn
            type="submit"
            label="Login"
            color="primary"
            class="full-width q-mt-md"
            :loading="loading"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          flat
          color="primary"
          label="Forgot Password?"
          @click="forgotPassword"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import json from "../locales/ar-EG.json";
console.log(json, "JSON Arabic");

const $q = useQuasar();
const email = ref("");
const password = ref("");
const isPwd = ref(true);
const loading = ref(false);
const app = useNuxtApp();

const doLogin = async () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    $q.notify({
      type: "positive",
      message: "Login Successful!",
    });
  }, 1500);
};

const forgotPassword = () => {
  $q.notify({
    type: "info",
    message: "Forgot password clicked",
  });
};
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
