import { TableKeys } from "~/common/table-keys";
import type { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { RentStatusService } from "../Services/RentStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IRentStatusState {
  list: RentStatus[];
}

export const useRentStatusStore = () => {
  const state = useState<IRentStatusState>(TableKeys.RENT_STATUS_KEY, () => ({
    list: [] as RentStatus[],
  }));

  const repositry: IRentStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<RentStatusResponse> {
      const response = await RentStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RentStatus): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RentStatus): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
