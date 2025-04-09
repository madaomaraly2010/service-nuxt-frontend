import { TableKeys } from "~/common/table-keys";
import type { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { RequestCustomerService } from "../Services/RequestCustomer.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

interface IRequestCustomerState {
  list: RequestCustomer[];
}

export const useRequestCustomerStore = () => {
  const state = useState<IRequestCustomerState>(
    TableKeys.REQUEST_CUSTOMER_KEY,
    () => ({
      list: [] as RequestCustomer[],
    })
  );

  const repositry: IRequestCustomerRepositry = {
    async findAll(options?:FetchOptions): Promise<RequestCustomerResponse> {
      const response = await RequestCustomerService.instance.findAll();
      state.value.list = response.data ?? [];
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
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};
