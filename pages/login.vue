<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md login-card">
      <q-card-section>
        <div class="text-h5 text-center">{{ $t("login.login") }}</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="doLogin" ref="loginForm">
          <!-- Email Input -->
          <!-- :rules="[
              (val) =>
                !!val ||
                app.$i18n.t('error.field_is_required', [
                  app.$i18n.t('login.email'),
                ]),
              (val) =>
                /.+@.+\..+/.test(val) || app.$i18n.t('error.email_not_correct'),
            ]" -->
          <!-- :rules="[requiredValidation($t, 'login.email')]" -->
          <base-text-input
            v-model="email"
            :label="$t('login.email')"
            filled
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </base-text-input>
          <div class="q-ma-lg"></div>
          <!-- Password Input -->
          <!-- :rules="[
              (val) =>
                !!val ||
                app.$i18n.t('error.field_is_required', [
                  app.$i18n.t('login.password'),
                ]),
            ]" -->
          <base-text-input
            :is-password="true"
            v-model="password"
            :label="$t('login.password')"
            filled
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </base-text-input>

          <!-- Login Button -->
          <q-btn
            type="submit"
            @click="doLogin"
            :label="$t('login.submit')"
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
          :label="$t('login.forgetpassword')"
          @click="forgotPassword"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { requiredValidation } from "../common/Input-Validations";
import { useUserStore } from "../Data/Stores/useUserStore";

const $q = useQuasar();
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const isPwd = ref(true);
const loading = ref(false);
const doLogin = async () => {
  let response = await userStore.login(email.value, password.value);
  debugger;
  if (response.isAuthenticated) {
    $q.notify({
      message: "User is Authenticated",
    });
    useRouter().push("/");
  }
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
