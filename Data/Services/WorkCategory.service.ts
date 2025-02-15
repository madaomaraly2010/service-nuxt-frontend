import type { WorkCategory } from "../Models";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";

export class WorkCategoryService implements IWorkCategoryRepositry{
    findAll(): Promise<WorkCategory[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<WorkCategory> {
        throw new Error("Method not implemented.");
    }
    create(row: WorkCategory): Promise<WorkCategory> {
        throw new Error("Method not implemented.");
    }
    update(row: WorkCategory): Promise<WorkCategory> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<WorkCategory> {
        throw new Error("Method not implemented.");
    }
}