import { TableKeys } from "~/common/table-keys";
import type { WorkCategory } from "../Models";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { WorkCategoryService } from "../Services/WorkCategory.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";

interface IWorkCategoryState {
  list: WorkCategory[];
}

interface IWorkCategoryActions {}
export type WorkCategoryStoreType = ReturnType<typeof useWorkCategoryStore>;
export type WorkCategoryStoreActionType = IWorkCategoryActions &
  IWorkCategoryRepositry;

export const useWorkCategoryStore = defineStore<
  string,
  IWorkCategoryState,
  {},
  WorkCategoryStoreActionType
>(TableKeys.WORK_CATEGORY_KEY, {
  state: (): IWorkCategoryState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<WorkCategoryResponse> {
      const response = await WorkCategoryService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: WorkCategory): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: WorkCategory): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: WorkCategory): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
