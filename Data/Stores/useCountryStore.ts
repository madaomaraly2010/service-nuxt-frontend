import { Country } from "../Models";
import type { CountryResponse } from "../Responses/Model-Responses";
import { CountryService } from "../Services/Country.service";
 const state = reactive({
  list: [] as Country[],
  async findAll(): Promise<CountryResponse> {
    const response: CountryResponse = await CountryService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useCountryStore = () => state;
