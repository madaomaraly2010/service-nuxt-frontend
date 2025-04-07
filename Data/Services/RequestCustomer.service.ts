import { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class RequestCustomerService
  extends BaseModelService<RequestCustomer>
  implements IRequestCustomerRepositry
{
  static _service: RequestCustomerService;
  public static get instance(): RequestCustomerService {
    if (RequestCustomerService._service == null) {
      RequestCustomerService._service = new RequestCustomerService();
    }
    return RequestCustomerService._service;
  }

  override get getFetchKey(): string {
    return "request-customer";
  }
  override async findAll(): Promise<RequestCustomerResponse> {
    return super.fetchData(
      RequestCustomer as any,
      config.RequestCustomer.API_RQUEST_CUSTOMER_GET
    );
  }
  override async findOne(id: number): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(
    row: RequestCustomer
  ): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(
    row: RequestCustomer
  ): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
}
