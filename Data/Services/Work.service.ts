import type { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";

export class WorkService implements IWorkRepositry{
    findAll(): Promise<Work[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Work> {
        throw new Error("Method not implemented.");
    }
    create(row: Work): Promise<Work> {
        throw new Error("Method not implemented.");
    }
    update(row: Work): Promise<Work> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Work> {
        throw new Error("Method not implemented.");
    }
}