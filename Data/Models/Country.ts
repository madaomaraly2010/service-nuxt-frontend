import { City, Provider } from ".";
import type { ICountryAttributes } from "../Models-Row-Attributes";

export class Country {
  id!: number;
  created_at!: Date;
  updated_at?: Date;
  eng_name?: string;
  flag_url!: string;
  iso_code!: string;
  arb_name?: string;
  // Country hasMany Provider via country_id
  providerList!: Provider[];

  cityList!: City[];

  public toDbRow(): ICountryAttributes {
    let row: ICountryAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    row.iso_code = this.iso_code;
    row.flag_url = this.flag_url;
    return row;
  }

  public static fromDbRow(dbRow: ICountryAttributes): Country {
    let row: Country = new Country();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.providers) {
      row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
    }
    if (dbRow.cities) {
      row.cityList = dbRow.cities.map((it) => City.fromDbRow(it));
    }
    return row;
  }
}
