import { TableKeys } from "~/common/table-keys";
import type { Setting } from "../Models";
import type { SettingResponse } from "../Responses/Model-Responses";
import { SettingService } from "../Services/Setting.service";
import type { FetchOptions } from "~/common/fetch-options";

interface ISettingState {
  list: Setting[];
}
export type SettingStoreType = ReturnType<typeof useSettingStore>;

export const useSettingStore = defineStore(TableKeys.SETTING_KEY, {
  state: (): ISettingState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<SettingResponse> {
      const response = await SettingService.instance.findAll(options);
      this.list = response.data ?? [];
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
  },
});
