<template>
  <BaseDialogForm ref="dialog">
    <!-- <q-page class="q-pa-md bg-accent"> -->
    <q-card class="q-pa-md">
      <q-card-section class="text-h6 text-primary">
        {{ $t("provider.title") }}
      </q-card-section>
      <q-form :dir="globalStore.direction">
        <q-tabs v-model="tab" class="text-primary" align="justify">
          <q-tab
            icon="fa fa-phone"
            name="account"
            :label="$t('provider.tabs.account')"
          />
          <q-tab
            icon="fa fa-user"
            name="personal"
            :label="$t('provider.tabs.personal')"
          />

          <q-tab
            icon="fa fa-briefcase"
            name="employment"
            :label="$t('provider.tabs.employment')"
          />
          <!-- <q-tab
            icon="fa fa-file-alt"
            name="documents"
            :label="$t('provider.tabs.documents')"
          /> -->
          <q-tab
            icon="fa fa-plus"
            name="additional"
            :label="$t('provider.tabs.additional')"
          />
        </q-tabs>

        <q-tab-panels class="q-pa-sm" v-model="tab">
          <!-- Personal Information Tab -->
          <q-tab-panel name="account" class="panel-size">
            <div class="row">
              <BaseTextInput
                class="col-4"
                v-model="row.user.username"
                :label="$t('user.fields.username')"
                outlined
                lazy-rules
              />

              <BaseTextInput
                :is-password="true"
                class="col-4 offset-1"
                v-model="row.user.password_hash"
                :label="$t('user.fields.password_hash')"
                outlined
                lazy-rules
              />
            </div>
          </q-tab-panel>

          <q-tab-panel name="personal" class="panel-size">
            <div class="row q-col-gutter-sm">
              <BaseTextInput
                class="col-4"
                v-model="row.user.first_name"
                :label="$t('user.fields.first_name')"
                outlined
                lazy-rules
              />

              <BaseTextInput
                class="col-4"
                v-model="row.user.last_name"
                :label="$t('user.fields.last_name')"
                outlined
                lazy-rules
              />

              <BaseTextInput
                class="col-4"
                v-model="row.nick_name"
                :label="$t('provider.fields.nick_name')"
                outlined
                lazy-rules
              />
            </div>
            <div class="q-my-sm"></div>
            <div class="row">
              <BaseSelectInput
                class="col-4"
                v-model="row.gender"
                :options="genderOptions"
                :label="$t('provider.fields.gender')"
                outlined
                lazy-rules
              />
              <BaseSelectInput
                class="col-4 offset-1"
                v-model="row.country_id"
                :options="countryStore.list"
                option-label="arb_name"
                option-value="id"
                :label="$t('provider.fields.country_id')"
                outlined
              />
            </div>
            <div class="q-my-sm"></div>
            <div class="row">
              <BaseDateInput
                class="col-4"
                v-model="row.date_birth"
                :label="$t('provider.fields.date_birth')"
                outlined
              />
              <BaseSelectInput
                class="col-4 offset-1"
                v-model="row.religion_status_id"
                :options="religionStore.list"
                option-label="arb_name"
                option-value="id"
                :label="$t('provider.fields.religion_status_id')"
                outlined
              />
            </div>
            <div class="row q-my-sm"></div>
            <div class="row">
              <BaseTextInput
                class="col-4"
                v-model="row.user.mobile"
                :label="$t('user.fields.mobile')"
                outlined
                lazy-rules
                :rules="[(val) => !!val || 'Mobile is required']"
              />
              <BaseTextInput
                class="col-4 offset-1"
                v-model="row.user.email"
                :label="$t('user.fields.email')"
                type="email"
                outlined
              />
            </div>
          </q-tab-panel>

          <!-- Contact Information Tab -->
          <!-- <q-tab-panel name="contact" class="panel-size"> -->
          <!-- <BaseTextInput
              v-model="row.user.mobile"
              label="Mobile"
              outlined
              lazy-rules
              :rules="[(val) => !!val || 'Mobile is required']"
            />
            <div class="row q-my-sm"></div>
            <BaseTextInput
              v-model="row.user.email"
              label="Email"
              type="email"
              outlined
            /> -->
          <!-- </q-tab-panel> -->

          <!-- Employment Details Tab -->
          <q-tab-panel name="employment" class="panel-size">
            <div class="row">
              <BaseNumberInput
                class="col-4"
                v-model="row.net_salary"
                :label="$t('provider.fields.net_salary')"
                outlined
              />
              <BaseNumberInput
                class="col-4 offset-1"
                v-model="row.wage_amount"
                :label="$t('provider.fields.wage_amount')"
              />
            </div>
            <div class="row q-my-sm"></div>
            <div class="row">
              <BaseTextInput
                class="col-4"
                v-model="row.card_number"
                :label="$t('provider.fields.card_number')"
                outlined
              />
              <BaseDateInput
                class="col-4 offset-1"
                v-model="row.card_expire"
                :label="$t('provider.fields.card_expire')"
                outlined
              />
            </div>
            <div class="row q-my-sm"></div>

            <div class="row">
              <BaseTextInput
                class="col-4"
                v-model="row.passport_number"
                :label="$t('provider.fields.passport_number')"
                outlined
              />
              <BaseDateInput
                class="col-4 offset-1"
                v-model="row.passport_expire"
                :label="$t('provider.fields.passport_expire')"
                outlined
              />
            </div>
            <div class="row q-my-sm"></div>

            <div class="row">
              <BaseTextInput
                class="col-4"
                v-model="row.license_number"
                :label="$t('provider.fields.license_number')"
                outlined
              />
              <BaseDateInput
                class="col-4 offset-1"
                v-model="row.license_expiry"
                :label="$t('provider.fields.license_expiry')"
                outlined
              />
            </div>
            <div class="row q-my-sm"></div>

            <div class="row">
              <BaseSelectInput
                class="col-4"
                v-model="row.rent_status_id"
                :options="rentStore.list"
                option-value="id"
                option-label="arb_name"
                :label="$t('provider.fields.rent_status_id')"
                outlined
              />
              <BaseDateInput
                class="col-4 offset-1"
                v-model="row.experience_date"
                :label="$t('provider.fields.experience_date')"
                type="date"
                outlined
              />
            </div>
          </q-tab-panel>

          <!-- Documents & Status Tab -->
          <!-- <q-tab-panel name="documents" class="panel-size"> </q-tab-panel> -->

          <!-- Additional Information Tab -->
          <q-tab-panel name="additional" class="panel-size">
            <div class="row">
              <BaseSelectInput
                class="col-4"
                v-model="row.cook_status_id"
                :options="cookStore.list"
                option-value="id"
                option-label="arb_name"
                :label="$t('provider.fields.cook_status_id')"
                outlined
              />
              <BaseSelectInput
                class="col-4 offset-1"
                v-model="row.child_status_id"
                :options="childStore.list"
                option-value="id"
                option-label="arb_name"
                :label="$t('provider.fields.child_status_id')"
                outlined
              />
            </div>
            <div class="row q-my-sm"></div>
            <div class="row">
              <BaseSelectInput
                class="col-4"
                v-model="row.arabic_status_id"
                :options="langStore.list"
                option-value="id"
                option-label="arb_name"
                :label="$t('provider.fields.arabic_status_id')"
                outlined
              />

              <BaseSelectInput
                class="col-4 offset-1"
                v-model="row.english_status_id"
                :options="langStore.list"
                option-value="id"
                option-label="arb_name"
                :label="$t('provider.fields.english_status_id')"
                outlined
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <!-- <q-card-actions align="right">
            <q-btn type="submit" label="Save" color="primary" />
            <q-btn type="reset" label="Cancel" color="negative" flat />
          </q-card-actions> -->
      </q-form>
    </q-card>
    <!-- </q-page> -->
  </BaseDialogForm>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Provider } from "~/Data/Models";
