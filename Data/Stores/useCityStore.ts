import { City } from "../Models";
import type { CityResponse } from "../Responses/Model-Responses";
import { CityService } from "../Services/City.service";
const state = reactive({
  list: [] as City[],
  async findAll(): Promise<CityResponse> {
    const response: CityResponse = await CityService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useCityStore = () => state;
