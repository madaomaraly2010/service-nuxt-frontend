<template>
  <div :dir="globalStore.direction">
    <BaseForm
      :on-save="onSave"
      :title="$t(I18Provider.title)"
      :show-cancel-button="true"
      :show-save-button="true"
      :dialog-ref="dialogRef"
      :on-prevalidate="preValidate"
    >
      <q-tabs v-model="tab" class="text-primary" align="justify">
        <q-tab
          icon="fa fa-phone"
          name="account"
          :label="$t(I18Provider.Tabs.account)"
        />
        <q-tab
          icon="fa fa-user"
          name="personal"
          :label="$t(I18Provider.Tabs.personal)"
        />

        <q-tab
          icon="fa fa-briefcase"
          name="employment"
          :label="$t(I18Provider.Tabs.employment)"
        />

        <q-tab
          icon="fa fa-plus"
          name="additional"
          :label="$t(I18Provider.Tabs.additional)"
        />
      </q-tabs>
      <q-tab-panels class="q-pa-sm" v-model="tab" animated>
        <!-- Personal Information Tab -->
        <q-tab-panel name="account" class="panel-size">
          <div class="row">
            <BaseTextInput
              class="col-4 offset-1"
              v-model="editRow.user.email"
              :label="$t(I18User.Fields.email)"
              type="email"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>

          <div class="row">
            <BaseTextInput
              :is-password="true"
              class="col-4 offset-1"
              v-model="editRow.user.password_hash"
              :label="$t(I18User.Fields.password_hash)"
              outlined
              lazy-rules
            />
          </div>
        </q-tab-panel>

        <q-tab-panel name="personal" class="panel-size">
          <div class="row">
            <BaseTextInput
              class="col-4"
              v-model="editRow.user.first_name"
              :label="$t(I18User.Fields.first_name)"
              outlined
              lazy-rules
            />

            <BaseTextInput
              class="col-4 offset-1"
              v-model="editRow.nick_name"
              :label="$t(I18Provider.Fields.nick_name)"
              outlined
              lazy-rules
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseSelectInput
              class="col-4"
              v-model="editRow.gender"
              :options="genderOptions"
              :label="$t(I18Provider.Fields.gender)"
              outlined
              lazy-rules
            />
            <BaseSelectInput
              class="col-4 offset-1"
              v-model="editRow.country_id"
              :options="countryStore.list"
              option-label="arb_name"
              option-value="id"
              :label="$t(I18Provider.Fields.country_id)"
              outlined
            />
          </div>
          <div class="row">
            <BaseDateInput
              class="col-4"
              v-model="editRow.date_birth"
              :label="$t(I18Provider.Fields.date_birth)"
              outlined
            />
            <BaseSelectInput
              class="col-4 offset-1"
              v-model="editRow.religion_status_id"
              :options="religionStatusStore.list"
              option-label="arb_name"
              option-value="id"
              :label="$t(I18Provider.Fields.religion_status_id)"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseTextInput
              class="col-4"
              v-model="editRow.user.mobile"
              :label="$t(I18User.Fields.mobile)"
              outlined
              lazy-rules
              required
              mobile
            />
            <BaseUploader
              v-model="editRow.profile_picture"
              class="col-4 offset-1"
            ></BaseUploader>
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseTextAreaInput
              class="col"
              :label="$t(I18Provider.Fields.notes)"
              v-model="editRow.notes"
            >
            </BaseTextAreaInput>
          </div>
        </q-tab-panel>

        <!-- Employment Details Tab -->
        <q-tab-panel
          name="employment"
          class="panel-size"
          v-show="tab == 'employment'"
        >
          <div class="row">
            <BaseNumberInput
              class="col-4"
              :min="10"
              :max="100"
              v-model="editRow.net_salary"
              :label="$t(I18Provider.Fields.net_salary)"
              outlined
              required
              lazy-rules
            />
            <BaseNumberInput
              class="col-4 offset-1"
              :min="0"
              :max="1000000"
              v-model="editRow.wage_per_month"
              :label="$t(I18Provider.Fields.wage_per_month)"
              required
              lazy-rules
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseTextInput
              class="col-4"
              v-model="editRow.card_number"
              :label="$t(I18Provider.Fields.card_number)"
              outlined
            />
            <BaseDateInput
              class="col-4 offset-1"
              v-model="editRow.card_expire"
              :label="$t(I18Provider.Fields.card_expire)"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>

          <div class="row">
            <BaseTextInput
              class="col-4"
              v-model="editRow.passport_number"
              :label="$t(I18Provider.Fields.passport_number)"
              outlined
            />
            <BaseDateInput
              class="col-4 offset-1"
              v-model="editRow.passport_expire"
              :label="$t(I18Provider.Fields.passport_expire)"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>

          <div class="row">
            <BaseTextInput
              class="col-4"
              v-model="editRow.license_number"
              :label="$t(I18Provider.Fields.license_number)"
              outlined
            />
            <BaseDateInput
              class="col-4 offset-1"
              v-model="editRow.license_expiry"
              :label="$t(I18Provider.Fields.license_expiry)"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>

          <div class="row">
            <BaseSelectInput
              class="col-4"
              v-model="editRow.rent_status_id"
              :options="rentStatusStore.list"
              option-value="id"
              option-label="arb_name"
              :label="$t(I18Provider.Fields.rent_status_id)"
              required
              outlined
            />
            <BaseDateInput
              class="col-4 offset-1"
              v-model="editRow.experience_date"
              :label="$t(I18Provider.Fields.experience_date)"
              type="date"
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseTextAreaInput
              class="col"
              :label="$t(I18Provider.Fields.bio)"
              v-model="editRow.bio"
            >
            </BaseTextAreaInput>
          </div>
        </q-tab-panel>

        <!-- Documents & Status Tab -->
        <!-- <q-tab-panel name="documents" class="panel-size"> </q-tab-panel> -->

        <!-- Additional Information Tab -->
        <q-tab-panel
          name="additional"
          class="panel-size"
          v-show="tab === 'additional'"
        >
          <div class="row">
            <BaseSelectInput
              class="col-4"
              v-model="editRow.cook_status_id"
              :options="cookStatusStore.list"
              option-value="id"
              option-label="arb_name"
              :label="$t(I18Provider.Fields.cook_status_id)"
              required
              outlined
            />
            <BaseSelectInput
              class="col-4 offset-1"
              v-model="editRow.child_status_id"
              :options="childStatusStore.list"
              option-value="id"
              option-label="arb_name"
              :label="$t(I18Provider.Fields.child_status_id)"
              required
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseSelectInput
              class="col-4"
              v-model="editRow.arabic_status_id"
              :options="langStatusStore.list"
              option-value="id"
              option-label="arb_name"
              :label="$t(I18Provider.Fields.arabic_status_id)"
              required
              outlined
            />

            <BaseSelectInput
              class="col-4 offset-1"
              v-model="editRow.english_status_id"
              :options="langStatusStore.list"
              option-value="id"
              option-label="arb_name"
              :label="$t(I18Provider.Fields.english_status_id)"
              required
              outlined
            />
          </div>
          <div class="row q-my-sm"></div>
          <div class="row">
            <BaseSelectInput
              class="col-4"
              v-model="editRow.max_children"
              :options="[1, 2, 3, 4, 5, 6]"
              :label="$t(I18Provider.Fields.max_children)"
              outlined
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import type { QForm } from "quasar";
import type { ProviderResponse } from "~/Data/Responses/Model-Responses";
import {
  useGlobalStore,
  useProviderStore,
  useLookupStore,
} from "~/Data/Stores";
// import { date } from "quasar";
import type { IProviderFormProps } from "~/common/common-types";
import {
  I18Global,
  I18Messages,
  I18Provider,
  I18User,
} from "~/locales/i18-key";
const tab = ref("personal");
const nuxtApp = useNuxtApp();
const preValidate = async (form: QForm) => {
  let tabs = ["account", "personal", "employment", "additional"];

  let validated = true;
  for (let i = 0; i < tabs.length; i++) {
    tab.value = tabs[i];
    await nextTick();
    validated = validated && (await form.validate());
  }
  return validated;
};
const {
  rentStatusStore,
  cookStatusStore,
  langStatusStore,
  religionStatusStore,
  countryStore,
  childStatusStore,
} = useLookupStore();
console.log("Form", "rentStatusStore", rentStatusStore.list);
console.log("Form", "cookStatusStore", cookStatusStore.list);
console.log("Form", "langStatusStore", langStatusStore.list);
console.log("Form", "religionStatusStore", religionStatusStore.list);
console.log("Form", "countryStore", countryStore.list);
console.log("Form", "childStatusStore", childStatusStore.list);
const genderOptions = [
  {
    label: nuxtApp.$t(I18Global.male),
    value: 1,
  },
  {
    label: nuxtApp.$t(I18Global.female),
    value: 2,
  },
];
const globalStore = useGlobalStore();
const props = defineProps<IProviderFormProps>();
const store = useProviderStore();
const uiHelper = useUIHelper();

const onSave = async () => {
  let response: ProviderResponse = await store.save(props.editRow);
  if (response.success) {
    uiHelper.showSucceedMessage(I18Messages.operation_successed);
  }
};
</script>

<style scoped>
.border {
  border-radius: 5px;
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
}
</style>
