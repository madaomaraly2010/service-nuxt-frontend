import type { PackageItem } from "../Models";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import type { ModelResponse } from "../Responses/ModelResponse-Class";

export class PackageItemStatusService implements IPackageItemRepositry {
  static _service: PackageItemStatusService;
  public static get instance(): PackageItemStatusService {
    if (PackageItemStatusService._service == null) {
      PackageItemStatusService._service = new PackageItemStatusService();
    }
    return PackageItemStatusService._service;
  }
  findAll(): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  create(row: PackageItem): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  update(row: PackageItem): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<PackageItemResponse> {
    throw new Error("Method not implemented.");
  }
}
