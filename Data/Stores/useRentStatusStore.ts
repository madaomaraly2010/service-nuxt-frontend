import { RentStatus } from "../Models";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { RentStatusService } from "../Services/RentStatus.service";
const state = reactive({
  list: [] as RentStatus[],
  async findAll(): Promise<RentStatusResponse> {
    let response: RentStatusResponse =
      await RentStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useRentStatusStore = () => state;
