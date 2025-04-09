import { TableKeys } from "~/common/table-keys";
import { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";

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
    return  TableKeys.REQUEST_CUSTOMER_KEY;
  }
  override async findAll(options?:FetchOptions): Promise<RequestCustomerResponse> {
    return super.fetchData(
      RequestCustomer as any,
      config.RequestCustomer.API_RQUEST_CUSTOMER_GET, {
        options,
      }
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
