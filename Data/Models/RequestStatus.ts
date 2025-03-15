import { RequestCustomer } from ".";
import type { IRequestStatusAttributes } from "../Models-Row-Attributes";

export class RequestStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;

  requestCustomerList?: RequestCustomer[];

  public toDbRow(): IRequestStatusAttributes {
    let row: IRequestStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IRequestStatusAttributes): RequestStatus {
    let row: RequestStatus = new RequestStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.request_customers) {
      row.requestCustomerList = dbRow.request_customers.map((it) =>
        RequestCustomer.fromDbRow(it)
      );
    }
    return row;
  }
}
