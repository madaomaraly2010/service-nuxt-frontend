import type { ReligionStatus } from "../Models";
import type { IReligionStatusRepositry } from "../Repositries/Models-Repositries";
import type { ReligionStatusResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
export class ReligionStatusService implements IReligionStatusRepositry {
  async findAll(): Promise<ReligionStatusResponse> {
    let { data, error } = await useFetch(
      config.ReligionStatus.API_RELIGION_STATUS_GET
    );
    console.log("Religion Data", data);
    return ModelResponse.createSuccessResponse([]);
  }
  async findOne(id: number): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async create(row: ReligionStatus): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async update(row: ReligionStatus): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
  async delete(id: number): Promise<ReligionStatusResponse> {
    throw new Error("Method not implemented.");
  }
}
