import { RequestCustomer } from "../Models";
import type { RequestCustomerResponse } from "../Responses/Model-Responses";
import { RequestCustomerService } from "../Services/RequestCustomer.service";
const state = reactive({
  list: [] as RequestCustomer[],
  async findAll(): Promise<RequestCustomerResponse> {
    const response: RequestCustomerResponse =
      await RequestCustomerService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useRequestCustomerStore = () => state;
