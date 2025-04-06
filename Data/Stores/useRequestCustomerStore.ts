import { RequestCustomer } from "../Models";
import type { IRequestCustomerRepositry } from "../Repositries/Models-Repositries";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import type { ModelResponse } from "../Responses/ModelResponse-Class";
import { RequestCustomerService } from "../Services/RequestCustomer.service";

// const repositry = new RequestCustomerStore();

const state = reactive<IRequestCustomerState>({
  list: [],
  async findAll(): Promise<ModelResponse<RequestCustomer>> {
    const response: RequestCustomerResponse =
      await RequestCustomerService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
  findOne(id: number): Promise<ModelResponse<RequestCustomer>> {
    throw new Error("Method not implemented.");
  },
  create(row: RequestCustomer): Promise<ModelResponse<RequestCustomer>> {
    throw new Error("Method not implemented.");
  },
  update(row: RequestCustomer): Promise<ModelResponse<RequestCustomer>> {
    throw new Error("Method not implemented.");
  },
  delete(id: number): Promise<ModelResponse<RequestCustomer>> {
    throw new Error("Method not implemented.");
  },
});

export interface IRequestCustomerState extends IRequestCustomerRepositry {
  list: RequestCustomer[];
}

export const useRequestCustomerStore = () => state;
