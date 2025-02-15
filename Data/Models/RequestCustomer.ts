import type { Provider, RequestPayment, User } from ".";
export class RequestCustomer  {
  id!: number;
  user_id!: number;
  request_date?: Date;
  status?: number;
  payment_id?: number;
  created_at?: Date;
  updated_at?: Date;
  provider_id!: number;
  wage_amount!: number;
  package_id?: number;

  // RequestCustomer belongsTo Provider via provider_id
  provider!: Provider;
  
  // RequestCustomer hasMany RequestPayment via request_id
  requestPayments!: RequestPayment[];
  
  // RequestCustomer belongsTo User via user_id
  user!: User;
  

  
}
