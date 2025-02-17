import type { LangStatus } from "../Models/LangStatus";
import type { ILangStatusRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";
export class LangStatusService implements ILangStatusRepositry {
  async findAll(): Promise<LangStatus[]> {
    let { data, error } = await useFetch(config.LangStatus.API_LANG_STATUS_GET);
    console.log("Lang Data", data);
    return [];
  }
  async findOne(id: number): Promise<LangStatus> {
    throw new Error("Method not implemented.");
  }
  async create(row: LangStatus): Promise<LangStatus> {
    throw new Error("Method not implemented.");
  }
  async update(row: LangStatus): Promise<LangStatus> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<LangStatus> {
    throw new Error("Method not implemented.");
  }
}
