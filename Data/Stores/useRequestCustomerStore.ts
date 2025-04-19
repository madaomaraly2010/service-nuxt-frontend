import { TableKeys } from "~/common/table-keys";
import { RequestCustomer } from "../Models";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { RequestCustomerService } from "../Services/RequestCustomer.service";
import type { FetchOptions } from "~/common/fetch-options";
import { StoreHelper } from "./storeHelper";
import type {
  IReligionStatusRepositry,
  IRequestCustomerRepositry,
} from "../Repositries/Models-Repositries";

interface IRequestCustomerState {
  list: RequestCustomer[];
}

interface IRequestCustomerActions {}
export type RequestCustomerStoreType = ReturnType<
  typeof useRequestCustomerStore
>;
export type RequestCustomerStoreActionType = IRequestCustomerActions &
  IRequestCustomerRepositry;

export const useRequestCustomerStore = defineStore<
  string,
  IRequestCustomerState,
  {},
  RequestCustomerStoreActionType
>(TableKeys.REQUEST_CUSTOMER_KEY, {
  state: (): IRequestCustomerState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<RequestCustomerResponse> {
      // const response = await RequestCustomerService.instance.findAll(options);
      // this.list = response.data ?? [];
      // return response;
      return StoreHelper.genericFind<RequestCustomer, RequestCustomerResponse>(
        this,
        () => {
          return RequestCustomerService.instance.findAll(options);
        }
      );
    },

    async findOne(id: number): Promise<RequestCustomerResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: RequestCustomer): Promise<RequestCustomerResponse> {
      return StoreHelper.genericCreate<
        RequestCustomer,
        RequestCustomerResponse
      >(this, row, (row) => RequestCustomerService.instance.create(row));
    },

    async save(row: RequestCustomer): Promise<RequestCustomerResponse> {
      return StoreHelper.genericSave<RequestCustomer, RequestCustomerResponse>(
        this,
        row,
        async (row) => {
          return RequestCustomerService.instance.save(row);
        }
      );
    },
    async update(row: RequestCustomer): Promise<RequestCustomerResponse> {
      // const response = await RequestCustomerService.instance.update(row);
      // if (!response.success) return response;

      // const index = this.list.findIndex((item) => item.id === row.id);

      // if (index !== -1 && Array.isArray(response.data)) {
      //   this.list[index] = response.data[0]; // update the specific item
      // }
      // return response;
      return StoreHelper.genericUpdate<
        RequestCustomer,
        RequestCustomerResponse
      >(this, row, (row) => RequestCustomerService.instance.update(row));
    },

    async delete(id: number): Promise<RequestCustomerResponse> {
      // const response = await RequestCustomerService.instance.delete(id);
      // if (!response.success) return response;

      // const index = this.list.findIndex((item) => item.id === id);

      // if (index !== -1) {
      //   this.list.splice(index, 1); // remove the specific item
      // }
      // return response;
      return StoreHelper.genericDelete<
        RequestCustomer,
        RequestCustomerResponse
      >(this, id, (id) => RequestCustomerService.instance.delete(id));
    },
  },
});
