import { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";

export class ChildStatusService
  extends BaseModelService<ChildStatus>
  implements IChildStatusRepositry
{
  override get usedUrl(): string {
    return config.ChildStatus.API_CHILD_STATUS_GET;
  }
  static _service: ChildStatusService;
  public static get instance(): ChildStatusService {
    if (ChildStatusService._service == null) {
      ChildStatusService._service = new ChildStatusService();
    }
    return ChildStatusService._service;
  }
  override async findAll(): Promise<ChildStatusResponse> {
    return super.fetchData(
      ChildStatus as any,
      config.ChildStatus.API_CHILD_STATUS_GET
    );
   
  }
  override async findOne(id: number): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: ChildStatus): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: ChildStatus): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
