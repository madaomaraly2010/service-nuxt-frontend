import type { ChildStatus, CookStatus, Country, Package, ReligionStatus, RequestCustomer, User, Work } from ".";
import type { LangStatus } from "./LangStatus";

export class Provider  {
  id!: number;
  created_at!: Date;
  updated_at?: Date;
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
  rent_status?: number;
  country_id!: number;
  religion_status?: number;
  arabic_status?: number;
  english_status?: number;
  nick_name?: string;
  net_salary?: number;
  wage_amount?: number;
  card_number?: string;
  card_expire?: string;
  passport_number?: string;
  passport_expire?: string;
  experience_date?: string;
  max_children?: number;
  child_status?: number;
  license_number!: string;
  license_expiry!: string;
  work_id!: number;
  package_id?: number;
  cook_status?: number;

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
  requestCustomers!: RequestCustomer[];
   
  // Provider belongsTo ReligionStatus via religion_status
  religionStatus!: ReligionStatus;
    // Provider belongsTo User via user_id
  user!: User;
  
  // Provider belongsTo WorkCategory via work_id
  work!: Work;
}
