import { TableKeys } from "~/common/table-keys";
import { Bank, Work } from "../Models";
import type { IBankRepositry } from "../Repositries/Models-Repositries";
import type { BankResponse } from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";
export class BankService
  extends BaseModelService<Bank>
  implements IBankRepositry
{
  static _service: BankService;
  public static get instance(): BankService {
    if (BankService._service == null) {
      BankService._service = new BankService();
    }
    return BankService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.BANK_KEY;
  }

  override async findAll(options?: FetchOptions): Promise<BankResponse> {
    return super.fetchData(Work as any, config.Bank.API_BANK_GET, {
      options,
    });
  }

  // override async findAll(): Promise<WorkResponse> {
  //   let list: Work[] = [];

  //   let { data, error } = await useFetch<WorkResponse>(
  //     config.Work.API_WORK_GET
  //   );

  //   let response: WorkResponse = ModelResponse.fromServerResponse(data.value);
  //   if (error.value?.message) {
  //     throw new Error(error.value?.message);
  //   }
  //   if (response.error) {
  //     return response;
  //   }

  //   if (Array.isArray(response.data)) {
  //     list = response.data.map((work) => Work.fromDbRow(work));
  //     response.data = list;
  //   }
  //   return response;
  // }
  override async findOne(id: number): Promise<BankResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Bank): Promise<BankResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Bank): Promise<BankResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<BankResponse> {
    throw new Error("Method not implemented.");
  }
}
