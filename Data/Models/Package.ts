import { JsonKey, JsonSerializable } from "~/common/json-serialize.decorator";
import { PackageItem, Provider } from ".";
import type { IPackageAttributes } from "../Models-Row-Attributes";

@JsonSerializable()
export class Package {
  @JsonKey()
  id!: number;
  @JsonKey()
  eng_name!: string;
  @JsonKey()
  arb_name!: string;
  @JsonKey()
  is_active?: number;
  @JsonKey({
    includeToDbRow: false,
  })
  created_at?: Date;
  @JsonKey({
    includeToDbRow: false,
  })
  updated_at?: Date;
  @JsonKey()
  valid_days?: number;
  @JsonKey()
  start_date?: Date;
  @JsonKey()
  end_date?: Date;
  @JsonKey({
    type: () => PackageItem,
    name: "package_items",
    includeToDbRow: false,
  })
  // Package hasMany PackageItem via package_id
  packageItemList!: PackageItem[];

  @JsonKey({
    type: () => Provider,
    name: "providers",
    includeToDbRow: false,
  })
  providerList!: Provider[];

  //@ts-ignore
  public toDbRow(): IPackageAttributes {}
  //@ts-ignore
  public static fromDbRow(dbRow: IPackageAttributes): Package {}

  // public toDbRow(): IPackageAttributes {
  //   const row: IPackageAttributes = {};
  //   row.id = this.id;
  //   row.arb_name = this.arb_name;
  //   row.eng_name = this.eng_name;
  //   row.is_active = this.is_active;
  //   row.valid_days = this.valid_days;
  //   row.start_date = this.start_date;
  //   row.end_date = this.end_date;
  //   row.package_items = this.packageItemList.map((it) => it.toDbRow());
  //   return row;
  // }

  // public static fromDbRow(dbRow: IPackageAttributes): Package {
  //   const row: Package = new Package();
  //   row.id = dbRow.id ?? 0;
  //   row.arb_name = dbRow.arb_name ?? "";
  //   row.eng_name = dbRow.eng_name ?? "";
  //   row.is_active = dbRow.is_active;
  //   row.valid_days = dbRow.valid_days;
  //   row.start_date = dbRow.start_date;
  //   row.end_date = dbRow.end_date;
  //   row.created_at = dbRow.created_at;
  //   row.updated_at = dbRow.updated_at;
  //   if (dbRow.package_items) {
  //     row.packageItemList = dbRow.package_items.map((it) =>
  //       PackageItem.fromDbRow(it)
  //     );
  //   }

  //   if (dbRow.providers) {
  //     row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
  //   }
  //   return row;
  // }
}
