import { TableKeys } from "~/common/table-keys";
import type { RequestStatus } from "../Models";
import type { IRequestStatusRepositry } from "../Repositries/Models-Repositries";
import type { RequestStatusResponse } from "../Responses/Model-Responses";
import { RequestStatusService } from "../Services/RequestStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestStatusState {
  list: RequestStatus[];
}

export const useRequestStatusStore = () => {
  const state = useState<IRequestStatusState>(
    TableKeys.REQUEST_STATUS_KEY,
    () => ({
      list: [] as RequestStatus[],
    })
  );

  const repositry: IRequestStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<RequestStatusResponse> {
      const response = await RequestStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RequestStatus): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RequestStatus): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RequestStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
