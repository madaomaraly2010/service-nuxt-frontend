import { TableKeys } from "~/common/table-keys";
import type { RequestCustomer } from "../Models";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { RequestCustomerService } from "../Services/RequestCustomer.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestCustomerState {
  list: RequestCustomer[];
}

export const useRequestCustomerStore = defineStore(
  TableKeys.REQUEST_CUSTOMER_KEY,
  {
    state: (): IRequestCustomerState => ({ list: [] }),
    getters: {},
    actions: {
      async findAll(options?: FetchOptions): Promise<RequestCustomerResponse> {
        const response = await RequestCustomerService.instance.findAll(options);
        this.list = response.data ?? [];
        return response;
      },

      async findOne(id: number): Promise<RequestCustomerResponse> {
        throw new Error("Method not implemented.");
      },

      async create(row: RequestCustomer): Promise<RequestCustomerResponse> {
        throw new Error("Method not implemented.");
      },

      async update(row: RequestCustomer): Promise<RequestCustomerResponse> {
        throw new Error("Method not implemented.");
      },

      async delete(id: number): Promise<RequestCustomerResponse> {
        throw new Error("Method not implemented.");
      },
    },
  }
);
