// composables/useLookupStore.ts

import { useWorkCategoryStore } from "./useWorkCategoryStore";
import { useWorkStore } from "./useWorkStore";
import { useLangStatusStore } from "./useLangStatusStore";
import { useChildStatusStore } from "./useChildStatusStore";
import { useRentStatusStore } from "./useRentStatusStore";
import { useCookStatusStore } from "./useCookStatusStore";
import { useReligionStatusStore } from "./useReligionStatusStore";
import { useCountryStore } from "./useCountryStore";
import { useRequestStatusStore } from ".";
import { TableKeys } from "~/common/table-keys";

interface ILookupState {
  workCategoryStore: any;
  workStore: any;
  langStore: any;
  childStore: any;
  rentStore: any;
  cookStore: any;
  religionStore: any;
  countryStore: any;
  statusStore: any;
}

export const useLookupStore = defineStore("lookups", {
  state: (): ILookupState => ({
    workCategoryStore: useWorkCategoryStore(),
    workStore: any,
    langStore: any,
    childStore: any,
    rentStore: any,
    cookStore: any,
    religionStore: any,
    countryStore: any,
    statusStore: any,
  }),
  getters: {},
  actions: {
    async fetchAllLookups(): Promise<void> {
      // Uncomment these when the methods are implemented

      workCategoryStore = useWorkCategoryStore();
      workStore = useWorkStore();
      langStore = useLangStatusStore();
      childStore = useChildStatusStore();
      rentStore = useRentStatusStore();
      cookStore = useCookStatusStore();
      religionStore = useReligionStatusStore();
      countryStore = useCountryStore();
      statusStore = useRequestStatusStore();
      await workCategoryStore.findAll();
      await workStore.findAll();
      await langStore.findAll();
      await childStore.findAll();
      await rentStore.findAll();
      await cookStore.findAll();
      await religionStore.findAll();
      await countryStore.findAll();
      await statusStore.findAll();

      provide(TableKeys.REQUEST_STATUS_KEY, statusStore);

      console.log("workCategoryStore", workCategoryStore.list);
      console.log("workStore", workStore.list);
      console.log("langStore", langStore.list);
      console.log("childStore", childStore.list);
      console.log("rentStore", rentStore.list);
      console.log("cookStore", cookStore.list);
      console.log("religionStore", religionStore.list);
      console.log("countryStore", countryStore.list);
    },
  },
});
