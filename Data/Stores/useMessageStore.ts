import { TableKeys } from "~/common/table-keys";
import type { Message } from "../Models";
import type { IMessageRepositry } from "../Repositries/Models-Repositries";
import type { MessageResponse } from "../Responses/Model-Responses";
import { MessageService } from "../Services/Message.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IMessageState {
  list: Message[];
}

export const useMessageStore = () => {
  const state = useState<IMessageState>(TableKeys.MESSAGE_KEY, () => ({
    list: [] as Message[],
  }));

  const actions = {
    addMessage(messsage: Message): void {
      state.value.list.push(messsage);
    },
  };

  const repositry: IMessageRepositry = {
    async findAll(options?:FetchOptions): Promise<MessageResponse> {
      const response = await MessageService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Message): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Message): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
    ...actions,
  };
};
