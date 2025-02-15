import type { CookStatus } from "../Models";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";

export class CookStatusService implements ICookStatusRepositry{
    findAll(): Promise<CookStatus[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<CookStatus> {
        throw new Error("Method not implemented.");
    }
    create(row: CookStatus): Promise<CookStatus> {
        throw new Error("Method not implemented.");
    }
    update(row: CookStatus): Promise<CookStatus> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<CookStatus> {
        throw new Error("Method not implemented.");
    }
    
}