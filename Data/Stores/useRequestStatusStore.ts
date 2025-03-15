import { RequestStatus } from "../Models";
import type { RequestStatusResponse } from "../Responses/Model-Responses";
import { RequestStatusService } from "../Services/RequestStatus.service";
const state = reactive({
  list: [] as RequestStatus[],
  async findAll(): Promise<RequestStatusResponse> {
    let response: RequestStatusResponse =
      await RequestStatusService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useRequestStatusStore = () => state;
