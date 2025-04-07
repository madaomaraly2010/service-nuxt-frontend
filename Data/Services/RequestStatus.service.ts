import { RequestStatus, Work } from "../Models";
import type { IRequestStatusRepositry } from "../Repositries/Models-Repositries";
import type { RequestStatusResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class RequestStatusService
  extends BaseModelService<RequestStatus>
  implements IRequestStatusRepositry
{
  static _service: RequestStatusService;
  public static get instance(): RequestStatusService {
    if (RequestStatusService._service == null) {
      RequestStatusService._service = new RequestStatusService();
    }
    return RequestStatusService._service;
  }

  override get getFetchKey(): string {
    return "request-status";
  }

  override async findAll(): Promise<RequestStatusResponse> {
    return super.fetchData(
      Work as any,
      config.RequestStatus.API_REQUEST_STATUS_GET
    );
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
  override async findOne(id: number): Promise<RequestStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: RequestStatus): Promise<RequestStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: RequestStatus): Promise<RequestStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<RequestStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
