import type { PackageItem } from "../Models";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";

export class PackageItemStatusService implements IPackageItemRepositry{
    findAll(): Promise<PackageItem[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<PackageItem> {
        throw new Error("Method not implemented.");
    }
    create(row: PackageItem): Promise<PackageItem> {
        throw new Error("Method not implemented.");
    }
    update(row: PackageItem): Promise<PackageItem> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<PackageItem> {
        throw new Error("Method not implemented.");
    }
    
}