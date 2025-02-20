import type { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";

export class RequestCustomerService implements IRequestCustomerRepositry {
  findAll(): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  create(row: RequestCustomer): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  update(row: RequestCustomer): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<RequestCustomerResponse> {
    throw new Error("Method not implemented.");
  }
}
