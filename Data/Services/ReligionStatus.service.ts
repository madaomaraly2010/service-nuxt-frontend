import { TableKeys } from "~/common/table-keys";
import { ReligionStatus } from "../Models";
import type { IReligionStatusRepositry } from "../Repositries/Models-Repositries";
import type { ReligionStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";
export class ReligionStatusService
  extends BaseModelService<ReligionStatus>
  implements IReligionStatusRepositry
{
  static _service: ReligionStatusService;
  public static get instance(): ReligionStatusService {
    if (ReligionStatusService._service == null) {
      ReligionStatusService._service = new ReligionStatusService();
    }
    return ReligionStatusService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.RELIGION_STATUS_KEY;
  }
  override async findAll(
    options?: FetchOptions
  ): Promise<ReligionStatusResponse> {
    return super.fetchData(
      ReligionStatus as any,
      config.ReligionStatus.API_RELIGION_STATUS_GET,
      {
        options,
      }
    );
    // let { data, error } = await useFetch(
    //   config.ReligionStatus.API_RELIGION_STATUS_GET
    // );
    // console.log("Religion Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: ReligionStatus): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: ReligionStatus): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
