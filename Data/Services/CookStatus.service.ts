import type { CookStatus } from "../Models";
import type { ICookStatusRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";

export class CookStatusService implements ICookStatusRepositry {
  async findAll(): Promise<CookStatus[]> {
    let { data, error } = await useFetch(config.CookStatus.API_COOK_STATUS_GET);
    console.log("Cook Status Data", data);
    return [];
  }
  async findOne(id: number): Promise<CookStatus> {
    throw new Error("Method not implemented.");
  }
  async create(row: CookStatus): Promise<CookStatus> {
    throw new Error("Method not implemented.");
  }
  async update(row: CookStatus): Promise<CookStatus> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<CookStatus> {
    throw new Error("Method not implemented.");
  }
}
