import {
  ChildStatus,
  Package,
  CookStatus,
  Country,
  ReligionStatus,
  RequestCustomer,
  User,
  Work,
} from ".";
import type { IProviderAttributes } from "../Models-Row-Attributes";
import { LangStatus } from "./LangStatus";

export class Provider {
  id!: number;
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
  address?: string;
  city?: number;
  state?: number;
  zipcode?: string;
  lat?: number;
  lng?: number;
  profile_picture?: string;
  user_id!: number;
  bio?: string;
  rating?: number;
  rent_status_id?: number;
  country_id!: number;
  religion_status_id?: number;
  arabic_status_id?: number;
  english_status_id?: number;
  nick_name?: string;
  net_salary?: number;
  wage_amount?: number;
  card_number?: string;
  card_expire?: Date | undefined;
  passport_number?: string;
  passport_expire?: Date | undefined;
  experience_date?: Date | undefined;
  max_children?: number;
  child_status_id?: number;
  license_number!: string;
  license_expiry!: Date | undefined;
  work_id!: number;
  package_id?: number;
  cook_status_id?: number;

  // Provider belongsTo ChildStatus via child_status
  childStatus!: ChildStatus;
  // Provider belongsTo CookStatus via cook_status
  cookStatus!: CookStatus;
  // Provider belongsTo Country via country_id
  country!: Country;
  // Provider belongsTo LangStatus via arabic_status
  arabicStatus!: LangStatus;
  // Provider belongsTo LangStatus via english_status
  englishStatus!: LangStatus;

  package!: Package;

  // Provider hasMany RequestCustomer via provider_id
  requestCustomerList!: RequestCustomer[];

  // Provider belongsTo ReligionStatus via religion_status
  religionStatus!: ReligionStatus;
  // Provider belongsTo User via user_id
  user!: User;

  // Provider belongsTo WorkCategory via work_id
  work!: Work;
  public toDbRow(): Partial<IProviderAttributes> {
    let row: Partial<IProviderAttributes> = {};
    row.id = this.id;
    row.wage_amount = this.wage_amount;
    row.created_at = this.created_at;
    row.updated_at = this.updated_at;
    row.city = this.city;
    row.state = this.state;
    row.zipcode = this.zipcode;
    row.lat = this.lat;
    row.lng = this.lng;
    row.profile_picture = this.profile_picture;
    row.user_id = this.user_id;
    row.bio = this.bio;
    row.rating = this.rating;
    row.rent_status_id = this.rent_status_id;
    row.country_id = this.country_id;
    row.religion_status_id = this.religion_status_id;
    row.arabic_status_id = this.arabic_status_id;
    row.english_status_id = this.english_status_id;
    row.nick_name = this.nick_name;
    row.net_salary = this.net_salary;
    row.wage_amount = this.wage_amount;
    row.card_number = this.card_number;
    row.card_expire = this.card_expire;
    row.passport_number = this.passport_number;
    row.passport_expire = this.passport_expire;
    row.experience_date = this.experience_date;
    row.max_children = this.max_children;
    row.child_status_id = this.child_status_id;
    row.license_number = this.license_number;
    row.license_expiry = this.license_expiry;
    row.work_id = this.work_id;
    row.package_id = this.package_id;
    row.cook_status_id = this.cook_status_id;

    return row;
  }

  public static fromDbRow(dbRow: IProviderAttributes): Provider {
    let row: Provider = new Provider();
    row.id = dbRow.id ?? 0;

    row.wage_amount = dbRow.wage_amount;
    row.created_at = dbRow.created_at;
    row.updated_at = dbRow.updated_at;
    row.city = dbRow.city;
    row.state = dbRow.state;
    row.zipcode = dbRow.zipcode;
    row.lat = dbRow.lat;
    row.lng = dbRow.lng;
    row.profile_picture = dbRow.profile_picture;
    row.user_id = dbRow.user_id;
    row.bio = dbRow.bio;
    row.rating = dbRow.rating;
    row.rent_status_id = dbRow.rent_status_id;
    row.country_id = dbRow.country_id ?? 0;
    row.religion_status_id = dbRow.religion_status_id;
    row.arabic_status_id = dbRow.arabic_status_id;
    row.english_status_id = dbRow.english_status_id;
    row.nick_name = dbRow.nick_name;
    row.net_salary = dbRow.net_salary;
    row.wage_amount = dbRow.wage_amount;
    row.card_number = dbRow.card_number;
    row.card_expire = dbRow.card_expire;
    row.passport_number = dbRow.passport_number;
    row.passport_expire = dbRow.passport_expire;
    row.experience_date = dbRow.experience_date;
    row.max_children = dbRow.max_children;
    row.child_status_id = dbRow.child_status_id;
    row.license_number = dbRow.license_number ?? "";
    row.license_expiry = dbRow.license_expiry;
    row.work_id = dbRow.work_id ?? 0;
    row.package_id = dbRow.package_id;
    row.cook_status_id = dbRow.cook_status_id;

    if (dbRow.package) {
      row.package = Package.fromDbRow(dbRow.package);
    }
    if (dbRow.arabic_status) {
      row.arabicStatus = LangStatus.fromDbRow(dbRow.arabic_status);
    }
    if (dbRow.english_status) {
      row.englishStatus = LangStatus.fromDbRow(dbRow.english_status);
    }

    if (dbRow.child_status)
      row.childStatus = ChildStatus.fromDbRow(dbRow.child_status);
    if (dbRow.cook_status)
      row.cookStatus = CookStatus.fromDbRow(dbRow.cook_status);
    if (dbRow.country) row.country = Country.fromDbRow(dbRow.country);

    if (dbRow.package) row.package = Package.fromDbRow(dbRow.package);

    if (dbRow.request_customers) {
      row.requestCustomerList = dbRow.request_customers.map((it) =>
        RequestCustomer.fromDbRow(it)
      );
    }
    if (dbRow.religion_status) {
      row.religionStatus = ReligionStatus.fromDbRow(dbRow.religion_status);
    }
    if (dbRow.user) row.user = User.fromDbRow(dbRow.user);
    if (dbRow.work) row.work = Work.fromDbRow(dbRow.work);
    return row;
  }
}
