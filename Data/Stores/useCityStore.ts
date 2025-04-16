import { TableKeys } from "~/common/table-keys";
import type { City } from "../Models";
import type { CityResponse } from "../Responses/Model-Responses";
import { CityService } from "../Services/City.service";
import type { FetchOptions } from "~/common/fetch-options";

interface ICityState {
  list: City[];
}
export type CityStoreType = ReturnType<typeof useCityStore>;

export const useCityStore = defineStore(TableKeys.CITY_KEY, {
  state: (): ICityState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<CityResponse> {
      const response = await CityService.instance.findAll(options);
      this.list = response.data ?? [];
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
  },
});
