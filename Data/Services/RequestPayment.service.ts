import { TableKeys } from "~/common/table-keys";
import type { RequestPayment } from "../Models";
import type { IRequestPaymentRepositry } from "../Repositries/Models-Repositries";
import type { RequestPaymentResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { BaseModelService } from "./Base.Service";
export class RequestPaymentService
  extends BaseModelService<RequestPayment>
  implements IRequestPaymentRepositry
{
  static _service: RequestPaymentService;
  public static get instance(): RequestPaymentService {
    if (RequestPaymentService._service == null) {
      RequestPaymentService._service = new RequestPaymentService();
    }
    return RequestPaymentService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.REQUEST_PAYMENT_KEY;
  }
  override async findAll(
    options?: FetchOptions
  ): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  override async findOne(id: number): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: RequestPayment): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: RequestPayment): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
}
