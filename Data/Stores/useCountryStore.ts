import { TableKeys } from "~/common/table-keys";
import type { Country } from "../Models";
import type { ICountryRepositry } from "../Repositries/Models-Repositries";
import type { CountryResponse } from "../Responses/Model-Responses";
import { CountryService } from "../Services/Country.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ICountryState {
  list: Country[];
}

export const useCountryStore = () => {
  const state = useState<ICountryState>(TableKeys.COUNTRY_KEY, () => ({
    list: [] as Country[],
  }));

  const repositry: ICountryRepositry = {
    async findAll(options?:FetchOptions): Promise<CountryResponse> {
      const response = await CountryService.instance.findAll();
      state.value.list = response.data ?? [];
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
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
