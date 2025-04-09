import { TableKeys } from "~/common/table-keys";
import type { WorkCategory } from "../Models";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { WorkCategoryService } from "../Services/WorkCategory.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";


interface IWorkCategoryState {
  list: WorkCategory[];
}

export const useWorkCategoryStore = () => {
  const state = useState<IWorkCategoryState>(
    TableKeys.WORK_CATEGORY_KEY,
    () => ({
      list: [] as WorkCategory[],
    })
  );

  const repositry: IWorkCategoryRepositry = {
    async findAll(options?:FetchOptions): Promise<WorkCategoryResponse> {
      const response = await WorkCategoryService.instance.findAll();
      state.value.list = response.data ?? [];
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
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
