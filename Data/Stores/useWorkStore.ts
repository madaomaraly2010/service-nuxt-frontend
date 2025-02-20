import { defineStore } from "pinia";
import { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import { WorkService } from "../Services/Work.service";
import type { WorkResponse } from "../Responses/Model-Responses";
export const useWorkStore = defineStore<
  "work",
  IWorkStoreState,
  {},
  IWorkRepositry
>("work", {
  state: () => ({
    works: [],
  }),

  actions: {
    async findAll(): Promise<WorkResponse> {
      let response: WorkResponse = await WorkService.instance.findAll();
      debugger;
      const works = JSON.parse(JSON.stringify(response.data ?? []));
      this.$patch({ works });
      // this.works = response.data ?? [];
      return response;
    },
    async findOne(id: number): Promise<WorkResponse> {
      throw new Error();
    },
    async create(row: Work): Promise<WorkResponse> {
      throw new Error();
    },
    async update(row: Work): Promise<WorkResponse> {
      throw new Error();
    },
    async delete(id: number): Promise<WorkResponse> {
      throw new Error();
    },
  },
});

export interface IWorkStoreState {
  works: Work[];
}
