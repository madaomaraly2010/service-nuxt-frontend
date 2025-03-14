import { Provider, RequestPayment, User } from ".";
import type { IRequestCustomerAttributes } from "../Models-Row-Attributes";
import { RequestAttach } from "./RequestAttach";
export class RequestCustomer {
  id!: number;
  user_id?: number;
  request_date?: Date;
  request_status?: number;
  payment_id?: number;
  created_at?: Date;
  updated_at?: Date;
  provider_id?: number;
  wage_amount?: number;
  month_number?: number;
  package_id?: number;
  // RequestCustomer belongsTo Provider via provider_id
  provider?: Provider;

  // RequestCustomer hasMany RequestPayment via request_id
  requestPaymentList?: RequestPayment[];

  attaches?: RequestAttach[];

  // RequestCustomer belongsTo User via user_id
  user?: User;

  public toDbRow(): IRequestCustomerAttributes {
    let row: IRequestCustomerAttributes = {};
    row.id = this.id;
    row.user_id = this.user_id;
    row.request_date = this.request_date;
    row.request_status = this.request_status;
    row.payment_id = this.payment_id;
    row.provider_id = this.provider_id;
    row.wage_amount = this.wage_amount;
    row.package_id = this.package_id;
    return row;
  }

  public static fromDbRow(dbRow: IRequestCustomerAttributes): RequestCustomer {
    let row: RequestCustomer = new RequestCustomer();
    row.id = dbRow.id ?? 0;
    row.user_id = dbRow.user_id ?? 0;
    row.request_date = dbRow.request_date;
    row.request_status = dbRow.request_status;
    row.payment_id = dbRow.payment_id;
    row.created_at = dbRow.created_at;
    row.updated_at = dbRow.updated_at;
    row.provider_id = dbRow.provider_id ?? 0;
    row.wage_amount = dbRow.wage_amount ?? 0;
    row.package_id = dbRow.package_id;

    if (dbRow.provider) {
      row.provider = Provider.fromDbRow(dbRow.provider);
    }
    if (dbRow.user) {
      row.user = User.fromDbRow(dbRow.user);
    }
    if (dbRow.request_payments) {
      row.requestPaymentList = dbRow.request_payments.map((it) =>
        RequestPayment.fromDbRow(it)
      );
    }

    if (dbRow.attaches) {
      row.attaches = dbRow.attaches.map((it) => RequestAttach.fromDbRow(it));
    }
    return row;
  }
}
