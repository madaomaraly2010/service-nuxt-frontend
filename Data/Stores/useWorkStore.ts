import { TableKeys } from "~/common/table-keys";
import type { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import type { WorkResponse } from "../Responses/Model-Responses";
import { WorkService } from "../Services/Work.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IWorkState {
  list: Work[];
}

export const useWorkStore = () => {
  const state = useState<IWorkState>(TableKeys.WORK_KEY, () => ({
    list: [] as Work[],
  }));

  const repositry: IWorkRepositry = {
    async findAll(options?:FetchOptions): Promise<WorkResponse> {
      const response = await WorkService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Work): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Work): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<WorkResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
