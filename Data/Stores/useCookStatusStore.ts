import { CookStatus } from "../Models";
import type { CookStatusResponse } from "../Responses/Model-Responses";
import { CookStatusService } from "../Services/CookStatus.service";
 const state = reactive({
  list: [] as CookStatus[],
  async findAll(): Promise<CookStatusResponse> {
    let response: CookStatusResponse =
      await CookStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useCookStatusStore = () => state;
