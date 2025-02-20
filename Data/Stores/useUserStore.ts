import { defineStore } from "pinia";
import { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
import type { UserResponse } from "../Responses/Model-Responses";
import { UserService } from "../Services/User.service";
export const useUserStore = defineStore<
  "user",
  IUserStoreState,
  {},
  IUserRepositry
>("user", {
  state: () => ({
    users: [],
    service: null,
    isAuthenticated: false,
  }),

  actions: {
    async login(username: string, password: string): Promise<UserResponse> {
      if (this.service == null) this.service = new UserService();
      let response: UserResponse = await this.service.login(username, password);
      this.isAuthenticated = false;
      if (response.isAuthenticated) {
        localStorage.setItem("auth", "true");
        this.isAuthenticated = true;
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
  },
});

export interface IUserStoreState {
  users: User[];
  service: UserService | null;
  isAuthenticated: boolean;
}
