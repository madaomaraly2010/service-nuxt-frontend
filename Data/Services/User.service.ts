import type { User } from "../Models";
import type { IUserRepositry } from "../Repositries/Models-Repositries";

export class UserService implements IUserRepositry{
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    create(row: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(row: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
}