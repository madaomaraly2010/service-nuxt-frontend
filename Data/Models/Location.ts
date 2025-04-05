import { Country } from ".";
import type { ILocationAttributes } from "../Models-Row-Attributes";
import type { City } from "./City";

export class Location {
  id!: number;
  created_at?: Date;
  user_id?: number;
  address?: string;
  city_id?: number;
  state?: string;
  post_code?: string;
  lat?: number;
  lng?: number;
  country_id?: number;

  country?: Country;
  city?: City;

  public toDbRow(): ILocationAttributes {
    const row: ILocationAttributes = {};
    row.id = this.id;
    row.address = this.address;
    row.city_id = this.city_id;

    row.country_id = this.country_id;

    //row.created_at = this.eng_name;

    row.lat = this.lat;

    row.lng = this.lng;

    row.post_code = this.post_code;

    row.state = this.state;

    row.user_id = this.user_id;

    return row;
  }

  public static fromDbRow(dbRow: ILocationAttributes): Location {
    const row: Location = new Location();
    row.id = dbRow.id ?? 0;
    row.address = dbRow.address;
    row.city_id = dbRow.city_id;

    row.country_id = dbRow.country_id;

    row.created_at = dbRow.created_at;

    row.lat = dbRow.lat;

    row.lng = dbRow.lng;

    row.post_code = dbRow.post_code;

    row.state = dbRow.state;

    row.user_id = dbRow.user_id;

    if (dbRow.country) {
      row.country = Country.fromDbRow(dbRow.country);
    }

    if (dbRow.city) {
      row.country = Country.fromDbRow(dbRow.city);
    }
    return row;
  }
}
