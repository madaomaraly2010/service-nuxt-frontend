import { TableKeys } from "~/common/table-keys";
import type { City } from "../Models";
import type { ICityRepositry } from "../Repositries/Models-Repositries";
import type { CityResponse } from "../Responses/Model-Responses";
import { CityService } from "../Services/City.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ICityState {
  list: City[];
}

export const useCityStore = () => {
  const state = useState<ICityState>(TableKeys.CITY_KEY, () => ({
    list: [] as City[],
  }));

  const repositry: ICityRepositry = {
    async findAll(options?:FetchOptions): Promise<CityResponse> {
      const response = await CityService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<CityResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: City): Promise<CityResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: City): Promise<CityResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<CityResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
