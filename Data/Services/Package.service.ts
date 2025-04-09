import { TableKeys } from "~/common/table-keys";
import { Package } from "../Models";
import type { IPackageRepositry } from "../Repositries/Models-Repositries";
import type { PackageResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class PackageService
  extends BaseModelService<Package>
  implements IPackageRepositry
{
  static _service: PackageService;
  public static get instance(): PackageService {
    if (PackageService._service == null) {
      PackageService._service = new PackageService();
    }
    return PackageService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.PACKAGE_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<PackageResponse> {
    return super.fetchData(Package as any, config.Package.API_PACKAGE_GET, {
      options,
    });
    // let { data, error } = await useFetch(config.Package.API_PACKAGE_GET);
    // console.log("Lang Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Package): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Package): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<PackageResponse> {
    throw new Error("Method not implemented.");
  }
}
