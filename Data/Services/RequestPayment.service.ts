import type { RequestPayment } from "../Models";
import type { IRequestPaymentRepositry } from "../Repositries/Models-Repositries";

export class RequestPaymentService implements IRequestPaymentRepositry{
    findAll(): Promise<RequestPayment[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<RequestPayment> {
        throw new Error("Method not implemented.");
    }
    create(row: RequestPayment): Promise<RequestPayment> {
        throw new Error("Method not implemented.");
    }
    update(row: RequestPayment): Promise<RequestPayment> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<RequestPayment> {
        throw new Error("Method not implemented.");
    }
}