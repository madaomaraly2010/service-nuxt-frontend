import { TableKeys } from "~/common/table-keys";
import { RentStatus } from "../Models";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { RentStatusService } from "../Services/RentStatus.service";
import type { FetchOptions } from "~/common/fetch-options";
import { StoreHelper } from "./storeHelper";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";

interface IRentStatusState {
  list: RentStatus[];
}
interface IRentStatusActions {}
export type RentStatusStoreType = ReturnType<typeof useRentStatusStore>;
export type RentStatusStoreActionType = IRentStatusActions &
  IRentStatusRepositry;

export const useRentStatusStore = defineStore<
  string,
  IRentStatusState,
  {},
  RentStatusStoreActionType
>(TableKeys.RENT_STATUS_KEY, {
  state: (): IRentStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<RentStatusResponse> {
      // const response = await RentStatusService.instance.findAll(options);
      // this.list = response.data ?? [];
      // return response;
      return StoreHelper.genericFindAll<RentStatus, RentStatusResponse>(
        this,
        () => RentStatusService.instance.findAll(options)
      );
    },

    async findOne(id: number): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RentStatus): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: RentStatus): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: RentStatus): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<RentStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
