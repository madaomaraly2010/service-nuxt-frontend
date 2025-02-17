import type { Package } from "../Models";
import type { IPackageRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";
export class PackageService implements IPackageRepositry{
    async findAll(): Promise<Package[]> {
         let { data, error } = await useFetch(config.Package.API_PACKAGE_STATUS_GET);
    console.log("Lang Data", data);
    return [];
    }
    async findOne(id: number): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    async create(row: Package): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    async update(row: Package): Promise<Package> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<Package> {
        throw new Error("Method not implemented.");
    }

    
}