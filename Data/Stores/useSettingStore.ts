import { Setting } from "../Models";
import type { SettingResponse } from "../Responses/Model-Responses";
import { SettingService } from "../Services/Setting.service";
const state = reactive({
  list: [] as Setting[],
  async findAll(): Promise<SettingResponse> {
    let response: SettingResponse = await SettingService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useSettingStore = () => state;
