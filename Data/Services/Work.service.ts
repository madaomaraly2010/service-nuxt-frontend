import { TableKeys } from "~/common/table-keys";
import { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import type { WorkResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";

export class WorkService
  extends BaseModelService<Work>
  implements IWorkRepositry
{
  static _workService: WorkService;
  public static get instance(): WorkService {
    if (WorkService._workService == null) {
      WorkService._workService = new WorkService();
    }
    return WorkService._workService;
  }

  override get getFetchKey(): string {
    return TableKeys.WORK_KEY;
  }

  override async findAll(options?:FetchOptions): Promise<WorkResponse> {
    return super.fetchData(Work as any, config.Work.API_WORK_GET, {
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
  override async findOne(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
}
