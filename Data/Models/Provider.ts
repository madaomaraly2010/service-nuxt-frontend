import { JsonKey, JsonSerializable } from "~/common/json-serialize.decorator";
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

@JsonSerializable()
export class Provider {
  @JsonKey()
  id!: number;
  @JsonKey({
    includeToDbRow: false,
  })
  created_at?: Date | undefined;
  @JsonKey({
    includeToDbRow: false,
  })
  updated_at?: Date | undefined;
  @JsonKey()
  address?: string;
  @JsonKey()
  city?: number;
  @JsonKey()
  state?: number;
  @JsonKey()
  zipcode?: string;
  @JsonKey()
  lat?: number;
  @JsonKey()
  lng?: number;
  @JsonKey()
  profile_picture?: string;
  @JsonKey()
  user_id!: number;
  @JsonKey()
  bio?: string;
  @JsonKey()
  rating?: number;
  @JsonKey()
  rent_status_id?: number;
  @JsonKey()
  country_id!: number;
  @JsonKey()
  religion_status_id?: number;
  @JsonKey()
  arabic_status_id?: number;
  @JsonKey()
  english_status_id?: number;
  @JsonKey()
  nick_name?: string;
  @JsonKey()
  net_salary?: number;
  @JsonKey()
  wage_per_month?: number;
  @JsonKey()
  card_number?: string;
  @JsonKey()
  card_expire?: Date | undefined;
  @JsonKey()
  passport_number?: string;
  @JsonKey()
  passport_expire?: Date | undefined;
  @JsonKey()
  experience_date?: Date | undefined;
  @JsonKey()
  max_children?: number;
  @JsonKey()
  child_status_id?: number;
  @JsonKey()
  license_number?: string;
  @JsonKey()
  license_expiry?: Date | undefined;
  @JsonKey()
  work_id!: number;
  @JsonKey()
  package_id?: number;
  @JsonKey()
  cook_status_id?: number;
  @JsonKey()
  notes?: string;
  @JsonKey()
  gender?: number;
  @JsonKey()
  date_birth?: Date;
  @JsonKey()
  phone?: string;
  @JsonKey()

  // Provider belongsTo ChildStatus via child_status
  @JsonKey({
    type: () => ChildStatus,
    name: "child_status",
    includeToDbRow: false,
  })
  childStatus?: ChildStatus;
  // Provider belongsTo CookStatus via cook_status
  @JsonKey({
    type: () => CookStatus,
    name: "cook_status",
    includeToDbRow: false,
  })
  cookStatus?: CookStatus;
  // Provider belongsTo Country via country_id
  @JsonKey({
    type: () => Country,
    includeToDbRow: false,
  })
  country?: Country;
  // Provider belongsTo LangStatus via arabic_status
  @JsonKey({
    type: () => LangStatus,
    name: "arabic_status",
    includeToDbRow: false,
  })
  arabicStatus?: LangStatus;
  // Provider belongsTo LangStatus via english_status
  @JsonKey({
    type: () => LangStatus,
    name: "english_status",
    includeToDbRow: false,
  })
  englishStatus?: LangStatus;
  @JsonKey({
    type: () => Package,
    includeToDbRow: false,
  })
  package?: Package;

  // Provider hasMany RequestCustomer via provider_id
  @JsonKey({
    type: () => RequestCustomer,
    name: "request_customers",
    includeToDbRow: false,
  })
  requestCustomerList!: RequestCustomer[];

  // Provider belongsTo ReligionStatus via religion_status
  @JsonKey({
    type: () => ReligionStatus,
    name: "religion_status",
    includeToDbRow: false,
  })
  religionStatus!: ReligionStatus;
  // Provider belongsTo User via user_id
  @JsonKey({
    type: () => User,
    includeToDbRow: true,
  })
  user!: User;

  // Provider belongsTo WorkCategory via work_id
  @JsonKey({
    type: () => Work,
    includeToDbRow: false,
  })
  work!: Work;

  public static create(workId?: number): Provider {
    const newProvider = new Provider();
    newProvider.work_id = workId ?? 0;
    newProvider.user = new User();
    return newProvider;
  }
  //@ts-ignore
  public toDbRow(): Partial<IProviderAttributes> {}
  //@ts-ignore
  public static fromDbRow(dbRow: IProviderAttributes): Provider {}

  // public toDbRow(): Partial<IProviderAttributes> {
  //   const row: Partial<IProviderAttributes> = {};
  //   row.id = this.id;
  //   row.wage_per_month = this.wage_per_amount;
  //   row.created_at = this.created_at;
  //   row.updated_at = this.updated_at;

