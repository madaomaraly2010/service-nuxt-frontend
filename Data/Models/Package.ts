import type { PackageItem, Provider } from ".";


export class Package  {
  id!: number;
  eng_name!: string;
  arb_name!: string;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;

  // Package hasMany PackageItem via package_id
  packageItems!: PackageItem[];
  
  
  providers!: Provider[];
  



  public  toJson():string {
    return JSON.stringify({
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name,
      flag_url : this.flag_url,
      iso_code : this.iso_code,
      created_at : this.created_at,
      updated_at : this.updated_at,
    })
}

public static fromJson(json:any):Package {
let row:Package = new Package();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
 row.is_active = json.is_active
 row.created_at = json.created_at
 row.updated_at = json.updated_at
 row.providers = 
return row;
}


}
