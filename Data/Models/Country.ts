import type { Provider } from ".";



export class Country  {
  id!: number;
  created_at!: Date;
  updated_at?: Date;
  eng_name?: string;
  flag_url!: string;
  iso_code!: string;
  arb_name?: string;

  // Country hasMany Provider via country_id
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

public static fromJson(json:any):Country {
let row:Country = new Country();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
 row.flag_url = json.flag_url
 row.iso_code = json.iso_code
 row.created_at = json.created_at
 row.updated_at = json.updated_at
return row;
}


}
