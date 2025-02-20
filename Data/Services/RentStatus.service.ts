import type { RentStatus } from "../Models";
import type { IRentStatusRepositry } from "../Repositries/Models-Repositries";
import type { RentStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class RentStatusService implements IRentStatusRepositry {
  async findAll(): Promise<RentStatusResponse> {
    let { data, error } = await useFetch(config.RentStatus.API_RENT_STATUS_GET);
    console.log("Rent Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: RentStatus): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: RentStatus): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<RentStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
