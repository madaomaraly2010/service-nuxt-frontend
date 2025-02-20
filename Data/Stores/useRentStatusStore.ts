import { RentStatus, Work } from "../Models";
import { WorkService } from "../Services/Work.service";
import type {
  RentStatusResponse,
  WorkResponse,
} from "../Responses/Model-Responses";
import { RentStatusService } from "../Services/RentStatus.service";
export const state = reactive({
  list: [] as RentStatus[],
  async findAll(): Promise<RentStatusResponse> {
    let response: RentStatusResponse =
      await RentStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useRentStatusStore = () => state;