  //   row.profile_picture = this.profile_picture;
  //   row.user_id = this.user_id;
  //   row.bio = this.bio;
  //   row.rating = this.rating;
  //   row.rent_status_id = this.rent_status_id;
  //   row.country_id = this.country_id;
  //   row.religion_status_id = this.religion_status_id;
  //   row.arabic_status_id = this.arabic_status_id;
  //   row.english_status_id = this.english_status_id;
  //   row.nick_name = this.nick_name;
  //   row.net_salary = this.net_salary;
  //   row.wage_per_month = this.wage_per_amount;
  //   row.card_number = this.card_number;
  //   row.card_expire = this.card_expire;
  //   row.passport_number = this.passport_number;
  //   row.passport_expire = this.passport_expire;
  //   row.experience_date = this.experience_date;
  //   row.max_children = this.max_children;
  //   row.child_status_id = this.child_status_id;
  //   row.license_number = this.license_number;
  //   row.license_expiry = this.license_expiry;
  //   row.work_id = this.work_id;
  //   row.package_id = this.package_id;
  //   row.cook_status_id = this.cook_status_id;
  //   row.notes = this.notes;
  //   row.gender = this.gender;
  //   row.phone = this.phone;
  //   row.date_birth = this.date_birth;
  //   return row;
  // }

  // public static fromDbRow(dbRow: IProviderAttributes): Provider {
  //   const row: Provider = new Provider();
  //   row.id = dbRow.id ?? 0;

  //   row.wage_per_amount = dbRow.wage_per_month;
  //   row.created_at = dbRow.created_at;
  //   row.updated_at = dbRow.updated_at;

  //   row.profile_picture = dbRow.profile_picture;
  //   row.user_id = dbRow.user_id;
  //   row.bio = dbRow.bio;
  //   row.rating = dbRow.rating;
  //   row.rent_status_id = dbRow.rent_status_id;
  //   row.country_id = dbRow.country_id ?? 0;
  //   row.religion_status_id = dbRow.religion_status_id;
  //   row.arabic_status_id = dbRow.arabic_status_id;
  //   row.english_status_id = dbRow.english_status_id;
  //   row.nick_name = dbRow.nick_name;
  //   row.net_salary = dbRow.net_salary;
  //   row.wage_per_amount = dbRow.wage_per_month;
  //   row.card_number = dbRow.card_number;
  //   row.card_expire = dbRow.card_expire;
  //   row.passport_number = dbRow.passport_number;
  //   row.passport_expire = dbRow.passport_expire;
  //   row.experience_date = dbRow.experience_date;
  //   row.max_children = dbRow.max_children;
  //   row.child_status_id = dbRow.child_status_id;
  //   row.license_number = dbRow.license_number ?? "";
  //   row.license_expiry = dbRow.license_expiry;
  //   row.work_id = dbRow.work_id ?? 0;
  //   row.package_id = dbRow.package_id;
  //   row.cook_status_id = dbRow.cook_status_id;
  //   row.notes = dbRow.notes;
  //   row.gender = dbRow.gender;
  //   row.date_birth = dbRow.date_birth;
  //   row.phone = dbRow.phone;
  //   if (dbRow.arabic_status) {
  //     row.arabicStatus = LangStatus.fromDbRow(dbRow.arabic_status);
  //   }
  //   if (dbRow.english_status) {
  //     row.englishStatus = LangStatus.fromDbRow(dbRow.english_status);
  //   }
  //   if (dbRow.child_status)
  //     row.childStatus = ChildStatus.fromDbRow(dbRow.child_status);
  //   if (dbRow.cook_status)
  //     row.cookStatus = CookStatus.fromDbRow(dbRow.cook_status);
  //   if (dbRow.country) row.country = Country.fromDbRow(dbRow.country);

  //   if (dbRow.package) row.package = Package.fromDbRow(dbRow.package);

  //   if (dbRow.request_customers) {
  //     row.requestCustomerList = dbRow.request_customers.map((it) =>
  //       RequestCustomer.fromDbRow(it)
  //     );
  //   }
  //   if (dbRow.religion_status) {
  //     row.religionStatus = ReligionStatus.fromDbRow(dbRow.religion_status);
  //   }
  //   if (dbRow.user) row.user = User.fromDbRow(dbRow.user);
  //   if (dbRow.work) row.work = Work.fromDbRow(dbRow.work);
  //   return row;
  // }
}
