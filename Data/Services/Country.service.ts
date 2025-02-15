import type { Country } from "../Models";
import type { ICountryRepositry } from "../Repositries/Models-Repositries";

export class CountryService implements ICountryRepositry{
    findAll(): Promise<Country[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Country> {
        throw new Error("Method not implemented.");
    }
    create(row: Country): Promise<Country> {
        throw new Error("Method not implemented.");
    }
    update(row: Country): Promise<Country> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Country> {
        throw new Error("Method not implemented.");
    }
    
}