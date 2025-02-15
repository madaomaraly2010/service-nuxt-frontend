import type { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";

export class RentStatusService implements IRentStatusRepositry{
    findAll(): Promise<RentStatus[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<RentStatus> {
        throw new Error("Method not implemented.");
    }
    create(row: RentStatus): Promise<RentStatus> {
        throw new Error("Method not implemented.");
    }
    update(row: RentStatus): Promise<RentStatus> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<RentStatus> {
        throw new Error("Method not implemented.");
    }

    
}
