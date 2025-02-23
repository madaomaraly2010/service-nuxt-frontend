import { User } from "../Models";
import type { UserResponse } from "../Responses/Model-Responses";
import { UserService } from "../Services/User.service";

export class UserStoreState {
  list: User[] = [];
  isAuthenticated: boolean = false;
  loggedUser: User | null = null;

  async login(username: string, password: string): Promise<UserResponse> {
    let response: UserResponse = await UserService.instance.login(
      username,
      password
    );
    this.isAuthenticated = false;
    if (response.isAuthenticated) {
      localStorage.setItem("auth", "true");
      this.isAuthenticated = true;
      this.loggedUser = response.data![0] as any;
      useRouter().push("/");
    }
    return response;
  }
  async logout() {
    localStorage.setItem("auth", "false");
    this.isAuthenticated = false;
    this.loggedUser = null;
    useRouter().push("/login");
  }
  async findAll(): Promise<UserResponse> {
    throw new Error("findAll not Implemented");
  }
  async findOne(id: number): Promise<UserResponse> {
    throw new Error("findOne not Implemented");
  }
  async create(row: User): Promise<UserResponse> {
    throw new Error("create not Implemented");
  }
  async update(row: User): Promise<UserResponse> {
    throw new Error("update not Implemented");
  }
  async delete(id: number): Promise<UserResponse> {
    throw new Error("delete not Implemented");
  }
}
// const state = reactive(new UserStoreState());
const state = reactive({
  list: [] as User[],
  isAuthenticated: false,
  loggedUser: {} as User | null,

  async login(username: string, password: string): Promise<UserResponse> {
    let response: UserResponse = await UserService.instance.login(
      username,
      password
    );
    state.isAuthenticated = false;
    if (response.isAuthenticated) {
      localStorage.setItem("auth", "true");
      state.isAuthenticated = true;
      state.loggedUser = response.data![0] as any;
      useRouter().push("/");
    }
    return response;
  },
  async logout() {
    localStorage.setItem("auth", "false");
    state.isAuthenticated = false;
    state.loggedUser = null;
    useRouter().push("/login");
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
