import { RequestCustomer } from ".";
import type { IRequestPaymentAttributes } from "../Models-Row-Attributes";

export class RequestPayment {
  id!: number;
  request_customer_id!: number | undefined;
  user_id!: number | undefined;
  amount!: number | undefined;
  currency?: number;
  payment_method!: string | undefined;
  payment_status?: number;
  transaction_id!: string | undefined;
  created_at?: Date;

  // RequestPayment belongsTo RequestCustomer via request_id
  requestCustomer!: RequestCustomer;

  public toDbRow(): IRequestPaymentAttributes {
    let row: IRequestPaymentAttributes = {};
    row.id = this.id;
    row.request_customer_id = this.request_customer_id;
    row.user_id = this.user_id;
    row.amount = this.amount;
    row.currency = this.currency;
    row.payment_method = this.payment_method;
    row.payment_status = this.payment_status;
    row.transaction_id = this.transaction_id;
    return row;
  }

  public static fromDbRow(dbRow: IRequestPaymentAttributes): RequestPayment {
    let row: RequestPayment = new RequestPayment();
    row.id = dbRow.id ?? 0;
    row.request_customer_id = dbRow.request_customer_id;
    row.user_id = dbRow.user_id;
    row.amount = dbRow.amount;
    row.currency = dbRow.currency;
    row.payment_method = dbRow.payment_method;
    row.payment_status = dbRow.payment_status;
    row.transaction_id = dbRow.transaction_id;
    row.created_at = dbRow.created_at;
    if (dbRow.request_customer) {
      row.requestCustomer = RequestCustomer.fromDbRow(dbRow.request_customer);
    }
    return row;
  }
}
