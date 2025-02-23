import { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
import type { UserResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";
import { BaseModelService } from "./Base.Service";
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

  override get usedUrl(): string {
    return config.User.API_PACKAGE_USER_GET;
  }
  async login(username: string, password: string): Promise<UserResponse> {
    let list: User[] | undefined = [];
    let { data, error } = await useFetch<UserResponse>(
      config.User.API_PACKAGE_USER_POST_LOGIN,
      {
        body: {
          username,
          password,
        },
        method: "POST",
      }
    );
    let response: UserResponse = ModelResponse.fromServerResponse(data.value);

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

  override async findAll(): Promise<UserResponse> {
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
}
