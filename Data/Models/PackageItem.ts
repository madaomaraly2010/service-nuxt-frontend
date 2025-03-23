import { Package } from ".";
import type { IPackageItemAttributes } from "../Models-Row-Attributes";

export class PackageItem {
  id!: number;
  package_id!: number;
  created_at?: Date;
  updated_at?: Date;
  month_number!: number;
  wage_amount!: number;
  arb_name!: string;
  eng_name!: string;
  down_payment_percent?: number;

  // PackageItem belongsTo Package via package_id
  package!: Package;

  public toDbRow(): IPackageItemAttributes {
    let row: IPackageItemAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    row.month_number = this.month_number;
    row.wage_amount = this.wage_amount;
    row.package_id = this.package_id;
    row.down_payment_percent = this.down_payment_percent;

    return row;
  }

  public static fromDbRow(dbRow: IPackageItemAttributes): PackageItem {
    let row: PackageItem = new PackageItem();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name ?? "";
    row.eng_name = dbRow.eng_name ?? "";
    row.month_number = dbRow.month_number ?? -1;
    row.wage_amount = dbRow.wage_amount ?? 0;
    row.created_at = dbRow.created_at;
    row.updated_at = dbRow.updated_at;
    row.down_payment_percent = dbRow.down_payment_percent;
    if (dbRow.package) {
      row.package = Package.fromDbRow(dbRow.package);
    }
    return row;
  }
}
