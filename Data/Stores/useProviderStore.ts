import { Provider } from "../Models";
import { ProviderService } from "../Services/Provider.service";
import type { ProviderResponse } from "../Responses/Model-Responses";
export const state = reactive({
  providers: [] as Provider[],
  service: new ProviderService(),
  async findAll(): Promise<ProviderResponse> {
    let response: ProviderResponse = await state.service.findAll();
    debugger;
    state.providers = response.data ?? [];
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
    let response: ProviderResponse = await state.service.getByCountry(
      countryId
    );
    state.providers = response.data ?? [];
    return response;
  },
  async getByWork(workId: number): Promise<ProviderResponse> {
    let response: ProviderResponse = await state.service.getByWork(workId);
    state.providers = response.data ?? [];
    debugger;
    return response;
  },
});

export const useProviderStore = () => state;
