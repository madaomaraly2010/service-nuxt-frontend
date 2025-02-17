import type { Country } from "../Models";
import type { ICountryRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";

export class CountryService implements ICountryRepositry {
  async findAll(): Promise<Country[]> {
    let { data, error } = await useFetch(config.Country.API_COUNTRY_STATUS_GET);
    console.log("Country Data", data);
    return [];
  }
  async findOne(id: number): Promise<Country> {
    throw new Error("Method not implemented.");
  }
  async create(row: Country): Promise<Country> {
    throw new Error("Method not implemented.");
  }
  async update(row: Country): Promise<Country> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<Country> {
    throw new Error("Method not implemented.");
  }
}
