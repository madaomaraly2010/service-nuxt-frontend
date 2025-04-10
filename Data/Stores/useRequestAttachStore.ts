import { TableKeys } from "~/common/table-keys";
import type { RequestAttach } from "../Models";
import type { RequestAttachResponse } from "../Responses/Model-Responses";
import { RequestAttachService } from "../Services/RequestAttach.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestAttachState {
  list: RequestAttach[];
}

export const useRequestAttachStore = defineStore(TableKeys.REQUEST_ATTACH_KEY, {
  state: (): IRequestAttachState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<RequestAttachResponse> {
      const response = await RequestAttachService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RequestAttach): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RequestAttach): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
