import { Work } from "../Models";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import type { WorkResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class WorkService implements IWorkRepositry {
  static _workService: WorkService;
  public static get instance(): WorkService {
    if (WorkService._workService == null) {
      WorkService._workService = new WorkService();
    }
    return WorkService._workService;
  }

  async findAll(): Promise<WorkResponse> {
    let list: Work[] = [];

    let { data, error } = await useFetch<WorkResponse>(
      config.Work.API_WORK_GET
    );

    let response: WorkResponse = ModelResponse.fromServerResponse(data.value);
    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (response.error) {
      return response;
    }

    if (Array.isArray(response.data)) {
      list = response.data.map((work) => Work.fromDbRow(work));
      response.data = list;
    }
    return response;
  }
  async findOne(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
}
