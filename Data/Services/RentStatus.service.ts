import { TableKeys } from "~/common/table-keys";
import { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class RentStatusService
  extends BaseModelService<RentStatus>
  implements IRentStatusRepositry
{
  static _service: RentStatusService;
  public static get instance(): RentStatusService {
    if (RentStatusService._service == null) {
      RentStatusService._service = new RentStatusService();
    }
    return RentStatusService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.RENT_STATUS_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<RentStatusResponse> {
    return super.fetchData(
      RentStatus as any,
      config.RentStatus.API_RENT_STATUS_GET,
      {
        options,
      }
    );
    // let { data, error } = await useFetch(config.RentStatus.API_RENT_STATUS_GET);
    // console.log("Rent Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: RentStatus): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: RentStatus): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
