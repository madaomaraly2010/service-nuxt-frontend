import type { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";

export class RequestCustomerService implements IRequestCustomerRepositry{
    findAll(): Promise<RequestCustomer[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<RequestCustomer> {
        throw new Error("Method not implemented.");
    }
    create(row: RequestCustomer): Promise<RequestCustomer> {
        throw new Error("Method not implemented.");
    }
    update(row: RequestCustomer): Promise<RequestCustomer> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<RequestCustomer> {
        throw new Error("Method not implemented.");
    }
    
}