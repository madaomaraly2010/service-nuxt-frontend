import { TableKeys } from "~/common/table-keys";
import type { RequestStatus } from "../Models";
import type { RequestStatusResponse } from "../Responses/Model-Responses";
import { RequestStatusService } from "../Services/RequestStatus.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestStatusState {
  list: RequestStatus[];
}

export const useRequestStatusStore = defineStore(TableKeys.REQUEST_STATUS_KEY, {
  state: (): IRequestStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<RequestStatusResponse> {
      const response = await RequestStatusService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RequestStatus): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RequestStatus): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
