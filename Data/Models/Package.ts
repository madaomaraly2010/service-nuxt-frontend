import { PackageItem, Provider } from ".";
import type { IPackageAttributes } from "../Models-Row-Attributes";

export class Package {
  id!: number;
  eng_name!: string;
  arb_name!: string;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;
  wage_per_month?: number;

  // Package hasMany PackageItem via package_id
  packageItemList!: PackageItem[];
  providerList!: Provider[];

  public toDbRow(): IPackageAttributes {
    const row: IPackageAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    row.is_active = this.is_active;
    row.wage_per_month = this.wage_per_month;
    row.package_items = this.packageItemList.map((it) => it.toDbRow());
    return row;
  }

  public static fromDbRow(dbRow: IPackageAttributes): Package {
    const row: Package = new Package();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name ?? "";
    row.eng_name = dbRow.eng_name ?? "";
    row.is_active = dbRow.is_active;
    row.wage_per_month = dbRow.wage_per_month;
    row.created_at = dbRow.created_at;
    row.updated_at = dbRow.updated_at;
    if (dbRow.package_items) {
      row.packageItemList = dbRow.package_items.map((it) =>
        PackageItem.fromDbRow(it)
      );
    }

    if (dbRow.providers) {
      row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
    }
    return row;
  }
}
