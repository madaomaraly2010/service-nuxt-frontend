import { User } from "../Models";
import type { UserResponse } from "../Responses/Model-Responses";
import { UserService } from "../Services/User.service";
const state = reactive({
  list: [],
  isAuthenticated: false,

  async login(username: string, password: string): Promise<UserResponse> {
    let response: UserResponse = await UserService.instance.login(
      username,
      password
    );
    state.isAuthenticated = false;
    if (response.isAuthenticated) {
      localStorage.setItem("auth", "true");
      state.isAuthenticated = true;
    }
    return response;
  },
  async findAll(): Promise<UserResponse> {
    throw new Error("findAll not Implemented");
  },
  async findOne(id: number): Promise<UserResponse> {
    throw new Error("findOne not Implemented");
  },
  async create(row: User): Promise<UserResponse> {
    throw new Error("create not Implemented");
  },
  async update(row: User): Promise<UserResponse> {
    throw new Error("update not Implemented");
  },
  async delete(id: number): Promise<UserResponse> {
    throw new Error("delete not Implemented");
  },
});

export const useUserStore = () => state;
