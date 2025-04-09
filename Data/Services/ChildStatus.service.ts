import { TableKeys } from "~/common/table-keys";
import { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";
import type { ChildStatusResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";

export class ChildStatusService
  extends BaseModelService<ChildStatus>
  implements IChildStatusRepositry
{
  override get getFetchKey(): string {
    return TableKeys.CHILD_STATUS_KEY;
  }
  static _service: ChildStatusService;
  public static get instance(): ChildStatusService {
    if (ChildStatusService._service == null) {
      ChildStatusService._service = new ChildStatusService();
    }
    return ChildStatusService._service;
  }
  override async findAll(options?: FetchOptions): Promise<ChildStatusResponse> {
    return super.fetchData(
      ChildStatus as any,
      config.ChildStatus.API_CHILD_STATUS_GET, {
        options,
      }
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
