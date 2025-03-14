import { Setting, Work } from "../Models";
import type { ISettingRepositry } from "../Repositries/Models-Repositries";
import type { SettingResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class SettingService
  extends BaseModelService<Setting>
  implements ISettingRepositry
{
  static _service: SettingService;
  public static get instance(): SettingService {
    if (SettingService._service == null) {
      SettingService._service = new SettingService();
    }
    return SettingService._service;
  }

  override get usedUrl(): string {
    return config.Work.API_WORK_GET;
  }

  override async findAll(): Promise<SettingResponse> {
    return super.fetchData(Work as any, config.Setting.API_SETTING_GET);
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
  override async findOne(id: number): Promise<SettingResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Setting): Promise<SettingResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Setting): Promise<SettingResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<SettingResponse> {
    throw new Error("Method not implemented.");
  }
}
