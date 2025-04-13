import { TableKeys } from "~/common/table-keys";
import type { Package } from "../Models";
import type { PackageResponse } from "../Responses/Model-Responses";
import { PackageService } from "../Services/Package.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IPackageState {
  list: Package[];
}

export const usePackageStore = defineStore(TableKeys.PACKAGE_KEY, {
  state: (): IPackageState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<PackageResponse> {
      const response = await PackageService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<PackageResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: Package): Promise<PackageResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: Package): Promise<PackageResponse> {
      throw new Error("Method not implemented.");
    },

    async save(row: Package): Promise<PackageResponse> {
      let isNew: boolean = row.id == null || row.id == undefined;
      const response = await PackageService.instance.save(row);
      if (response.success) {
        if (isNew) {
          this.list.push(row);
        } else {
          const index = this.list.findIndex((item) => item.id === row.id);
          if (index !== -1) {
            this.list[index] = row;
          }
        }
      }
      return response;
    },

    async delete(id: number): Promise<PackageResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
