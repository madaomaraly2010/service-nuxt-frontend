import { defineStore } from "pinia";
import { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";
export const useUserStore = defineStore<
  "user",
  IUserStoreState,
  {},
  IUserRepositry
>("user", {
  state: () => ({
    users: [],
  }),

  actions: {
    async findAll(): Promise<User[]> {
      return [new User()];
    },
    async findOne(id: number): Promise<User> {
      return new User();
    },
    async create(row: User): Promise<User> {
      return new User();
    },
    async update(row: User): Promise<User> {
      return new User();
    },
    async delete(id: number): Promise<User> {
      return new User();
    },
  },
});

export interface IUserStoreState {
  users: User[];
}
