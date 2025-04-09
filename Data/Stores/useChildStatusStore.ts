import { TableKeys } from "~/common/table-keys";
import type { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ChildStatusService } from "../Services/ChildStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IChildStatusState {
  list: ChildStatus[];
}

export const useChildStatusStore = () => {
  const state = useState<IChildStatusState>(TableKeys.CHILD_STATUS_KEY, () => ({
    list: [] as ChildStatus[],
  }));

  const repositry: IChildStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<ChildStatusResponse> {
      const response = await ChildStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: ChildStatus): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: ChildStatus): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<ChildStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
