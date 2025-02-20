import type { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";

export class ChildStatusService implements IChildStatusRepositry {
  static _service: ChildStatusService;
  public static get instance(): ChildStatusService {
    if (ChildStatusService._service == null) {
      ChildStatusService._service = new ChildStatusService();
    }
    return ChildStatusService._service;
  }
  async findAll(): Promise<ChildStatusResponse> {
    let { data, error } = await useFetch(
      config.ChildStatus.API_CHILD_STATUS_GET
    );
    console.log("Child Status Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: ChildStatus): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: ChildStatus): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<ChildStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
