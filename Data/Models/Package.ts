import type { PackageItem, Provider } from ".";
import type { IPackageAttributes } from "../Models-Row-Attributes";


export class Package  {
  id!: number;
  eng_name!: string;
  arb_name!: string;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;

  // Package hasMany PackageItem via package_id
  packageItemList!: PackageItem[];
  providerList!: Provider[];

  public  toDbRow():Package {
    return {
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name,
      created_at : this.created_at,
      updated_at : this.updated_at
    }
  
}

public static fromDbRow(dbRow:IPackageAttributes):Package {
let row:Package = new Package();
 row.id = dbRow.id
 row.arb_name = dbRow.arb_name
 row.eng_name = dbRow.eng_name
 row.is_active = dbRow.is_active
 row.created_at = dbRow.created_at
 row.updated_at = dbRow.updated_at
 if(dbRow.package_items)
     row.packageItemList = dbRow.package_items.map(it=>PackageItem.fromDbRow(it))
return row;
}


}
