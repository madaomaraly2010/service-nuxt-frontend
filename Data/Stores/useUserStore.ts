import { TableKeys } from "~/common/table-keys";
import type { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
import type { UserResponse } from "../Responses/Model-Responses";
import { UserService } from "../Services/User.service";
import { toRefs } from "vue";
import type { FetchOptions } from "~/common/fetch-options";

export const useUserStore = () => {
  const state = useState<IUserState>(TableKeys.USER_KEY, () => ({
    list: [] as User[],
    loggedUser: null,
    isAuthenticated: false,
  }));

  const repositry: IUserRepositry = {
    async findAll(options?:FetchOptions): Promise<UserResponse> {
      const response = await UserService.instance.findAll();
      state.value.list = response.data ?? [];
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
      state.value.isAuthenticated = false;
      if (response.isAuthenticated) {
        localStorage.setItem("auth", "true");
        state.value.isAuthenticated = true;
        state.value.loggedUser = response.data![0] as any;
        useRouter().push("/");
      }
      return response;
    },
    async logout() {
      localStorage.setItem("auth", "false");
      state.value.isAuthenticated = false;
      state.value.loggedUser = null;
      useRouter().push("/login");
    },
  };

  return {
    ...toRefs(state.value), // reactive list
    ...repositry, // auto-includes all functions
  };
};

interface IUserState {
  list: User[];
  loggedUser?: User | null;
  isAuthenticated?: boolean;
}
