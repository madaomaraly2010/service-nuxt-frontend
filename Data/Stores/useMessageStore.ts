import { TableKeys } from "~/common/table-keys";
import type { Message } from "../Models";
import type { MessageResponse } from "../Responses/Model-Responses";
import { MessageService } from "../Services/Message.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IMessageRepositry } from "../Repositries/Models-Repositries";

interface IMessageState {
  list: Message[];
}

interface IMessageActions {
  addMessage(messsage: Message): void;
}

export type MessageStoreType = ReturnType<typeof useMessageStore>;
export type MessageStoreActionType = IMessageRepositry & IMessageActions;

export const useMessageStore = defineStore<
  string,
  IMessageState,
  {},
  MessageStoreActionType
>(TableKeys.MESSAGE_KEY, {
  state: (): IMessageState => ({ list: [] }),
  getters: {},
  actions: {
    addMessage(messsage: Message): void {
      this.list.push(messsage);
    },

    async findAll(options?: FetchOptions): Promise<MessageResponse> {
      const response = await MessageService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Message): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: Message): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Message): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<MessageResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
