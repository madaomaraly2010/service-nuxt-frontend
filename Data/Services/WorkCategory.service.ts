import type { WorkCategory } from "../Models";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";
export class WorkCategoryService implements IWorkCategoryRepositry {
  async findAll(): Promise<WorkCategory[]> {
    let { data, error } = await useFetch(
      config.WorkCategory.API_WORK_CATEGORY_GET
    );
    console.log("Work Category Data", data);
    return [];
  }
  async findOne(id: number): Promise<WorkCategory> {
    throw new Error("Method not implemented.");
  }
  async create(row: WorkCategory): Promise<WorkCategory> {
    throw new Error("Method not implemented.");
  }
  async update(row: WorkCategory): Promise<WorkCategory> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<WorkCategory> {
    throw new Error("Method not implemented.");
  }
}
