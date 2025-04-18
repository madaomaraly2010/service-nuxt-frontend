import { TableKeys } from "~/common/table-keys";
import type { Work } from "../Models";
import type { WorkResponse } from "../Responses/Model-Responses";
import { WorkService } from "../Services/Work.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";

interface IWorkState {
  list: Work[];
}

interface IWorkActions {}
export type WorkStoreType = ReturnType<typeof useWorkStore>;
export type WorkStoreActionType = IWorkActions & IWorkRepositry;
export const useWorkStore = defineStore<
  string,
  IWorkState,
  {},
  WorkStoreActionType
>(TableKeys.WORK_KEY, {
  state: (): IWorkState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<WorkResponse> {
      const response = await WorkService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Work): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: Work): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Work): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
