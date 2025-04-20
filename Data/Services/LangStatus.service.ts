import { TableKeys } from "~/common/table-keys";
import { LangStatus } from "../Models/LangStatus";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";
import type { LangStatusResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class LangStatusService
  extends BaseModelService<LangStatus>
  implements ILangStatusRepositry
{
  static _service: LangStatusService;
  public static get instance(): LangStatusService {
    if (LangStatusService._service == null) {
      LangStatusService._service = new LangStatusService();
    }
    return LangStatusService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.LANG_STATUS_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<LangStatusResponse> {
    return super.fetchData(
      LangStatus as any,
      config.LangStatus.API_LANG_STATUS_GET,
      {
        options,
      }
    );
    // let { data, error } = await useFetch(config.LangStatus.API_LANG_STATUS_GET);

    //return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: LangStatus): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: LangStatus): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<LangStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
