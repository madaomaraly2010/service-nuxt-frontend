import { TableKeys } from "~/common/table-keys";
import { City, Work } from "../Models";
import type { ICityRepositry } from "../Repositries/Models-Repositries";
import type { CityResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";

export class CityService
  extends BaseModelService<City>
  implements ICityRepositry
{
  static _service: CityService;
  public static get instance(): CityService {
    if (CityService._service == null) {
      CityService._service = new CityService();
    }
    return CityService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.CITY_KEY;
  }

  override async findAll(options?:FetchOptions): Promise<CityResponse> {
    return super.fetchData(Work as any, config.City.API_CITY_GET, {
      options,
    });
  }

  // override async findAll(): Promise<WorkResponse> {
  //   let list: Work[] = [];

  //   let { data, error } = await useFetch<WorkResponse>(
  //     config.Work.API_WORK_GET
  //   );

  //   let response: WorkResponse = ModelResponse.fromServerResponse(data.value);
  //   if (error.value?.message) {
  //     throw new Error(error.value?.message);
  //   }
  //   if (response.error) {
  //     return response;
  //   }

  //   if (Array.isArray(response.data)) {
  //     list = response.data.map((work) => Work.fromDbRow(work));
  //     response.data = list;
  //   }
  //   return response;
  // }
  override async findOne(id: number): Promise<CityResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: City): Promise<CityResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: City): Promise<CityResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<CityResponse> {
    throw new Error("Method not implemented.");
  }
}
