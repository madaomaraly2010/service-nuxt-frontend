<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md login-card">
      <q-card-section>
        <div class="text-h5 text-center">{{ $t("login.login") }}</div>
      </q-card-section>
      <!-- @submit="doLogin" -->
      <q-card-section>
        <base-form
          :on-save="doLogin"
          :save-label="$t('login.submit')"
          :show-cancel-button="false"
          ref="loginForm"
        >
          <base-text-input
            v-model="email"
            :label="$t('user.fields.username')"
            outlined
            :rules="[ValidatorRules.required($t, $t('user.fields.username'))]"
            :dense="false"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </base-text-input>
          <div class="q-ma-lg"></div>

          <base-text-input
            ref="passwordRef"
            :is-password="true"
            v-model="password"
            :label="$t('user.fields.password_hash')"
            :rules="[
              ValidatorRules.required($t, 'user.fields.password_hash'),
              // ValidatorRules.match(
              //   $t,
              //   () => confirmPassword,
              //   'user.fields.confirm_password',
              //   'user.fields.password_hash'
              // ),
            ]"
            outlined
            :dense="false"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </base-text-input>

          <!-- <base-text-input
            ref="confirmRef"
            :is-password="true"
            v-model="confirmPassword"
            :label="$t('user.fields.confirm_password')"
            @update:model-value="() => passwordRef.validate()"
            :rules="[
              ValidatorRules.required($t, $t('user.fields.confirm_password')),
              ValidatorRules.match(
                $t,
                () => password,
                'user.fields.confirm_password',
                'user.fields.password_hash'
              ),
            ]"
            outlined
            :dense="false"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </base-text-input> -->
        </base-form>
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
import { ValidatorRules } from "../common/validations";
import { useUserStore } from "~/Data/Stores";
import { I18Messages } from "~/locales/i18-key";
// import { useUserStore } from "../Data/Stores/useUserStore";
const passwordRef = ref();
// const confirmRef = ref();
const $q = useQuasar();
const userStore = useUserStore();

const email = ref("madaomaraly2010@yahoo.com");
const password = ref("12345678");
// const confirmPassword = ref("");
const uiHelper = useUIHelper();
// const isPwd = ref(true);
const loading = ref(false);
const loginForm: Ref<QForm | null> = ref<QForm | null>(null);
const doLogin = async () => {
  loading.value = true;

  await new Promise((resolve, reject) => setTimeout(resolve, 1000));

  let response = await userStore.login(email.value, password.value);

  loading.value = false;
  //====call AppUiHelper.showErrorsIfFound
  //AppUiHelper.showErrorsIfFound(response);

  if (response.isAuthenticated) {
    uiHelper.showSucceedMessage(I18Messages.user_authenticated);
    // $q.notify({
    //   message: ,
    //   position: "top",
    // });
  } else {
    uiHelper.showErrorMessage(I18Messages.user_not_authenticated);
    // $q.notify({
    //   message: nuxtApp.$t("messages.user_not_authenticated"),
    //   position: "top",
    //   color: "red-10",
    // });
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
