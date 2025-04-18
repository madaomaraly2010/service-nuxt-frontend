import { TableKeys } from "~/common/table-keys";
import type { ChildStatus } from "../Models";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ChildStatusService } from "../Services/ChildStatus.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";

interface IChildStatusState {
  list: ChildStatus[];
}
interface IChildStatusActions {}
export type ChildStatusStoreType = ReturnType<typeof useChildStatusStore>;
export type ChildStatusStoreActionType = IChildStatusRepositry &
  IChildStatusActions;

export const useChildStatusStore = defineStore<
  string,
  IChildStatusState,
  {},
  ChildStatusStoreActionType
>(TableKeys.CHILD_STATUS_KEY, {
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

    async save(row: ChildStatus): Promise<ChildStatusResponse> {
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
