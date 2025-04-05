import type { Message } from "../Models/Message";
import type { MessageResponse } from "../Responses/Model-Responses";
import { MessageService } from "../Services/Message.service";
const state = reactive({
  list: [] as Message[],
  async findAll(): Promise<MessageResponse> {
    const response: MessageResponse = await MessageService.instance.findAll();
    state.list = response.data ?? [];
    console.log("Messages", state.list);
    return response;
  },

  addMessage(message: Message) {
    state.list.push(message);
  },
});
export const useMessageStore = () => state;
