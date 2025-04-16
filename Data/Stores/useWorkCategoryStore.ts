import { TableKeys } from "~/common/table-keys";
import type { WorkCategory } from "../Models";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { WorkCategoryService } from "../Services/WorkCategory.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IWorkCategoryState {
  list: WorkCategory[];
}
export type WorkCategoryStoreType = ReturnType<typeof useWorkCategoryStore>;

export const useWorkCategoryStore = defineStore(TableKeys.WORK_CATEGORY_KEY, {
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

    async update(row: WorkCategory): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<WorkCategoryResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
