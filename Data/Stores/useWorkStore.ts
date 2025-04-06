import { Work } from "../Models";
import { WorkService } from "../Services/Work.service";
import type { WorkResponse } from "../Responses/Model-Responses";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
const state = reactive<IWorkState>({
  list: [] as Work[],
  async findAll(): Promise<WorkResponse> {
    const response: WorkResponse = await WorkService.instance.findAll();
    state.list = response.data ?? [];
    return response;
  },

  async findOne(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  },
  async create(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  },
  async update(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  },
  async delete(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  },
});
export const useWorkStore = () => state;

export interface IWorkState extends IWorkRepositry {
  list: Work[];
}