import {
  useCountryStore,
  useCookStatusStore,
  useRentStatusStore,
  useChildStatusStore,
  useReligionStatusStore,
  useLangStatusStore,
  useGlobalStore,
} from "~/Data/Stores";
const dialog = ref(null);

const globalStore = useGlobalStore();

const countryStore = useCountryStore();

const langStore = useLangStatusStore();

const religionStore = useReligionStatusStore();

const childStore = useChildStatusStore();

const cookStore = useCookStatusStore();

const rentStore = useRentStatusStore();

const openDialog = () => (dialog.value as any).open();
const closeDialog = () => (dialog.value as any).close();
defineExpose({ openDialog, closeDialog });
const tab = ref("account");

const row = ref<Provider>(Provider.create());

const genderOptions = [
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
];

// const religionOptions = ["Islam", "Christianity", "Hinduism"];
// const jobOptions = ["Employee", "Manager", "Worker"];
// const locationOptions = ["Dubai", "Abu Dhabi", "Sharjah"];
// const statusOptions = ["Available", "Unavailable"];
// const cookingOptions = ["Beginner", "Intermediate", "Expert"];
// const childcareOptions = ["Accepted", "Not Accepted"];
// const languageOptions = ["Weak", "Intermediate", "Fluent"];
</script>
<style scoped>
.panel-size {
  width: 40vw;
  height: 40vh;
}
.q-tab-panel.panel-size {
  /* overflow-y: hidden; */
}
.row-height {
  /* height: 6vh;
  margin-bottom: 1vh; */
}
</style>
