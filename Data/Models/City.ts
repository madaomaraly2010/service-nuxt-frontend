import { Country } from ".";
import type { ICityAttributes } from "../Models-Row-Attributes";

export class City {
  id!: number;
  arb_name?: string;
  eng_name?: string;
  country_id?: number;
  country?: Country;
  public toDbRow(): ICityAttributes {
    const row: ICityAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    row.country_id = this.country_id;
    return row;
  }

  public static fromDbRow(dbRow: ICityAttributes): City {
    const row: City = new City();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    row.country_id = dbRow.country_id;
    if (dbRow.country) {
      row.country = Country.fromDbRow(dbRow.country);
    }
    return row;
  }
}
