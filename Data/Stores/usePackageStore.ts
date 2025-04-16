import { TableKeys } from "~/common/table-keys";
import type { Package } from "../Models";
import type { PackageResponse } from "../Responses/Model-Responses";
import { PackageService } from "../Services/Package.service";
import type { FetchOptions } from "~/common/fetch-options";
import { StoreHelper } from "./storeHelper";

interface IPackageState {
  list: Package[];
}
export type PackageStoreType = ReturnType<typeof usePackageStore>;

export const usePackageStore = defineStore(TableKeys.PACKAGE_KEY, {
  state: (): IPackageState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<PackageResponse> {
      // const response = await PackageService.instance.findAll(options);
      // this.list = response.data ?? [];
      // return response;
      return StoreHelper.genericFindAll<Package, PackageResponse>(
        this,
        async () => {
          return PackageService.instance.findAll(options);
        }
      );
    },

    async findOne(id: number): Promise<PackageResponse> {
      throw new Error("Method not implemented.");
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
      // let isNew: boolean = row.id == null || row.id == undefined;
      // const response = await PackageService.instance.save(row);
      // if (response.success) {
      //   if (isNew) {
      //     this.list.push(row);
      //   } else {
      //     const index = this.list.findIndex((item) => item.id === row.id);
      //     if (index !== -1) {
      //       this.list[index] = row;
      //     }
      //   }
      // }
      // return response;
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
