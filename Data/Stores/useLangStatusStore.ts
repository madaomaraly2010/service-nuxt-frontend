import { TableKeys } from "~/common/table-keys";
import type { LangStatus } from "../Models";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import { LangStatusService } from "../Services/LangStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ILangStatusState {
  list: LangStatus[];
}

export const useLangStatusStore = () => {
  const state = useState<ILangStatusState>(TableKeys.LANG_STATUS_KEY, () => ({
    list: [] as LangStatus[],
  }));

  const repositry: ILangStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<LangStatusResponse> {
      const response = await LangStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: LangStatus): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: LangStatus): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
