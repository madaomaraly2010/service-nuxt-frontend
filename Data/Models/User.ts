import type { Provider, RequestCustomer } from ".";

export class User  {
  id!: number;
  username!: string;
  email!: string;
  password_hash!: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  first_name!: string;
  last_name!: string;
  middle_name!: string;
  mobile?: string;
  DateBirth?: string;
  gender?: number;

  // User hasOne Provider via user_id
  provider!: Provider;
  
  // User hasMany RequestCustomer via user_id
  requestCustomers!: RequestCustomer[];
  
  }
