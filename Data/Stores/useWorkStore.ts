import { Work } from "../Models";
import { WorkService } from "../Services/Work.service";
import type { WorkResponse } from "../Responses/Model-Responses";
export const state = reactive({
  list: [] as Work[],
  async findAll(): Promise<WorkResponse> {
    let response: WorkResponse = await WorkService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useWorkStore = () => state;
