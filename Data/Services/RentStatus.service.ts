import type { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
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

  override get usedUrl(): string {
    return config.RentStatus.API_RENT_STATUS_GET;
  }
  override async findAll(): Promise<RentStatusResponse> {
    let { data, error } = await useFetch(config.RentStatus.API_RENT_STATUS_GET);
    console.log("Rent Data", data);
    return ModelResponse.createSuccessResponse([]);
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
