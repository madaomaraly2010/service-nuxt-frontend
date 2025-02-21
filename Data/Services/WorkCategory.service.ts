import { WorkCategory } from "../Models";
import type { IWorkCategoryRepositry } from "../Repositries/Models-Repositries";
import type { WorkCategoryResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
export class WorkCategoryService
  extends BaseModelService<WorkCategory>
  implements IWorkCategoryRepositry
{
  static _service: WorkCategoryService;
  public static get instance(): WorkCategoryService {
    if (WorkCategoryService._service == null) {
      WorkCategoryService._service = new WorkCategoryService();
    }
    return WorkCategoryService._service;
  }

  override get usedUrl(): string {
    return config.WorkCategory.API_WORK_CATEGORY_GET;
  }

  override async findAll(): Promise<WorkCategoryResponse> {
    return super.fetchData(
      WorkCategory as any,
      config.WorkCategory.API_WORK_CATEGORY_GET
    );
    // let { data, error } = await useFetch(
    //   config.WorkCategory.API_WORK_CATEGORY_GET
    // );
    // console.log("Work Category Data", data);
    // return ModelResponse.createSuccessResponse([]);
  }
  override async findOne(id: number): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: WorkCategory): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: WorkCategory): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<WorkCategoryResponse> {
    throw new Error("Method not implemented.");
  }
}
