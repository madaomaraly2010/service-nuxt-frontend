import { TableKeys } from "~/common/table-keys";
import type { CookStatus } from "../Models";
import type { CookStatusResponse } from "../Responses/Model-Responses";
import { CookStatusService } from "../Services/CookStatus.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";

interface ICookStatusState {
  list: CookStatus[];
}

interface ICookStatusActions {}
export type CookStatusStoreType = ReturnType<typeof useCookStatusStore>;
export type CookStatusStoreActionType = ICookStatusRepositry &
  ICookStatusActions;

export const useCookStatusStore = defineStore<
  string,
  ICookStatusState,
  {},
  CookStatusStoreActionType
>(TableKeys.COOK_STATUS_KEY, {
  state: (): ICookStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<CookStatusResponse> {
      const response = await CookStatusService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: CookStatus): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: CookStatus): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: CookStatus): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<CookStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
