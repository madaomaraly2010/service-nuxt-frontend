import type { Package } from "../Models";
import type { IPackageRepositry } from "../Repositries/Models-Repositries";
import type { PackageResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class PackageService implements IPackageRepositry {
  static _service: PackageService;
  public static get instance(): PackageService {
    if (PackageService._service == null) {
      PackageService._service = new PackageService();
    }
    return PackageService._service;
  }
  async findAll(): Promise<PackageResponse> {
    let { data, error } = await useFetch(config.Package.API_PACKAGE_STATUS_GET);
    console.log("Lang Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: Package): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: Package): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
}
