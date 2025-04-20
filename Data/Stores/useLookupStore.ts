// composables/useLookupStore.ts

import {
  useWorkCategoryStore,
  type WorkCategoryStoreType,
} from "./useWorkCategoryStore";
import { useWorkStore, type WorkStoreType } from "./useWorkStore";
import {
  useLangStatusStore,
  type LangStatusStoreType,
} from "./useLangStatusStore";
import {
  useChildStatusStore,
  type ChildStatusStoreType,
} from "./useChildStatusStore";
import {
  useRentStatusStore,
  type RentStatusStoreType,
} from "./useRentStatusStore";
import {
  useCookStatusStore,
  type CookStatusStoreType,
} from "./useCookStatusStore";
import {
  useReligionStatusStore,
  type ReligionStatusStoreType,
} from "./useReligionStatusStore";
import { useCountryStore, type CountryStoreType } from "./useCountryStore";
import { TableKeys } from "~/common/table-keys";
import {
  useRequestStatusStore,
  type RequestStatusStoreType,
} from "./useRequestStatusStore";

interface ILookupState {}

let workCategoryStore: WorkCategoryStoreType | null = null;
let workStore: WorkStoreType | null = null;
let langStore: LangStatusStoreType | null = null;
let childStore: ChildStatusStoreType | null = null;
let rentStore: RentStatusStoreType | null = null;
let cookStore: CookStatusStoreType | null = null;
let religionStore: ReligionStatusStoreType | null = null;
let countryStore: CountryStoreType | null = null;
let statusStore: RequestStatusStoreType | null = null;

export type LookupStoreType = ReturnType<typeof useLookupStore>;

export const useLookupStore = defineStore("lookups", {
  state: (): ILookupState => ({}),
  getters: {
    requestStatusStore(): RequestStatusStoreType {
      return statusStore!;
    },
    rentStatusStore(): RentStatusStoreType {
      return rentStore!;
    },
    langStatusStore(): LangStatusStoreType {
      return langStore!;
    },
    cookStatusStore(): CookStatusStoreType {
      return cookStore!;
    },

    childStatusStore(): ChildStatusStoreType {
      return childStore!;
    },
    religionStatusStore(): ReligionStatusStoreType {
      return religionStore!;
    },
    countryStore(): CountryStoreType {
      return countryStore!;
    },
    workStore(): WorkStoreType {
      return workStore!;
    },
    workCategoryStore(): WorkCategoryStoreType {
      return workCategoryStore!;
    },
  },
  actions: {
    async fetchAllLookups(): Promise<void> {
      // Uncomment these when the methods are implemented

      workCategoryStore ??= useWorkCategoryStore();
      workStore ??= useWorkStore();
      langStore ??= useLangStatusStore();
      childStore ??= useChildStatusStore();
      rentStore ??= useRentStatusStore();
      cookStore ??= useCookStatusStore();
      religionStore ??= useReligionStatusStore();
      countryStore ??= useCountryStore();
      statusStore ??= useRequestStatusStore();
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

      console.log("lookup", "workCategoryStore", workCategoryStore.list);
      console.log("lookup", "workStore", workStore.list);
      console.log("lookup", "langStore", langStore.list);
      console.log("lookup", "childStore", childStore.list);
      console.log("lookup", "rentStore", rentStore.list);
      console.log("lookup", "cookStore", cookStore.list);
      console.log("lookup", "religionStore", religionStore.list);
      console.log("lookup", "countryStore", countryStore.list);
    },
  },
});
