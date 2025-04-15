import { JsonKey, Serializable } from "~/common/json-serialize.decorator";
import {
  PackageItem,
  Provider,
  RequestPayment,
  RequestStatus,
  User,
  Work,
} from ".";
import type { IRequestCustomerAttributes } from "../Models-Row-Attributes";
import { RequestAttach } from "./RequestAttach";
@Serializable()
export class RequestCustomer {
  @JsonKey()
  id!: number;
  @JsonKey()
  user_id?: number;
  @JsonKey()
  request_date?: Date;
  @JsonKey()
  request_status_id?: number;
  @JsonKey()
  payment_id?: number;
  @JsonKey()
  created_at?: Date;
  @JsonKey()
  updated_at?: Date;
  @JsonKey()
  provider_id?: number;
  @JsonKey()
  work_id?: number;
  @JsonKey()
  wage_amount?: number;
  @JsonKey()
  month_number?: number;
  @JsonKey()
  down_payment?: number;
  @JsonKey()
  payment_method?: number;
  @JsonKey()
  total_before_discount?: number;
  @JsonKey()
  package_item_id?: number;
  // RequestCustomer belongsTo Provider via provider_id
  @JsonKey({
    type: () => Provider,
    includeToDbRow: false,
  })
  provider?: Provider;

  @JsonKey({
    type: () => Work,
    includeToDbRow: false,
  })
  work?: Work;

  // RequestCustomer hasMany RequestPayment via request_id
  @JsonKey({
    type: () => RequestPayment,
    name: "request_payments",
    includeToDbRow: false,
  })
  requestPaymentList?: RequestPayment[];

  @JsonKey({
    type: () => RequestAttach,
    includeToDbRow: false,
  })
  attaches?: RequestAttach[];

  @JsonKey({
    type: () => PackageItem,
    name: "package_item",
    includeToDbRow: false,
  })
  packageItem?: PackageItem;

  @JsonKey({
    type: () => RequestStatus,
    name: "request_status",
    includeToDbRow: false,
  })
  status?: RequestStatus;

  // RequestCustomer belongsTo User via user_id
  @JsonKey({
    type: () => User,
    includeToDbRow: false,
  })
  user?: User;

  @JsonKey({
    ignore: true,
  })
  get discountPercent(): number {
    if (this.total == 0) return 0; // Avoid division by zero
    return ((this.total! - this.discountedPrice!) / this.total!) * 100;
  }

  @JsonKey({
    ignore: true,
  })
  get discountValue(): number {
    if (this.total == 0) return 0; // Avoid division by zero
    return (this.total ?? 0) - (this.discountedPrice ?? 0);
  }

  @JsonKey({
    ignore: true,
  })
  get discountedPrice(): number {
    return this.wage_amount ?? 0;
  }

  @JsonKey({
    ignore: true,
  })
  get total(): number {
    return this.total_before_discount ?? 0;
  }
  //@ts-ignore
  public toDbRow(): IRequestCustomerAttributes {}
  //@ts-ignore
  public static fromDbRow(dbRow: IRequestCustomerAttributes): RequestCustomer {}

  // public toDbRow(): IRequestCustomerAttributes {
  //   const row: IRequestCustomerAttributes = {};
  //   row.id = this.id;
  //   row.user_id = this.user_id;
  //   row.request_date = this.request_date;
  //   row.request_status_id = this.request_status_id;
  //   row.payment_id = this.payment_id;
  //   row.provider_id = this.provider_id;
  //   row.work_id = this.work_id;
  //   row.total_before_discount = this.total_before_discount;
  //   row.wage_amount = this.wage_amount;
  //   row.month_number = this.month_number;
  //   row.down_payment = this.down_payment;
  //   row.payment_method = this.payment_method;
  //   row.package_item_id = this.package_item_id;
  //   return row;
  // }

  // public static fromDbRow(dbRow: IRequestCustomerAttributes): RequestCustomer {
  //   const row: RequestCustomer = new RequestCustomer();
  //   row.id = dbRow.id ?? 0;
  //   row.user_id = dbRow.user_id ?? 0;
  //   row.request_date = dbRow.request_date;
  //   row.request_status_id = dbRow.request_status_id;
  //   row.payment_id = dbRow.payment_id;
  //   row.created_at = dbRow.created_at;
  //   row.updated_at = dbRow.updated_at;
  //   row.provider_id = dbRow.provider_id ?? 0;
  //   row.work_id = dbRow.work_id ?? 0;

  //   row.month_number = dbRow.month_number;

  //   row.wage_amount = dbRow.wage_amount ?? 0;
  //   row.total_before_discount = dbRow.total_before_discount;
  //   row.down_payment = dbRow.down_payment;
  //   row.payment_method = dbRow.payment_method;
  //   row.package_item_id = dbRow.package_item_id;

  //   if (dbRow.provider) {
  //     row.provider = Provider.fromDbRow(dbRow.provider);
  //   }

  //   if (dbRow.work) {
  //     row.work = Work.fromDbRow(dbRow.work);
  //   }

  //   if (dbRow.user) {
  //     row.user = User.fromDbRow(dbRow.user);
  //   }
  //   if (dbRow.package_item) {
  //     row.packageItem = PackageItem.fromDbRow(dbRow.package_item);
  //   }
  //   if (dbRow.request_payments) {
  //     row.requestPaymentList = dbRow.request_payments.map((it) =>
  //       RequestPayment.fromDbRow(it)
  //     );
  //   }

  //   if (dbRow.attaches) {
  //     row.attaches = dbRow.attaches.map((it) => RequestAttach.fromDbRow(it));
  //   }

  //   if (dbRow.request_status) {
  //     row.status = RequestStatus.fromDbRow(dbRow.request_status);
  //   }

  //   return row;
  // }
}
