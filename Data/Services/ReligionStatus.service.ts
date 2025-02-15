import type { ReligionStatus } from "../Models";
import type { IReligionStatusRepositry } from "../Repositries/Models-Repositries";

export class ReligionStatusService implements IReligionStatusRepositry{
    findAll(): Promise<ReligionStatus[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<ReligionStatus> {
        throw new Error("Method not implemented.");
    }
    create(row: ReligionStatus): Promise<ReligionStatus> {
        throw new Error("Method not implemented.");
    }
    update(row: ReligionStatus): Promise<ReligionStatus> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<ReligionStatus> {
        throw new Error("Method not implemented.");
    }
}
