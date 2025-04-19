import { TableKeys } from "~/common/table-keys";
import type { PackageItem } from "../Models";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import { PackageItemService } from "../Services/PackageItem.service";
import type { FetchOptions } from "~/common/fetch-options";
import type { IPackageItemRepositry } from "../Repositries/Models-Repositries";
import { StoreHelper } from "./storeHelper";

interface IPackageItemState {
  list: PackageItem[];
  // nb:boolean
}

interface IPackageItemActions {}
export type PackageItemStoreType = ReturnType<typeof usePackageItemStore>;
export type PackageItemStoreActionType = IPackageItemRepositry &
  IPackageItemActions;

export const usePackageItemStore = defineStore<
  string,
  IPackageItemState,
  {},
  PackageItemStoreActionType
>(TableKeys.PACKAGE_ITEM_KEY, {
  state: () => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<PackageItemResponse> {
      const response = await PackageItemService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },
    async findAllByPackage(
      packageId: number,
      options?: FetchOptions
    ): Promise<PackageItemResponse> {
      debugger;
      return StoreHelper.genericFindAll<PackageItem, PackageItemResponse>(
        this,
        () => PackageItemService.instance.findAllByPackage(packageId, options)
      );
    },

    async findOne(id: number): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: PackageItem): Promise<PackageItemResponse> {
      return StoreHelper.genericCreate<PackageItem, PackageItemResponse>(
        this,
        row,
        () => PackageItemService.instance.create(row)
      );
    },

    async save(row: PackageItem): Promise<PackageItemResponse> {
      return StoreHelper.genericSave<PackageItem, PackageItemResponse>(
        this,
        row,
        () => PackageItemService.instance.save(row)
      );
    },

    async update(row: PackageItem): Promise<PackageItemResponse> {
      return StoreHelper.genericUpdate<PackageItem, PackageItemResponse>(
        this,
        row,
        () => PackageItemService.instance.update(row)
      );
    },

    async delete(id: number): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
