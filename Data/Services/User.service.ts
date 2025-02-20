import { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
import type { UserResponse } from "../Responses/Model-Responses";
import { ModelResponse } from "../Responses/ModelResponse-Class";
import { config } from "../UrlsConfig";

export class UserService implements IUserRepositry {
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
    let response: UserResponse = ModelResponse.fromServerResponse(data);

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
  findAll(): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  create(row: User): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  update(row: User): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<UserResponse> {
    throw new Error("Method not implemented.");
  }
}
