import { TableKeys } from "~/common/table-keys";
import type { LangStatus } from "../Models";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import { LangStatusService } from "../Services/LangStatus.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";

interface ILangStatusState {
  list: LangStatus[];
}

interface ILangStatusActions {}
export type LangStatusStoreType = ReturnType<typeof useLangStatusStore>;
export type LangStatusStoreActionType = ILangStatusRepositry &
  ILangStatusActions;

export const useLangStatusStore = defineStore<
  string,
  ILangStatusState,
  {},
  LangStatusStoreActionType
>(TableKeys.LANG_STATUS_KEY, {
  state: (): ILangStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<LangStatusResponse> {
      const response = await LangStatusService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: LangStatus): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: LangStatus): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: LangStatus): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<LangStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
