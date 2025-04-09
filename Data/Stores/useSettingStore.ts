import { TableKeys } from "~/common/table-keys";
import type { Setting } from "../Models";
import type { ISettingRepositry } from "../Repositries/Models-Repositries";
import type { SettingResponse } from "../Responses/Model-Responses";
import { SettingService } from "../Services/Setting.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface ISettingState {
  list: Setting[];
}

export const useSettingStore = () => {
  const state = useState<ISettingState>(TableKeys.SETTING_KEY, () => ({
    list: [] as Setting[],
  }));

  const repositry: ISettingRepositry = {
    async findAll(options?:FetchOptions): Promise<SettingResponse> {
      const response = await SettingService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<SettingResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Setting): Promise<SettingResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Setting): Promise<SettingResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<SettingResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
