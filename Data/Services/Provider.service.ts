import { Provider } from "../Models";
import type { IProviderAttributes } from "../Models-Row-Attributes";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";
import { config } from "~/Data/UrlsConfig";
export class ProviderService implements IProviderRepositry {
  async getByCountry(countryId: number): Promise<Provider[]> {
    let list: Provider[] = [];
    let { data, error } = await useFetch<IProviderAttributes[]>(
      config.Provider.API_PROVIDER_GET,
      {
        query: {
          countryId,
        },
      }
    );
    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (Array.isArray(data.value)) {
      list = data.value!.map((provider) => Provider.fromDbRow(provider));
    }
    debugger;
    return list;
  }
  async getByWork(workId: number): Promise<Provider[]> {
    let list: Provider[] = [];
    let { data, error } = await useFetch<IProviderAttributes[]>(
      config.Provider.API_PROVIDER_GET,
      {
        query: {
          workId,
        },
      }
    );
    if (error.value?.message) {
      debugger;
      throw new Error(error.value?.message);
    }
    if (Array.isArray(data.value)) {
      list = data.value!.map((provider) => Provider.fromDbRow(provider));
    }
    debugger;
    return list;
  }
  async findAll(): Promise<Provider[]> {
    let list: Provider[] = [];
    let { data, error } = await useFetch<IProviderAttributes[]>(
      config.Provider.API_PROVIDER_GET
    );
    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (Array.isArray(data.value)) {
      list = data.value!.map((provider) => Provider.fromDbRow(provider));
    }

    debugger;
    return list;
  }
  findOne(id: number): Promise<Provider> {
    throw new Error("Method not implemented.");
  }
  create(row: Provider): Promise<Provider> {
    throw new Error("Method not implemented.");
  }
  update(row: Provider): Promise<Provider> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<Provider> {
    throw new Error("Method not implemented.");
  }
}
