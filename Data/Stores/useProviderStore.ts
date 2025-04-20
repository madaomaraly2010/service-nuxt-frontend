import { TableKeys } from "~/common/table-keys";
import type { Provider } from "../Models";
import type { ProviderResponse } from "../Responses/Model-Responses";
import { ProviderService } from "../Services/Provider.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IProviderState {
  list: Provider[];
}
interface IProviderActions {}
import { defineStore } from "pinia";
import { StoreHelper } from "./storeHelper";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";

export type ProviderStoreType = ReturnType<typeof useProviderStore>;
export type ProviderStoreActionType = IProviderActions & IProviderRepositry;

export const useProviderStore = defineStore<
  string,
  IProviderState,
  {},
  ProviderStoreActionType
>(TableKeys.PROVIDER_KEY, {
  state: (): IProviderState => ({
    list: [],
  }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<ProviderResponse> {
      return StoreHelper.genericFind<Provider, ProviderResponse>(
        this,
        async () => {
          return ProviderService.instance.findAll(options);
        }
      );
    },

    async findOne(id: number): Promise<ProviderResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Provider): Promise<ProviderResponse> {
      return StoreHelper.genericCreate<Provider, ProviderResponse>(
        this,
        row,
        (r) => ProviderService.instance.create(r)
      );
    },

    async update(row: Provider): Promise<ProviderResponse> {
      return StoreHelper.genericUpdate<Provider, ProviderResponse>(
        this,
        row,
        (r) => ProviderService.instance.update(r)
      );
    },

    async save(row: Provider): Promise<ProviderResponse> {
      return StoreHelper.genericSave<Provider, ProviderResponse>(
        this,
        row,
        async (row) => {
          return ProviderService.instance.save(row);
        }
      );
    },
    async delete(id: number): Promise<ProviderResponse> {
      return StoreHelper.genericDelete<Provider, ProviderResponse>(
        this,
        id,
        async (id) => {
          return ProviderService.instance.delete(id);
        }
      );
    },

    async getByCountry(
      countryId: number,
      options?: FetchOptions
    ): Promise<ProviderResponse> {
      return StoreHelper.genericFind<Provider, ProviderResponse>(this, () =>
        ProviderService.instance.getByCountry(countryId, options)
      );
    },
    async getByWork(
      workId: number,
      options?: FetchOptions
    ): Promise<ProviderResponse> {
      return StoreHelper.genericFind<Provider, ProviderResponse>(this, () =>
        ProviderService.instance.getByWork(workId, options)
      );
    },
  },
});
