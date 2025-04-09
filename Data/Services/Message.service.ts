import { TableKeys } from "~/common/table-keys";
import { Work } from "../Models";
import { Message } from "../Models/Message";
import type { IMessageRepositry } from "../Repositries/Models-Repositries";
import type {
  MessageResponse,
  WorkResponse,
} from "../Responses/Model-Responses";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";

export class MessageService
  extends BaseModelService<Message>
  implements IMessageRepositry
{
  static _messageService: MessageService;
  public static get instance(): MessageService {
    if (MessageService._messageService == null) {
      MessageService._messageService = new MessageService();
    }
    return MessageService._messageService;
  }

  override get getFetchKey(): string {
    return TableKeys.MESSAGE_KEY;
  }

  override async findAll(options?: FetchOptions): Promise<MessageResponse> {
    return super.fetchData(Message as any, config.Message.API_MESSAGE_GET, {
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
  override async findOne(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: Work): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<WorkResponse> {
    throw new Error("Method not implemented.");
  }
}
