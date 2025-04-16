import { TableKeys } from "~/common/table-keys";
import type { Location } from "../Models";
import type { LocationResponse } from "../Responses/Model-Responses";
import { LocationService } from "../Services/Location.service";
import type { FetchOptions } from "~/common/fetch-options";

interface ILocationState {
  list: Location[];
}
export type LocationStoreType = ReturnType<typeof useLocationStore>;

export const useLocationStore = defineStore(TableKeys.LOCATION_KEY, {
  state: (): ILocationState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<LocationResponse> {
      const response = await LocationService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<LocationResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Location): Promise<LocationResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Location): Promise<LocationResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<LocationResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
