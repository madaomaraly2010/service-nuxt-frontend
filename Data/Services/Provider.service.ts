import { Provider } from "../Models";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";
import { config } from "~/Data/UrlsConfig";
import type { ProviderResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
export class ProviderService implements IProviderRepositry {
  async getByCountry(countryId: number): Promise<ProviderResponse> {
    let list: Provider[] | undefined = [];
    let { data, error } = await useFetch<ProviderResponse>(
      config.Provider.API_PROVIDER_GET,
      {
        query: {
          countryId,
        },
      }
    );
    let response: ProviderResponse = ModelResponse.fromServerResponse(data);

    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (response.error) return response;

    if (Array.isArray(response.data)) {
      list = response.data?.map((provider) => Provider.fromDbRow(provider));
      response.data = list ?? [];
    }
    return response;
  }
  async getByWork(workId: number): Promise<ProviderResponse> {
    let list: Provider[] | undefined = [];
    debugger;
    let { data, error } = await useFetch<ProviderResponse>(
      config.Provider.API_PROVIDER_GET,
      {
        query: {
          workId,
        },
      }
    );
    let response: ProviderResponse = ModelResponse.fromServerResponse(data);

    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (response.error) return response;
    if (Array.isArray(response.data)) {
      list = response.data?.map((provider) => Provider.fromDbRow(provider));
      response.data = list ?? [];
    }
    return response;
  }
  async findAll(): Promise<ProviderResponse> {
    let list: Provider[] | undefined = [];
    debugger;
    let { data, error } = await useFetch<ProviderResponse>(
      config.Provider.API_PROVIDER_GET
    );
    let response: ProviderResponse = ModelResponse.fromServerResponse(data);

    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (response.error) return response;
    if (Array.isArray(response.data)) {
      list = response.data?.map((provider) => Provider.fromDbRow(provider));
      response.data = list ?? [];
    }
    return response;
  }
  findOne(id: number): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  create(row: Provider): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  update(row: Provider): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
}
