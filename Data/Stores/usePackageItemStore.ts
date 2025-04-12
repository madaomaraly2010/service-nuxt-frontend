import { TableKeys } from "~/common/table-keys";
import type { PackageItem } from "../Models";
import type { PackageItemResponse } from "../Responses/Model-Responses";
import { PackageItemService } from "../Services/PackageItem.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IPackageItemState {
  list: PackageItem[];
}

export const usePackageItemStore = defineStore(TableKeys.PACKAGE_ITEM_KEY, {
  state: (): IPackageItemState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<PackageItemResponse> {
      const response = await PackageItemService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: PackageItem): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: PackageItem): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<PackageItemResponse> {
      throw new Error("Method not implemented.");
    },
  },
});
