import { WorkCategory } from "../Models";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { WorkCategoryService } from "../Services/WorkCategory.service";
const state = reactive({
  list: [] as WorkCategory[],
  async findAll(): Promise<WorkCategoryResponse> {
    let response: WorkCategoryResponse =
      await WorkCategoryService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useWorkCategoryStore = () => state;
