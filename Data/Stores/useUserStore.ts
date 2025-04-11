import { TableKeys } from "~/common/table-keys";
import type { User } from "../Models";
import type { UserResponse } from "../Responses/Model-Responses";
import { UserService } from "../Services/User.service";
import type { FetchOptions } from "~/common/fetch-options";

interface IUserState {
  list: User[];
  loggedUser?: User | null;
  isAuthenticated?: boolean;
}

export const useUserStore = defineStore(TableKeys.USER_KEY, {
  state: (): IUserState => ({ list: [] }),
  getters: {},
  actions: {
    async findAll(options?: FetchOptions): Promise<UserResponse> {
      const response = await UserService.instance.findAll(options);
      this.list = response.data ?? [];
      return response;
    },

    async findOne(id: number): Promise<UserResponse> {
      throw new Error("Method not implemented.");
    },

    async create(row: User): Promise<UserResponse> {
      throw new Error("Method not implemented.");
    },

    async update(row: User): Promise<UserResponse> {
      throw new Error("Method not implemented.");
    },

    async delete(id: number): Promise<UserResponse> {
      throw new Error("Method not implemented.");
    },

    async login(username: string, password: string): Promise<UserResponse> {
      const response: UserResponse = await UserService.instance.login(
        username,
        password
      );
      this.isAuthenticated = false;
      if (response.success && response.isAuthenticated) {
        localStorage.setItem("auth", "true");
        this.isAuthenticated = true;
        this.loggedUser = response.data![0] as any;
        useRouter().push("/");
      }
      return response;
    },
    async logout() {
      localStorage.setItem("auth", "false");
      this.isAuthenticated = false;
      this.loggedUser = null;
      useRouter().push("/login");
    },
  },
});
