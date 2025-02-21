import { ChildStatus } from "../Models";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ChildStatusService } from "../Services/ChildStatus.service";
const state = reactive({
  list: [] as ChildStatus[],
  async findAll(): Promise<ChildStatusResponse> {
    let response: ChildStatusResponse =
      await ChildStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useChildStatusStore = () => state;
