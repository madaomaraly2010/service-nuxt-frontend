import { RequestAttach } from "../Models";
import type { RequestAttachResponse } from "../Responses/Model-Responses";
import { RequestAttachService } from "../Services/RequestAttach.service";
const state = reactive({
  list: [] as RequestAttach[],
  async findAll(): Promise<RequestAttachResponse> {
    let response: RequestAttachResponse =
      await RequestAttachService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useRequestAttachStore = () => state;
