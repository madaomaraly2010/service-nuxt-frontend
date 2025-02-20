import type { LangStatus } from "../Models/LangStatus";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class LangStatusService implements ILangStatusRepositry {
  static _service: LangStatusService;
  public static get instance(): LangStatusService {
    if (LangStatusService._service == null) {
      LangStatusService._service = new LangStatusService();
    }
    return LangStatusService._service;
  }
  async findAll(): Promise<LangStatusResponse> {
    let { data, error } = await useFetch(config.LangStatus.API_LANG_STATUS_GET);
    console.log("Lang Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: LangStatus): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: LangStatus): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
