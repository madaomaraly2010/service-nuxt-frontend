import { TableKeys } from "~/common/table-keys";
import type { ReligionStatus } from "../Models";
import type { ReligionStatusResponse } from "../Responses/Model-Responses";
import { ReligionStatusService } from "../Services/ReligionStatus.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IReligionStatusRepositry } from "../Repositries/Models-Repositries";

interface IReligionStatusState {
  list: ReligionStatus[];
}
interface IReligionStatusActions {}

export type ReligionStatusStoreType = ReturnType<typeof useReligionStatusStore>;
export type ReligionStatusStoreActionType = IReligionStatusActions &
  IReligionStatusRepositry;

export const useReligionStatusStore = defineStore<
  string,
  IReligionStatusState,
  {},
  ReligionStatusStoreActionType
>(TableKeys.RELIGION_STATUS_KEY, {
  state: (): IReligionStatusState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<ReligionStatusResponse> {
      const response = await ReligionStatusService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: ReligionStatus): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: ReligionStatus): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: ReligionStatus): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
