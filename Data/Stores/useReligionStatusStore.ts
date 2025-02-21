import { ReligionStatus, Work } from "../Models";
import type { ReligionStatusResponse } from "../Responses/Model-Responses";
import { ReligionStatusService } from "../Services/ReligionStatus.service";
const state = reactive({
  list: [] as ReligionStatus[],
  async findAll(): Promise<ReligionStatusResponse> {
    let response: ReligionStatusResponse =
      await ReligionStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useReligionStatusStore = () => state;
