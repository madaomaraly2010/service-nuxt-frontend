import { Location } from "../Models";
import type { LocationResponse } from "../Responses/Model-Responses";
import { LocationService } from "../Services/Location.service";
const state = reactive({
  list: [] as Location[],
  async findAll(): Promise<LocationResponse> {
    let response: LocationResponse = await LocationService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },
});
export const useLocationStore = () => state;
