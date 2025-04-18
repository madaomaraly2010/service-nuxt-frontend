import { TableKeys } from "~/common/table-keys";
import type { Bank } from "../Models";
import type { BankResponse } from "../Responses/Model-Responses";
import { BankService } from "../Services/Bank.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IBankRepositry } from "../Repositries/Models-Repositries";

interface IBankState {
  list: Bank[];
}

interface IBankActions {}

export type BankStoreType = ReturnType<typeof useBankStore>;
export type BankStoreActionType = IBankRepositry & IBankActions;

export const useBankStore = defineStore<string, IBankState, {}, BankStoreActionType>(
  TableKeys.BANK_KEY,
  {
    state: () => ({ list: [] }),
    getters: {},
    actions: {
      async findAll(options?: FetchOptions): Promise<BankResponse> {
        const response = await BankService.instance.findAll(options);
        this.list = response.data ?? [];
        return response;
      },

      async findOne(id: number): Promise<BankResponse> {
        throw new Error("Method not implemented.");
      },

      async create(row: Bank): Promise<BankResponse> {
        throw new Error("Method not implemented.");
      },

      async save(row: Bank): Promise<BankResponse> {
        throw new Error("Method not implemented.");
      },

      async update(row: Bank): Promise<BankResponse> {
        throw new Error("Method not implemented.");
      },

      async delete(id: number): Promise<BankResponse> {
        throw new Error("Method not implemented.");
      },
    },
  }
);
