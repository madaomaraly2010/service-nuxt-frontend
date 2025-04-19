import { TableKeys } from "~/common/table-keys";
import { PackageItem } from "../Models";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import type { FetchOptions } from "~/common/fetch-options";

import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class PackageItemService
  extends BaseModelService<PackageItem>
  implements IPackageItemRepositry
{
  static _service: PackageItemService;
  public static get instance(): PackageItemService {
    if (PackageItemService._service == null) {
      PackageItemService._service = new PackageItemService();
    }
    return PackageItemService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.PACKAGE_ITEM_KEY;
  }
  override async findAll(options?: FetchOptions): Promise<PackageItemResponse> {
    return super.fetchData(
      PackageItem as any,
      config.PackageItem.API_PACKAGE_ITEM_GET,
      {
        options,
      }
    );
  }

  async findAllByPackage(
    packageId: number,
    options?: FetchOptions
  ): Promise<PackageItemResponse> {
    debugger;
    return super.fetchData(
      PackageItem as any,
      config.PackageItem.API_PACKAGE_ITEM_GET,
      {
        queryStrings: { packageId },
        options,
      }
    );
  }
  override async findOne(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: PackageItem): Promise<PackageItemResponse> {
    return super.serverCreateRow(
      PackageItem as any,
      config.PackageItem.API_PACKAGE_ITEM_POST,
      row
    );
  }
  override async update(row: PackageItem): Promise<PackageItemResponse> {
    return super.serverUpdateRow(
      PackageItem as any,
      config.PackageItem.API_PACKAGE_ITEM_UPDATE,
      row
    );
  }
  override async delete(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
}
