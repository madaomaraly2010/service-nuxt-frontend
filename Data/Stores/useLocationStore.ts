import { TableKeys } from "~/common/table-keys";
import type { Location } from "../Models";
import type { ILocationRepositry } from "../Repositries/Models-Repositries";
import type { LocationResponse } from "../Responses/Model-Responses";
import { LocationService } from "../Services/Location.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ILocationState {
  list: Location[];
}

export const useLocationStore = () => {
  const state = useState<ILocationState>(TableKeys.LOCATION_KEY, () => ({
    list: [] as Location[],
  }));

  const repositry: ILocationRepositry = {
    async findAll(options?:FetchOptions): Promise<LocationResponse> {
      const response = await LocationService.instance.findAll();
      state.value.list = response.data ?? [];
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
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
