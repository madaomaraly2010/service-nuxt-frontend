import type { Package } from ".";


export class PackageItem  {
  id!: number;
  package_id!: number;
  created_at?: Date;
  updated_at?: Date;
  month_number!: number;
  wage_amount!: number;
  arb_name!: string;
  eng_name!: string;

  // PackageItem belongsTo Package via package_id
  package!: Package;
  

}
