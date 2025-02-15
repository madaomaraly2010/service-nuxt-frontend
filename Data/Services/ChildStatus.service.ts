import type { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";

export class ChildStatusService implements IChildStatusRepositry{
    findAll(): Promise<ChildStatus[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<ChildStatus> {
        throw new Error("Method not implemented.");
    }
    create(row: ChildStatus): Promise<ChildStatus> {
        throw new Error("Method not implemented.");
    }
    update(row: ChildStatus): Promise<ChildStatus> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<ChildStatus> {
        throw new Error("Method not implemented.");
    }
    
}