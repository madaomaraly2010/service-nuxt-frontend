import type { Message } from "../Models/Message";
import type { MessageResponse } from "../Responses/Model-Responses";
import { MessageService } from "../Services/Message.service";
const state = reactive({
  list: [] as Message[],
  async findAll(): Promise<MessageResponse> {
    let response: MessageResponse = await MessageService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useWorkStore = () => state;
