import type { Provider } from "./Provider";

export class CookStatus  {
  id!: number;
  arb_name?: string;
  eng_name?: string;

  // CookStatus hasMany Provider via cook_status
  providers!: Provider[];
  
  public  toJson():string {
    return JSON.stringify({
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name
    })
}

public static fromJson(json:any):CookStatus {
let row:CookStatus = new CookStatus();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
return row;
}
}
