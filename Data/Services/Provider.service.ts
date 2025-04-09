import { Provider } from "../Models";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";
import { config } from "~/Data/UrlsConfig";
import type { ProviderResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { BaseModelService } from "./Base.Service";
import { TableKeys } from "~/common/table-keys";
export class ProviderService
  extends BaseModelService<Provider>
  implements IProviderRepositry
{
  static _service: ProviderService;
  public static get instance(): ProviderService {
    if (ProviderService._service == null) {
      ProviderService._service = new ProviderService();
    }
    return ProviderService._service;
  }
  override get getFetchKey(): string {
    return TableKeys.PROVIDER_KEY;
  }
  async getByCountry(
    countryId: number,
    options?: FetchOptions
  ): Promise<ProviderResponse> {
    return super.fetchData(Provider as any, config.Provider.API_PROVIDER_GET, {
      queryStrings: {
        query: {
          countryId,
        },
      },
      options,
    });

    // let list: Provider[] | undefined = [];
    // let { data, error } = await useFetch<ProviderResponse>(
    //   config.Provider.API_PROVIDER_GET,
    //   {
    //     query: {
    //       countryId,
    //     },
    //   }
    // );
    // let response: ProviderResponse = ModelResponse.fromServerResponse(
    //   data.value
    // );

    // if (error.value?.message) {
    //   throw new Error(error.value?.message);
    // }
    // if (response.error) return response;

    // if (Array.isArray(response.data)) {
    //   list = response.data?.map((provider) => Provider.fromDbRow(provider));
    //   response.data = list ?? [];
    // }
    // return response;
  }
  async getByWork(
    workId: number,
    options?: FetchOptions
  ): Promise<ProviderResponse> {
    return super.fetchData(Provider as any, config.Provider.API_PROVIDER_GET, {
      queryStrings: {
        query: {
          workId,
        },
      },
      options,
    });
    // let list: Provider[] | undefined = [];
    // debugger;
    // let { data, error } = await useFetch<ProviderResponse>(
    //   config.Provider.API_PROVIDER_GET,
    //   {
    //     query: {
    //       workId,
    //     },
    //   }
    // );
    // let response: ProviderResponse = ModelResponse.fromServerResponse(
    //   data.value
    // );

    // if (error.value?.message) {
    //   throw new Error(error.value?.message);
    // }
    // if (response.error) return response;
    // if (Array.isArray(response.data)) {
    //   list = response.data?.map((provider) => Provider.fromDbRow(provider));
    //   response.data = list ?? [];
    // }
    // return response;
  }
  override async findAll(options?: FetchOptions): Promise<ProviderResponse> {
    return super.fetchData(Provider as any, config.Provider.API_PROVIDER_GET, {
      options,
    });
    // let list: Provider[] | undefined = [];
    // let { data, error } = await useFetch<ProviderResponse>(
    //   config.Provider.API_PROVIDER_GET
    // );
    // let response: ProviderResponse = ModelResponse.fromServerResponse(
    //   data.value
    // );

    // if (error.value?.message) {
    //   throw new Error(error.value?.message);
    // }
    // if (response.error) return response;
    // if (Array.isArray(response.data)) {
    //   list = response.data?.map((provider) => Provider.fromDbRow(provider));
    //   response.data = list ?? [];
    // }
    // return response;
  }
  override async findOne(id: number): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Provider): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Provider): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<ProviderResponse> {
    throw new Error("Method not implemented.");
  }
}
