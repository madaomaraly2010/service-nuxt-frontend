import type { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";
import { config } from "../UrlsConfig";
export class RentStatusService implements IRentStatusRepositry {
  async findAll(): Promise<RentStatus[]> {
    let { data, error } = await useFetch(config.RentStatus.API_RENT_STATUS_GET);
    console.log("Rent Data", data);
    return [];
  }
  async findOne(id: number): Promise<RentStatus> {
    throw new Error("Method not implemented.");
  }
  async create(row: RentStatus): Promise<RentStatus> {
    throw new Error("Method not implemented.");
  }
  async update(row: RentStatus): Promise<RentStatus> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<RentStatus> {
    throw new Error("Method not implemented.");
  }
}
