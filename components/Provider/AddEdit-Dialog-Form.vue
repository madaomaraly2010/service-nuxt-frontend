<template>
  <BaseDialogForm ref="dialog">
    <q-page class="q-pa-md">
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          {{ $t("provider.title") }}
        </q-card-section>
        <q-form>
          <q-tabs v-model="tab" class="text-primary" align="justify">
            <q-tab name="personal" :label="$('provider.tabs.personal')" />
            <q-tab name="contact" :label="$('provider.tabs.contact')" />
            <q-tab name="employment" :label="$('provider.tabs.employment')" />
            <q-tab name="documents" :label="$('provider.tabs.documents')" />
            <q-tab name="additional" :label="$('provider.tabs.additional')" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <!-- Personal Information Tab -->
            <q-tab-panel name="personal">
              <div class="row">
                <BaseTextInput
                  v-model="row.user.first_name"
                  label="Name"
                  outlined
                  lazy-rules
                />
                <BaseTextInput
                  v-model="row.user.middle_name"
                  label="Name"
                  outlined
                  lazy-rules
                />
                <BaseTextInput
                  v-model="row.user.last_name"
                  label="Name"
                  outlined
                  lazy-rules
                />
              </div>
              <BaseSelectInput
                v-model="row.user.gender"
                :options="genderOptions"
                label="Gender"
                outlined
                lazy-rules
              />
              <BaseSelectInput
                v-model="row.country_id"
                :options="countryStore.list"
                option-label="arb_name"
                option-value="id"
                label="Nationality"
                outlined
              />
              <BaseTextInput
                v-model="row.user.date_birth"
                label="Date of Birth"
                type="date"
                outlined
              />
              <BaseSelectInput
                v-model="row.religion_status_id"
                :options="religionOptions"
                label="Religion"
                outlined
              />
            </q-tab-panel>

            <!-- Contact Information Tab -->
            <q-tab-panel name="contact">
              <BaseTextInput
                v-model="row.phone"
                label="Phone"
                outlined
                lazy-rules
                :rules="[(val) => !!val || 'Phone is required']"
              />
              <BaseTextInput
                v-model="row.mobile"
                label="Mobile"
                outlined
                lazy-rules
                :rules="[(val) => !!val || 'Mobile is required']"
              />
              <BaseTextInput
                v-model="row.email"
                label="Email"
                type="email"
                outlined
              />
            </q-tab-panel>

            <!-- Employment Details Tab -->
            <q-tab-panel name="employment">
              <BaseSelectInput
                v-model="row.job"
                :options="jobOptions"
                label="Job Title"
                outlined
              />
              <BaseTextInput
                v-model="row.salary"
                label="Net Salary"
                type="number"
                outlined
              />
              <BaseSelectInput
                v-model="row.location"
                :options="locationOptions"
                label="Work Location"
                outlined
              />
              <BaseTextInput
                v-model="row.experienceStart"
                label="Experience Start Date"
                type="date"
                outlined
              />
            </q-tab-panel>

            <!-- Documents & Status Tab -->
            <q-tab-panel name="documents">
              <BaseTextInput
                v-model="row.idNumber"
                label="ID/Residence Number"
                outlined
              />
              <BaseTextInput
                v-model="row.passportNumber"
                label="Passport Number"
                outlined
              />
              <BaseTextInput
                v-model="row.contractExpiry"
                label="Contract Expiry Date"
                type="date"
                outlined
              />
              <BaseSelectInput
                v-model="row.status"
                :options="statusOptions"
                label="Employment Status"
                outlined
              />
            </q-tab-panel>

            <!-- Additional Information Tab -->
            <q-tab-panel name="additional">
              <BaseSelectInput
                v-model="row.cookingSkills"
                :options="cookingOptions"
                label="Cooking Skills"
                outlined
              />
              <BaseSelectInput
                v-model="row.childcare"
                :options="childcareOptions"
                label="Childcare"
                outlined
              />
              <BaseSelectInput
                v-model="row.englishSkill"
                :options="languageOptions"
                label="English Language Skill"
                outlined
              />
              <BaseSelectInput
                v-model="row.arabicSkill"
                :options="languageOptions"
                label="Arabic Language Skill"
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
const dialog = ref(null);

const openDialog = () => (dialog.value as any).open();
const closeDialog = () => (dialog.value as any).close();
defineExpose({ openDialog, closeDialog });
const tab = ref("personal");

const row = ref<Provider>(Provider.create());

const genderOptions = [
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
];

const religionOptions = ["Islam", "Christianity", "Hinduism"];
const jobOptions = ["Employee", "Manager", "Worker"];
const locationOptions = ["Dubai", "Abu Dhabi", "Sharjah"];
const statusOptions = ["Available", "Unavailable"];
const cookingOptions = ["Beginner", "Intermediate", "Expert"];
const childcareOptions = ["Accepted", "Not Accepted"];
const languageOptions = ["Weak", "Intermediate", "Fluent"];
</script>
