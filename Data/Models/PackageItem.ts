import { JsonSerializable, JsonKey } from "~/common/json-serialize.decorator";
import { Package } from ".";
import type { IPackageItemAttributes } from "../Models-Row-Attributes";

@JsonSerializable()
export class PackageItem {
  @JsonKey()
  id!: number;
  @JsonKey()
  package_id!: number;
  @JsonKey({
    includeToDbRow: false,
  })
  created_at?: Date;
  @JsonKey({
    includeToDbRow: false,
  })
  updated_at?: Date;
  @JsonKey()
  month_number!: number;
  @JsonKey()
  discount_percent!: number;
  @JsonKey()
  arb_name!: string;
  @JsonKey()
  eng_name!: string;
  @JsonKey()
  down_payment_percent?: number;

  // PackageItem belongsTo Package via package_id
  @JsonKey({
    type: () => Package,
    name: "package",
    includeToDbRow: false,
  })
  package!: Package;

  public static create(packageId: number): PackageItem {
    let row = new PackageItem();
    row.package_id = packageId;
    return row;
  }
  // @ts-ignore
  public toDbRow(): IPackageItemAttributes {}
  // @ts-ignore
  public static fromDbRow(dbRow: IPackageItemAttributes): PackageItem {}
  // public toDbRow(): IPackageItemAttributes {
  //   const row: IPackageItemAttributes = {};
  //   row.id = this.id;
  //   row.arb_name = this.arb_name;
  //   row.eng_name = this.eng_name;
  //   row.month_number = this.month_number;
  //   row.discount_percent = this.discount_percent;
  //   row.package_id = this.package_id;
  //   row.down_payment_percent = this.down_payment_percent;

  //   return row;
  // }

  // public static fromDbRow(dbRow: IPackageItemAttributes): PackageItem {
  //   const row: PackageItem = new PackageItem();
  //   row.id = dbRow.id ?? 0;
  //   row.arb_name = dbRow.arb_name ?? "";
  //   row.eng_name = dbRow.eng_name ?? "";
  //   row.month_number = dbRow.month_number ?? -1;
  //   row.discount_percent = dbRow.discount_percent ?? 0;
  //   row.created_at = dbRow.created_at;
  //   row.updated_at = dbRow.updated_at;
  //   row.down_payment_percent = dbRow.down_payment_percent;
  //   if (dbRow.package) {
  //     row.package = Package.fromDbRow(dbRow.package);
  //   }
  //   return row;
  // }
}
