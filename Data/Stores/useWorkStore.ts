import { defineStore } from "pinia";
import { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import { WorkService } from "../Services/Work.service";
export const useWorkStore = defineStore<
  "work",
  IWorkStoreState,
  {},
  IWorkRepositry
>("work", {
  state: () => ({
    works: [],
    service: new WorkService(),
  }),

  actions: {
    async findAll(): Promise<Work[]> {
      this.works = await this.service.findAll();
      return this.works;
    },
    async findOne(id: number): Promise<Work> {
      return new Work();
    },
    async create(row: Work): Promise<Work> {
      return new Work();
    },
    async update(row: Work): Promise<Work> {
      return new Work();
    },
    async delete(id: number): Promise<Work> {
      return new Work();
    },
  },
});

export interface IWorkStoreState {
  works: Work[];
  service: WorkService;
}
