import { CookStatus } from "../Models";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";
import type { CookStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";

export class CookStatusService
  extends BaseModelService<CookStatus>
  implements ICookStatusRepositry
{
  static _service: CookStatusService;
  public static get instance(): CookStatusService {
    if (CookStatusService._service == null) {
      CookStatusService._service = new CookStatusService();
    }
    return CookStatusService._service;
  }

  override get getFetchKey(): string {
    return "cook-status";
  }
  override async findAll(): Promise<CookStatusResponse> {
    return super.fetchData(
      CookStatus as any,
      config.CookStatus.API_COOK_STATUS_GET
    );
    // let { data, error } = await useFetch(config.CookStatus.API_COOK_STATUS_GET);
    // console.log("Cook Status Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: CookStatus): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: CookStatus): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
