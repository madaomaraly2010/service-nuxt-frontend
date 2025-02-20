<template>
  <BaseDialogForm ref="dialog">
    <q-page class="q-pa-md">
      <q-card class="q-pa-md">
        <q-card-section class="text-h6 text-primary">
          Employee Information Form
        </q-card-section>

        <q-form @submit="saveForm" @reset="resetForm">
          <q-tabs v-model="tab" class="text-primary" align="justify">
            <q-tab name="personal" label="Personal Info" />
            <q-tab name="contact" label="Contact Info" />
            <q-tab name="employment" label="Employment Details" />
            <q-tab name="documents" label="Documents & Status" />
            <q-tab name="additional" label="Additional Info" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <!-- Personal Information Tab -->
            <q-tab-panel name="personal">
              <BaseTextInput
                v-model="row.name"
                label="Name"
                outlined
                lazy-rules
              />
              <BaseSelectInput
                v-model="row.gender"
                :options="genderOptions"
                label="Gender"
                outlined
                lazy-rules
              />
              <BaseSelectInput
                v-model="row.nationality"
                :options="nationalityOptions"
                label="Nationality"
                outlined
              />
              <BaseTextInput
                v-model="row.birthDate"
                label="Date of Birth"
                type="date"
                outlined
              />
              <BaseSelectInput
                v-model="row.religion"
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

<script setup>
import { ref } from "vue";
const dialog = ref(null);

const openDialog = () => dialog.value.open();
const closeDialog = () => dialog.value.close();
defineExpose({ openDialog, closeDialog });
const tab = ref("personal");

const row = ref({
  name: "",
  gender: null,
  nationality: null,
  birthDate: "",
  religion: null,
  phone: "",
  mobile: "",
  email: "",
  job: null,
  salary: "",
  location: null,
  experienceStart: "",
  idNumber: "",
  passportNumber: "",
  contractExpiry: "",
  status: null,
  cookingSkills: null,
  childcare: null,
  englishSkill: null,
  arabicSkill: null,
});

const genderOptions = ["Male", "Female"];
const nationalityOptions = ["Bangladesh", "India", "Pakistan", "Philippines"];
const religionOptions = ["Islam", "Christianity", "Hinduism"];
const jobOptions = ["Employee", "Manager", "Worker"];
const locationOptions = ["Dubai", "Abu Dhabi", "Sharjah"];
const statusOptions = ["Available", "Unavailable"];
const cookingOptions = ["Beginner", "Intermediate", "Expert"];
const childcareOptions = ["Accepted", "Not Accepted"];
const languageOptions = ["Weak", "Intermediate", "Fluent"];

const saveForm = () => {
  console.log("Form data saved:", form.value);
};

const resetForm = () => {
  form.value = {
    name: "",
    gender: null,
    nationality: null,
    birthDate: "",
    religion: null,
    phone: "",
    mobile: "",
    email: "",
    job: null,
    salary: "",
    location: null,
    experienceStart: "",
    idNumber: "",
    passportNumber: "",
    contractExpiry: "",
    status: null,
    cookingSkills: null,
    childcare: null,
    englishSkill: null,
    arabicSkill: null,
  };
};
</script>
