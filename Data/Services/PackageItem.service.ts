import { TableKeys } from "~/common/table-keys";
import { PackageItem } from "../Models";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class PackageItemStatusService
  extends BaseModelService<PackageItem>
  implements IPackageItemRepositry
{
  static _service: PackageItemStatusService;
  public static get instance(): PackageItemStatusService {
    if (PackageItemStatusService._service == null) {
      PackageItemStatusService._service = new PackageItemStatusService();
    }
    return PackageItemStatusService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.PACKAGE_ITEM_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<PackageItemResponse> {
    return super.fetchData(
      PackageItem as any,
      config.PackageItem.API_PACKAGE_ITEM_GET, {
        options,
      
      }
    );
  }
  override async findOne(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: PackageItem): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: PackageItem): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
}
