import type { CookStatus } from "../Models";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";
import type { CookStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";

export class CookStatusService implements ICookStatusRepositry {
  static _service: CookStatusService;
  public static get instance(): CookStatusService {
    if (CookStatusService._service == null) {
      CookStatusService._service = new CookStatusService();
    }
    return CookStatusService._service;
  }
  async findAll(): Promise<CookStatusResponse> {
    let { data, error } = await useFetch(config.CookStatus.API_COOK_STATUS_GET);
    console.log("Cook Status Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: CookStatus): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: CookStatus): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<CookStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
