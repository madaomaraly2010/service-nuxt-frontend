import type { Country } from "../Models";
import type { ICountryRepositry } from "../Repositries/Models-Repositries";
import type { CountryResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";

export class CountryService implements ICountryRepositry {
  static _service: CountryService;
  public static get instance(): CountryService {
    if (CountryService._service == null) {
      CountryService._service = new CountryService();
    }
    return CountryService._service;
  }
  async findAll(): Promise<CountryResponse> {
    let { data, error } = await useFetch(config.Country.API_COUNTRY_STATUS_GET);
    console.log("Country Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: Country): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: Country): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<CountryResponse> {
    throw new Error("Method not implemented.");
  }
}
