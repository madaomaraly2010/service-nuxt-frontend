import { useWorkCategoryStore } from "./useWorkCategoryStore";

import { useWorkStore } from "./useWorkStore";

import { useLangStatusStore } from "./useLangStatusStore";

import { useChildStatusStore } from "./useChildStatusStore";

import { useRentStatusStore } from "./useRentStatusStore";

import { useCookStatusStore } from "./useCookStatusStore";

import { useReligionStatusStore } from "./useReligionStatusStore";

import { useCountryStore } from "./useCountryStore";

export const state = reactive({
  async fetchAllLookups(): Promise<void> {
    const workCategoryStore = useWorkCategoryStore();
    const workStore = useWorkStore();
    const langStore = useLangStatusStore();
    const childStore = useChildStatusStore();
    const rentStore = useRentStatusStore();
    const cookStore = useCookStatusStore();
    const religionStore = useReligionStatusStore();
    const countryStore = useCountryStore();

    await workCategoryStore.findAll();
    await workStore.findAll();
    await langStore.findAll();
    await childStore.findAll();
    await rentStore.findAll();
    await cookStore.findAll();
    await religionStore.findAll();
    await countryStore.findAll();

    console.log("workCategoryStore", workCategoryStore.list);
    console.log("workStore", workStore.list);
    console.log("langStore", langStore.list);
    console.log("childStore", childStore.list);
    console.log("rentStore", rentStore.list);
    console.log("cookStore", cookStore.list);
    console.log("religionStore", religionStore.list);

    console.log("countryStore", countryStore.list);
  },
});
export const useLookupStore = () => state;
