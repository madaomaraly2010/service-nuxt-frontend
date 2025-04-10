import { TableKeys } from "~/common/table-keys";
import type { ChildStatus } from "../Models";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ChildStatusService } from "../Services/ChildStatus.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IChildStatusState {
  list: ChildStatus[];
}

export const useChildStatusStore = defineStore(TableKeys.CHILD_STATUS_KEY, {
  state: (): IChildStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<ChildStatusResponse> {
      const response = await ChildStatusService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: ChildStatus): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: ChildStatus): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
