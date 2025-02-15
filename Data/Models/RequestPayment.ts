import type { RequestCustomer } from ".";

export class RequestPayment  {
  id!: number;
  request_id!: number;
  user_id!: number;
  amount!: number;
  currency?: number;
  payment_method!: string;
  payment_status?: number;
  transaction_id!: string;
  created_at?: Date;

  // RequestPayment belongsTo RequestCustomer via request_id
  requestCustomer!: RequestCustomer;
  

  }
