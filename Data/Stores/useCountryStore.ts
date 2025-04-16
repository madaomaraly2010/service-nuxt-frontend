import { TableKeys } from "~/common/table-keys";
import type { Country } from "../Models";
import type { CountryResponse } from "../Responses/Model-Responses";
import { CountryService } from "../Services/Country.service";
import type { FetchOptions } from "~/common/fetch-options";

interface ICountryState {
  list: Country[];
}
export type CountryStoreType = ReturnType<typeof useCountryStore>;

export const useCountryStore = defineStore(TableKeys.COUNTRY_KEY, {
  state: (): ICountryState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<CountryResponse> {
      const response = await CountryService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<CountryResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Country): Promise<CountryResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Country): Promise<CountryResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<CountryResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
