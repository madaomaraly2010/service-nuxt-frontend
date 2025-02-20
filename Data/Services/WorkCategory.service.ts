import type { WorkCategory } from "../Models";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class WorkCategoryService implements IWorkCategoryRepositry {
  static _service: WorkCategoryService;
  public static get instance(): WorkCategoryService {
    if (WorkCategoryService._service == null) {
      WorkCategoryService._service = new WorkCategoryService();
    }
    return WorkCategoryService._service;
  }
  async findAll(): Promise<WorkCategoryResponse> {
    let { data, error } = await useFetch(
      config.WorkCategory.API_WORK_CATEGORY_GET
    );
    console.log("Work Category Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: WorkCategory): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: WorkCategory): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
}
