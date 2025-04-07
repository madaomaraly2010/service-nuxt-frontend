import { RequestAttach, Work } from "../Models";
import type { IRequestAttachRepositry } from "../Repositries/Models-Repositries";
import type { RequestAttachResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class RequestAttachService
  extends BaseModelService<RequestAttach>
  implements IRequestAttachRepositry
{
  static _service: RequestAttachService;
  public static get instance(): RequestAttachService {
    if (RequestAttachService._service == null) {
      RequestAttachService._service = new RequestAttachService();
    }
    return RequestAttachService._service;
  }

  override get getFetchKey(): string {
    return "request-attach";
  }

  override async findAll(): Promise<RequestAttachResponse> {
    return super.fetchData(
      Work as any,
      config.RequestAttach.API_REQUEST_ATTACH_GET
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
  override async findOne(id: number): Promise<RequestAttachResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: RequestAttach): Promise<RequestAttachResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: RequestAttach): Promise<RequestAttachResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<RequestAttachResponse> {
    throw new Error("Method not implemented.");
  }
}
