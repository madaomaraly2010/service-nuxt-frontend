import type { PackageItem } from "../Models";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import type { ModelResponse } from "../Responses/ModelResponse-Class";

export class PackageItemStatusService implements IPackageItemRepositry {
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
