import type { RequestPayment } from "../Models";
import type { IRequestPaymentRepositry } from "../Repositries/Models-Repositries";
import type { RequestPaymentResponse } from "../Responses/Model-Responses";

export class RequestPaymentService implements IRequestPaymentRepositry {
  findAll(): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  create(row: RequestPayment): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  update(row: RequestPayment): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<RequestPaymentResponse> {
    throw new Error("Method not implemented.");
  }
}
