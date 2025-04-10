import { TableKeys } from "~/common/table-keys";
import type { Provider } from "../Models";
import type { ProviderResponse } from "../Responses/Model-Responses";
import { ProviderService } from "../Services/Provider.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IProviderState {
  list: Provider[];
}
import { defineStore } from "pinia";

export const useProviderStore = defineStore(TableKeys.PROVIDER_KEY, {
  state: (): IProviderState => ({
    list: [],
  }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<ProviderResponse> {
      const response = await ProviderService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async getByCountry(
      countryId: number,
      options?: FetchOptions
    ): Promise<ProviderResponse> {
      const response: ProviderResponse =
        await ProviderService.instance.getByCountry(countryId, options);
      this.list = response.data ?? [];
      return response;
    },
    async getByWork(
      workId: number,
      options?: FetchOptions
    ): Promise<ProviderResponse> {
      const response: ProviderResponse =
        await ProviderService.instance.getByWork(workId, options);
      this.list = response.data ?? [];
      return response;
    },
  },
});

// export const useProviderStore = () => {
//   const state = useState<IProviderState>(TableKeys.PROVIDER_KEY, () => ({
//     list: [] as Provider[],
//   }));

//   const repositry: IProviderRepositry = {
//     async findAll(options?: FetchOptions): Promise<ProviderResponse> {
//       const response = await ProviderService.instance.findAll();
//       state.value.list = response.data ?? [];
//       return response;
//     },

//     async findOne(id: number): Promise<ProviderResponse> {
//       throw new Error("Method not implemented.");
//     },

//     async create(row: Provider): Promise<ProviderResponse> {
//       throw new Error("Method not implemented.");
//     },

//     async update(row: Provider): Promise<ProviderResponse> {
//       throw new Error("Method not implemented.");
//     },

//     async delete(id: number): Promise<ProviderResponse> {
//       throw new Error("Method not implemented.");
//     },

//     async getByCountry(
//       countryId: number,
//       options?: FetchOptions
//     ): Promise<ProviderResponse> {
//       const response: ProviderResponse =
//         await ProviderService.instance.getByCountry(countryId, options);
//       state.value.list = response.data ?? [];
//       return response;
//     },
//     async getByWork(
//       workId: number,
//       options?: FetchOptions
//     ): Promise<ProviderResponse> {
//       const response: ProviderResponse =
//         await ProviderService.instance.getByWork(workId, options);
//       state.value.list = response.data ?? [];
//       return response;
//     },
//   };

//   return {
//     ...toRefs(state.value), // reactive list
//     ...repositry,
//   };
// };
