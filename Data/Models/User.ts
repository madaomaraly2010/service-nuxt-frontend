import { RequestCustomer, Provider, Location } from ".";
import type { IUserAttributes } from "../Models-Row-Attributes";

export class User {
  id!: number;
  username?: string | undefined;
  email?: string | undefined;
  password_hash?: string | undefined;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  first_name?: string | undefined;
  last_name?: string | undefined;
  mobile?: string;
  location_id?: number;

  // User hasOne Provider via user_id
  provider?: Provider;
  location?: Location;

  // User hasMany RequestCustomer via user_id
  requestCustomerList?: RequestCustomer[];

  public toDbRow(): IUserAttributes {
    let row: IUserAttributes = {};
    row.id = this.id;
    row.username = this.username;
    row.email = this.email;
    row.password_hash = this.password_hash;
    row.is_active = this.is_active;
    row.created_at = this.created_at;
    row.updated_at = this.updated_at;
    row.first_name = this.first_name;
    row.last_name = this.last_name;

    row.mobile = this.mobile;

    return row;
  }

  public static fromDbRow(dbRow: IUserAttributes): User {
    let row: User = new User();
    row.id = dbRow.id ?? 0;
    row.username = dbRow.username;
    row.email = dbRow.email;
    row.password_hash = dbRow.password_hash;
    row.is_active = dbRow.is_active;
    row.created_at = dbRow.created_at;
    row.updated_at = dbRow.updated_at;
    row.first_name = dbRow.first_name;
    row.last_name = dbRow.last_name;

    row.mobile = dbRow.mobile;

    if (dbRow.provider) {
      row.provider = Provider.fromDbRow(dbRow.provider);
    }
    if (dbRow.location) {
      row.location = Location.fromDbRow(dbRow.location);
    }
    if (dbRow.request_customers) {
      row.requestCustomerList = dbRow.request_customers.map((it) =>
        RequestCustomer.fromDbRow(it)
      );
    }
    return row;
  }
}
