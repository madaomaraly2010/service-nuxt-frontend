import { defineStore } from "pinia";
import { Provider } from "../Models";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";
import { ProviderService } from "../Services/Provider.service";
import type { ProviderResponse } from "../Responses/Model-Responses";
export const useProviderStore = defineStore<
  "provider",
  IProviderStoreState,
  {},
  IProviderRepositry
>("provider", {
  state: () => ({
    providers: [],
    service: null,
  }),

  actions: {
    async findAll(): Promise<ProviderResponse> {
      if(this.service==null) this.service = new ProviderService()
      let response: ProviderResponse = await this.service.findAll();
      this.providers = response.data ?? [];
      return response;
    },
    async findOne(id: number): Promise<ProviderResponse> {
      throw new Error("findOne not implemented");
    },
    async create(row: Provider): Promise<ProviderResponse> {
      throw new Error("create not implemented");
    },
    async update(row: Provider): Promise<ProviderResponse> {
      throw new Error("update not implemented");
    },
    async delete(id: number): Promise<ProviderResponse> {
      throw new Error("delete not implemented");
    },
    async getByCountry(countryId: number): Promise<ProviderResponse> {
      if(this.service==null) this.service = new ProviderService()
      let response: ProviderResponse = await this.service.getByCountry(
        countryId
      );
      this.providers = response.data ?? [];
      return response;
    },
    async getByWork(workId: number): Promise<ProviderResponse> {
      if(this.service==null) this.service = new ProviderService()
      let response: ProviderResponse = await this.service.getByWork(workId);
      let ar: Provider[] = response.data ?? [];
      this.providers.length = 0;
      this.providers.push(...ar);
      return response;
    },
  },
});

export interface IProviderStoreState {
  providers: Provider[];
  service: ProviderService |null;
}
