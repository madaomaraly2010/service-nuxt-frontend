import type { FetchOptions } from "~/common/fetch-options";
import type { ModelResponse } from "../Responses/ModelResponse-Class";

export interface IRepositry<ModelType> {
  findAll(options?: FetchOptions): Promise<ModelResponse<ModelType>>;
  findOne(id: number): Promise<ModelResponse<ModelType>>;
  create(row: ModelType): Promise<ModelResponse<ModelType>>;
  update(row: ModelType): Promise<ModelResponse<ModelType>>;
  delete(id: number): Promise<ModelResponse<ModelType>>;
  save(row: ModelType): Promise<ModelResponse<ModelType>>;
}
