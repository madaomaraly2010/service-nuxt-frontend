import { TableKeys } from "~/common/table-keys";
import { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
import type { UserResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
import type { FetchOptions } from "~/common/fetch-options";

export class UserService
  extends BaseModelService<User>
  implements IUserRepositry
{
  static _service: UserService;
  public static get instance(): UserService {
    if (UserService._service == null) {
      UserService._service = new UserService();
    }
    return UserService._service;
  }

  override get getFetchKey(): string {
    return TableKeys.USER_KEY;
  }
  async login(email: string, password: string): Promise<UserResponse> {
    let list: User[] | undefined = [];
    debugger;
    const { data, error } = await useFetch<UserResponse>(
      config.User.API_PACKAGE_USER_POST_LOGIN,
      {
        body: {
          email,
          password,
        },
        method: "POST",
      }
    );
    debugger;
    const response: UserResponse = ModelResponse.fromServerResponse(data.value);

    if (error.value?.message) {
      throw new Error(error.value?.message);
    }
    if (response.error) {
      return response;
    }
    if (Array.isArray(response.data ?? [])) {
      list = response.data?.map((it) => User.fromDbRow(it));
      response.data = list ?? [];
    }
    return response;
  }

  override async findAll(options?: FetchOptions): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  override async findOne(id: number): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  override async create(row: User): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  override async update(row: User): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  override async delete(id: number): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
