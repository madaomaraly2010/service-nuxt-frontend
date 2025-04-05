import { Bank } from "../Models";
import type { BankResponse } from "../Responses/Model-Responses";
import { BankService } from "../Services/Bank.service";
const state = reactive({
  list: [] as Bank[],
  async findAll(): Promise<BankResponse> {
    const response: BankResponse = await BankService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useBankStore = () => state;
