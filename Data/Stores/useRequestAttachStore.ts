import { TableKeys } from "~/common/table-keys";
import type { RequestAttach } from "../Models";
import type { IRequestAttachRepositry } from "../Repositries/Models-Repositries";
import type { RequestAttachResponse } from "../Responses/Model-Responses";
import { RequestAttachService } from "../Services/RequestAttach.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestAttachState {
  list: RequestAttach[];
}

export const useRequestAttachStore = () => {
  const state = useState<IRequestAttachState>(
    TableKeys.REQUEST_ATTACH_KEY,
    () => ({
      list: [] as RequestAttach[],
    })
  );

  const repositry: IRequestAttachRepositry = {
    async findAll(options?:FetchOptions): Promise<RequestAttachResponse> {
      const response = await RequestAttachService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RequestAttach): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RequestAttach): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RequestAttachResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
