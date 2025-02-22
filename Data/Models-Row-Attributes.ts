import type { Package } from "./Models";

export interface IChildStatusAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  providers?: IProviderAttributes[];
}

export interface ICookStatusAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  providers?: IProviderAttributes[];
}

export interface ILangStatusAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  arabic_status_providers?: IProviderAttributes[];
  english_status_providers?: IProviderAttributes[];
}

export interface IReligionStatusAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  providers?: IProviderAttributes[];
}

export interface IRentStatusAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  providers?: IProviderAttributes[];
}

export interface ICountryAttributes {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  eng_name?: string;
  flag_url?: string;
  iso_code?: string;
  arb_name?: string;
  providers?: IProviderAttributes[];
}

export interface IPackageAttributes {
  id?: number;
  eng_name?: string;
  arb_name?: string;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;
  package_items?: IPackageItemAttributes[];
  providers?: IProviderAttributes[];
}
export interface IPackageItemAttributes {
  id?: number;
  package_id?: number;
  created_at?: Date;
  updated_at?: Date;
  month_number?: number;
  wage_amount?: number;
  arb_name?: string;
  eng_name?: string;

  package?: IPackageAttributes;
}

export interface IProviderAttributes {
  id?: number;
  created_at?: Date;
  updated_at?: Date;
  address?: string;
  city?: number;
  state?: number;
  zipcode?: string;
  lat?: number;
  lng?: number;
  profile_picture?: string;
  user_id: number;
  bio?: string;
  rating?: number;
  rent_status_id?: number;
  country_id?: number;
  religion_status_id?: number;
  arabic_status_id?: number;
  english_status_id?: number;
  nick_name?: string;
  net_salary?: number;
  wage_amount?: number;
  card_number?: string;
  card_expire?: Date;
  passport_number?: string;
  passport_expire?: Date;
  experience_date?: Date;
  max_children?: number;
  child_status_id?: number;
  license_number?: string;
  license_expiry?: Date;
  work_id?: number;
  package_id?: number;
  cook_status_id?: number;
  notes?: string;
  gender?: number;
  date_birth?: Date;
  phone?: string;

  child_status?: IChildStatusAttributes;
  cook_status?: ICookStatusAttributes;
  country?: ICountryAttributes;
  arabic_status?: ILangStatusAttributes;
  english_status?: ILangStatusAttributes;
  package?: IPackageAttributes;
  request_customers?: IRequestCustomerAttributes[];
  religion_status?: IReligionStatusAttributes;
  user?: IUserAttributes;
  work?: IWorkAttributes;
}

export interface IRequestCustomerAttributes {
  id?: number;
  user_id?: number;
  request_date?: Date;
  request_status?: number;
  payment_id?: number;
  created_at?: Date;
  updated_at?: Date;
  provider_id?: number;
  wage_amount?: number;
  package_id?: number;
  provider?: IProviderAttributes;
  request_payments?: IRequestPaymentAttributes[];
  user?: IUserAttributes;
}

export interface IRequestPaymentAttributes {
  id?: number;
  request_customer_id?: number;
  user_id?: number;
  amount?: number;
  currency?: number;
  payment_method?: string;
  payment_status?: number;
  transaction_id?: string;
  created_at?: Date;
  request_customer?: IRequestCustomerAttributes;
}

export interface IUserAttributes {
  id?: number;
  username?: string;
  email?: string;
  password_hash?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  first_name?: string;
  last_name?: string;
  mobile?: string;

  provider?: IProviderAttributes;
  request_customers?: IRequestCustomerAttributes[];
}

export interface IWorkAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  work_category_id?: number;
  image_url?: string;
  icon?: string;
  providers?: IProviderAttributes[];
  work_category?: IWorkCategoryAttributes;
}

export interface IWorkCategoryAttributes {
  id?: number;
  arb_name?: string;
  eng_name?: string;
  image_url?: string;
  icon?: string;
  works?: IWorkAttributes[];
}
