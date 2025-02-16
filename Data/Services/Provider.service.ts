import type { Provider } from "../Models";
import type { IProviderRepositry } from "../Repositries/Models-Repositries";

export class ProviderService implements IProviderRepositry{
    getByCountry(countryId: number): Promise<Provider[]> {
        throw new Error("Method not implemented.");
    }
    getByWork(workId: number): Promise<Provider[]> {
        throw new Error("Method not implemented.");
    }
   async  findAll(): Promise<Provider[]> {
       let fetch = await  useFetch("")
       fetch.
    }
    findOne(id: number): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    create(row: Provider): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    update(row: Provider): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Provider> {
        throw new Error("Method not implemented.");
    }
    
}