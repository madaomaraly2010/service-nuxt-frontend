import { LangStatus } from "../Models";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import { LangStatusService } from "../Services/LangStatus.service";
export const state = reactive({
  list: [] as LangStatus[],
  async findAll(): Promise<LangStatusResponse> {
    let response: LangStatusResponse =
      await LangStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useLangStatusStore = () => state;
