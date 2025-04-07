import type { RequestPayment } from "../Models";
import type { IRequestPaymentRepositry } from "../Repositries/Models-Repositries";
import type { RequestPaymentResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
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
    return "request-payment";
  }
  override async findAll(): Promise<RequestPaymentResponse> {
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
