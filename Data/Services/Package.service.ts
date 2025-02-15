import type { Package } from "../Models";
import type { IPackageRepositry } from "../Repositries/Models-Repositries";

export class PackageService implements IPackageRepositry{
    findAll(): Promise<Package[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    create(row: Package): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    update(row: Package): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Package> {
        throw new Error("Method not implemented.");
    }

    
}