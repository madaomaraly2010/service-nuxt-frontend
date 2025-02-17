import type { ChildStatus } from "../Models";
import type { IChildStatusRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";

export class ChildStatusService implements IChildStatusRepositry {
  async findAll(): Promise<ChildStatus[]> {
    let { data, error } = await useFetch(
      config.ChildStatus.API_CHILD_STATUS_GET
    );
    console.log("Child Status Data", data);
    return [];
  }
  async findOne(id: number): Promise<ChildStatus> {
    throw new Error("Method not implemented.");
  }
  async create(row: ChildStatus): Promise<ChildStatus> {
    throw new Error("Method not implemented.");
  }
  async update(row: ChildStatus): Promise<ChildStatus> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<ChildStatus> {
    throw new Error("Method not implemented.");
  }
}
