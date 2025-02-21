<template>
  <BaseDialogForm ref="dialog">
    <q-page class="q-pa-md bg-accent">
      <q-card class="q-pa-md bg-amber full-height">
        <q-card-section class="text-h6 text-primary">
          {{ $t("provider.title") }}
        </q-card-section>
        <q-form :dir="globalStore.direction">
          <q-tabs v-model="tab" class="text-primary" align="justify">
            <q-tab name="personal" :label="$t('provider.tabs.personal')" />
            <q-tab name="contact" :label="$t('provider.tabs.contact')" />
            <q-tab name="employment" :label="$t('provider.tabs.employment')" />
            <q-tab name="documents" :label="$t('provider.tabs.documents')" />
            <q-tab name="additional" :label="$t('provider.tabs.additional')" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <!-- Personal Information Tab -->
            <q-tab-panel name="personal">
              <div class="row">
                <BaseTextInput
                  class="col-3"
                  v-model="row.user.first_name"
                  label="First Name"
                  outlined
                  lazy-rules
                />
                <BaseTextInput
                  class="col-3 q-mr-sm"
                  v-model="row.user.middle_name"
                  label="Middle Name"
                  outlined
                  lazy-rules
                />
                <BaseTextInput
                  class="col-3"
                  v-model="row.user.last_name"
                  label="Last Name"
                  outlined
                  lazy-rules
                />
              </div>
              <div class="q-my-sm"></div>
              <div class="row" style="height: 15vh">
                <BaseSelectInput
                  class="q-my-md col-3"
                  v-model="row.user.gender"
                  :options="genderOptions"
                  label="Gender"
                  outlined
                  lazy-rules
                />
                <BaseSelectInput
                  class="col-3"
                  v-model="row.country_id"
                  :options="countryStore.list"
                  option-label="arb_name"
                  option-value="id"
                  label="Nationality"
                  outlined
                />
                <BaseDateInput
                  class="col-3"
                  v-model="row.user.date_birth"
                  label="Date of Birth"
                  type="date"
                  outlined
                />
              </div>

              <div class="row">
                <BaseSelectInput
                  class="col-3"
                  v-model="row.religion_status_id"
                  :options="religionStore.list"
                  option-label="arb_name"
                  option-value="id"
                  label="Religion"
                  outlined
                />
              </div>
            </q-tab-panel>

            <!-- Contact Information Tab -->
            <q-tab-panel name="contact">
              <BaseTextInput
                v-model="row.user.mobile"
                label="Mobile"
                outlined
                lazy-rules
                :rules="[(val) => !!val || 'Mobile is required']"
              />
              <BaseTextInput
                v-model="row.user.email"
                label="Email"
                type="email"
                outlined
              />
            </q-tab-panel>

            <!-- Employment Details Tab -->
            <q-tab-panel name="employment">
              <BaseNumberInput
                v-model="row.net_salary"
                label="Net Salary"
                type="number"
                outlined
              />
              <!-- <BaseSelectInput
                v-model="row.location"
                :options="locationOptions"
                label="Work Location"
                outlined
              /> -->
              <BaseDateInput
                v-model="row.experience_date"
                label="Experience Start Date"
                type="date"
                outlined
              />
            </q-tab-panel>

            <!-- Documents & Status Tab -->
            <q-tab-panel name="documents">
              <BaseTextInput
                v-model="row.card_number"
                label="ID/Residence Number"
                outlined
              />
              <BaseDateInput
                v-model="row.card_expire"
                label="Card ID Expiry Date"
                outlined
              />

              <BaseTextInput
                v-model="row.passport_number"
                label="Passport Number"
                outlined
              />
              <BaseDateInput
                v-model="row.passport_expire"
                label="Passport Expire Date"
                outlined
              />

              <BaseTextInput
                v-model="row.license_number"
                label="License Number"
                outlined
              />
              <BaseDateInput
                v-model="row.license_expiry"
                label="License Expire Date"
                outlined
              />

              <BaseSelectInput
                v-model="row.rent_status_id"
                :options="rentStore.list"
                option-value="id"
                option-label="arb_name"
                label="Rent Status"
                outlined
              />
            </q-tab-panel>

            <!-- Additional Information Tab -->
            <q-tab-panel name="additional">
              <BaseSelectInput
                v-model="row.cook_status_id"
                :options="cookStore.list"
                option-value="id"
                option-label="arb_name"
                label="Cooking Status"
                outlined
              />
              <BaseSelectInput
                v-model="row.child_status_id"
                :options="childStore.list"
                option-value="id"
                option-label="arb_name"
                label="Childcare Status"
                outlined
              />
              <BaseSelectInput
                v-model="row.arabic_status_id"
                :options="langStore.list"
                option-value="id"
                option-label="arb_name"
                label="Arabic Language Skill"
                outlined
              />
              <BaseSelectInput
                v-model="row.english_status_id"
                :options="langStore.list"
                option-value="id"
                option-label="arb_name"
                label="English Language Skill"
                outlined
              />
            </q-tab-panel>
          </q-tab-panels>

          <q-card-actions align="right">
            <q-btn type="submit" label="Save" color="primary" />
            <q-btn type="reset" label="Cancel" color="negative" flat />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-page>
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
const tab = ref("personal");

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
