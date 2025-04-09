import { TableKeys } from "~/common/table-keys";
import type { ReligionStatus } from "../Models";
import type { IReligionStatusRepositry } from "../Repositries/Models-Repositries";
import type { ReligionStatusResponse } from "../Responses/Model-Responses";
import { ReligionStatusService } from "../Services/ReligionStatus.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IReligionStatusState {
  list: ReligionStatus[];
}

export const useReligionStatusStore = () => {
  const state = useState<IReligionStatusState>(
    TableKeys.RELIGION_STATUS_KEY,
    () => ({
      list: [] as ReligionStatus[],
    })
  );

  const repositry: IReligionStatusRepositry = {
    async findAll(options?:FetchOptions): Promise<ReligionStatusResponse> {
      const response = await ReligionStatusService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: ReligionStatus): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: ReligionStatus): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<ReligionStatusResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
