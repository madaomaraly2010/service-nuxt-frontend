import { Work } from "../Models";
import type { IWorkAttributes } from "../Models-Row-Attributes";
import type { IWorkRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";
export class WorkService implements IWorkRepositry {
  async findAll(): Promise<Work[]> {
    let list: Work[] = [];
    let { data, error } = await useFetch<IWorkAttributes[]>(
      config.Work.API_WORK_GET
    );

    if (Array.isArray(data.value)) {
      list = data.value?.map((work) => Work.fromDbRow(work));
    }
    return list;
  }
  async findOne(id: number): Promise<Work> {
    throw new Error("Method not implemented.");
  }
  async create(row: Work): Promise<Work> {
    throw new Error("Method not implemented.");
  }
  async update(row: Work): Promise<Work> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<Work> {
    throw new Error("Method not implemented.");
  }
}
