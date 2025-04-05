import { LangStatus } from "../Models";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import { LangStatusService } from "../Services/LangStatus.service";
const state = reactive({
  list: [] as LangStatus[],
  async findAll(): Promise<LangStatusResponse> {
    const response: LangStatusResponse =
      await LangStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useLangStatusStore = () => state;
