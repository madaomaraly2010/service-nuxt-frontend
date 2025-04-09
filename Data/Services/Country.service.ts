import { TableKeys } from "~/common/table-keys";
import { Country } from "../Models";
import type { ICountryRepositry } from "../Repositries/Models-Repositries";
import type { CountryResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";

export class CountryService
  extends BaseModelService<Country>
  implements ICountryRepositry
{
  static _service: CountryService;
  public static get instance(): CountryService {
    if (CountryService._service == null) {
      CountryService._service = new CountryService();
    }
    return CountryService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.COUNTRY_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<CountryResponse> {
    return super.fetchData(
      Country as any,
      config.Country.API_COUNTRY_STATUS_GET, {
        options,
      }
    );
    // let { data, error } = await useFetch(config.Country.API_COUNTRY_STATUS_GET);
    // console.log("Country Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Country): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Country): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
}
