import { ReligionStatus, Work } from "../Models";
import { WorkService } from "../Services/Work.service";
import type {
  ReligionStatusResponse,
  WorkResponse,
} from "../Responses/Model-Responses";
import { ReligionStatusService } from "../Services/ReligionStatus.service";
export const state = reactive({
  list: [] as ReligionStatus[],
  async findAll(): Promise<ReligionStatusResponse> {
    let response: ReligionStatusResponse =
      await ReligionStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useReligionStatusStore = () => state;
