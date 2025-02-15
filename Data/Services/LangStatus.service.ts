import type { LangStatus } from "../Models/LangStatus";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";

export class LangStatusService implements ILangStatusRepositry{
    findAll(): Promise<LangStatus[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<LangStatus> {
        throw new Error("Method not implemented.");
    }
    create(row: LangStatus): Promise<LangStatus> {
        throw new Error("Method not implemented.");
    }
    update(row: LangStatus): Promise<LangStatus> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<LangStatus> {
        throw new Error("Method not implemented.");
    }
}