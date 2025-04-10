import { TableKeys } from "~/common/table-keys";
import type { RentStatus } from "../Models";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { RentStatusService } from "../Services/RentStatus.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IRentStatusState {
  list: RentStatus[];
}

export const useRentStatusStore = defineStore(TableKeys.RENT_STATUS_KEY, {
  state: (): IRentStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<RentStatusResponse> {
      const response = await RentStatusService.instance.findAll(options);
      this.list = response.data ?? [];
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
  },
});
