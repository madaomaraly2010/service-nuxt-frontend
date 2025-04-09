import { TableKeys } from "~/common/table-keys";
import type { CookStatus } from "../Models";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";
import type { CookStatusResponse } from "../Responses/Model-Responses";
import { CookStatusService } from "../Services/CookStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ICookStatusState {
  list: CookStatus[];
}

export const useCookStatusStore = () => {
  const state = useState<ICookStatusState>(TableKeys.COOK_STATUS_KEY, () => ({
    list: [] as CookStatus[],
  }));

  const repositry: ICookStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<CookStatusResponse> {
      const response = await CookStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: CookStatus): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: CookStatus): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
