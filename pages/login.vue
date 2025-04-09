<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md login-card">
      <q-card-section>
        <div class="text-h5 text-center">{{ $t("login.login") }}</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="doLogin" ref="loginForm">
          <base-text-input
            v-model="email"
            :label="$t('user.fields.username')"
            outlined
            :rules="[requiredValidation($t, $t('user.fields.username'))]"
            :dense="false"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </base-text-input>
          <div class="q-ma-lg"></div>

          <base-text-input
            :is-password="true"
            v-model="password"
            :label="$t('user.fields.password_hash')"
            :rules="[requiredValidation($t, $t('user.fields.password_hash'))]"
            outlined
            :dense="false"
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

<script setup lang="ts">
import { ref } from "vue";
import { QForm, useQuasar } from "quasar";
import { requiredValidation } from "../common/Input-Validations";
import { useUserStore } from "../Data/Stores/useUserStore";

const $q = useQuasar();
const userStore = useUserStore();
const nuxtApp = useNuxtApp();
const email = ref("");
const password = ref("");
// const isPwd = ref(true);
const loading = ref(false);
const loginForm: Ref<QForm | null> = ref<QForm | null>(null);
const doLogin = async () => {
  const valid = await loginForm.value?.validate();
  if (!valid) return;

  let response = await userStore.login(email.value, password.value);
  if (response.isAuthenticated) {
    $q.notify({
      message: nuxtApp.$t("messages.user_authenticated"),
      position: "top",
    });
  } else {
    $q.notify({
      message: nuxtApp.$t("messages.user_not_authenticated"),
      position: "top",
      color: "red-10",
    });
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
