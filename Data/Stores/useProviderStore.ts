import { Provider } from "../Models";
import type { ProviderResponse } from "../Responses/Model-Responses";
import { ProviderService } from "../Services/Provider.service";
 const state = reactive({
  list: [] as Provider[],

  async findAll(): Promise<ProviderResponse> {
    let response: ProviderResponse = await ProviderService.instance.findAll();
    state.list = response.data ?? [];
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
    let response: ProviderResponse =
      await ProviderService.instance.getByCountry(countryId);
    state.list = response.data ?? [];
    return response;
  },
  async getByWork(workId: number): Promise<ProviderResponse> {
    let response: ProviderResponse = await ProviderService.instance.getByWork(
      workId
    );
    state.list = response.data ?? [];
    return response;
  },
});

export const useProviderStore = () => state;
