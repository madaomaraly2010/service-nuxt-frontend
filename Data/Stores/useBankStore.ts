import { TableKeys } from "~/common/table-keys";
import type { Bank } from "../Models";
import type { IBankRepositry } from "../Repositries/Models-Repositries";
import type { BankResponse } from "../Responses/Model-Responses";
import { BankService } from "../Services/Bank.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IBankState {
  list: Bank[];
}

export const useBankStore = () => {
  const state = useState<IBankState>(TableKeys.BANK_KEY, () => ({
    list: [] as Bank[],
  }));

  const repositry: IBankRepositry = {
    async findAll(options?:FetchOptions): Promise<BankResponse> {
      const response = await BankService.instance.findAll();
      state.value.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<BankResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Bank): Promise<BankResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Bank): Promise<BankResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<BankResponse> {
      throw new Error("Method not implemented.");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
