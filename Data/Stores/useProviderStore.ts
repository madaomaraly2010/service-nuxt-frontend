import { defineStore } from "pinia";
import { Provider } from "../Models";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";
import { ProviderService } from "../Services/Provider.service";
export const useProviderStore = defineStore<
  "provider",
  IProviderStoreState,
  {},
  IProviderRepositry
>("provider", {
  state: () => ({
    providers: [],
    service: new ProviderService(),
  }),

  actions: {
    async findAll(): Promise<Provider[]> {
      this.providers = await this.service.findAll();
      return this.providers;
    },
    async findOne(id: number): Promise<Provider> {
      return new Provider();
    },
    async create(row: Provider): Promise<Provider> {
      return new Provider();
    },
    async update(row: Provider): Promise<Provider> {
      return new Provider();
    },
    async delete(id: number): Promise<Provider> {
      return new Provider();
    },
    async getByCountry(countryId: number): Promise<Provider[]> {
      this.providers = await this.service.getByCountry(countryId);
      return this.providers;
    },
    async getByWork(workId: number): Promise<Provider[]> {
      let ar: Provider[] = await this.service.getByWork(workId);
      this.providers.length = 0;
      this.providers.push(...ar);
      return ar;
    },
  },
});

export interface IProviderStoreState {
  providers: Provider[];
  service: ProviderService;
}
