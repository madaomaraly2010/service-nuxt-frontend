import { TableKeys } from "~/common/table-keys";
import type { Package } from "../Models";
import type { PackageResponse } from "../Responses/Model-Responses";
import { PackageService } from "../Services/Package.service";
import type { FetchOptions } from "~/common/fetch-options";
import { StoreHelper } from "./storeHelper";
import type { IPackageRepositry } from "../Repositries/Models-Repositries";

interface IPackageState {
  list: Package[];
}

interface IPackageActions {}
export type PackageStoreType = ReturnType<typeof usePackageStore>;
export type PackageStoreActionType = IPackageRepositry & IPackageActions;
export const usePackageStore = defineStore<
  string,
  IPackageState,
  {},
  PackageStoreActionType
>(TableKeys.PACKAGE_KEY, {
  state: (): IPackageState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<PackageResponse> {
      return StoreHelper.genericFind<Package, PackageResponse>(
        this,
        async () => {
          return PackageService.instance.findAll(options);
        }
      );
    },

    async findOne(id: number): Promise<PackageResponse> {
      return StoreHelper.genericFind<Package, PackageResponse>(this, () =>
        PackageService.instance.findOne(id)
      );
    },

    async create(row: Package): Promise<PackageResponse> {
      return StoreHelper.genericCreate<Package, PackageResponse>(
        this,
        row,
        (r) => PackageService.instance.create(r)
      );
    },

    async update(row: Package): Promise<PackageResponse> {
      return StoreHelper.genericUpdate<Package, PackageResponse>(
        this,
        row,
        (r) => PackageService.instance.update(r)
      );
    },

    async save(row: Package): Promise<PackageResponse> {
      return StoreHelper.genericSave<Package, PackageResponse>(
        this,
        row,
        async (row) => {
          return PackageService.instance.save(row);
        }
      );
    },
    async delete(id: number): Promise<PackageResponse> {
      return StoreHelper.genericDelete<Package, PackageResponse>(
        this,
        id,
        async (id) => {
          return PackageService.instance.delete(id);
        }
      );
    },
  },
});
