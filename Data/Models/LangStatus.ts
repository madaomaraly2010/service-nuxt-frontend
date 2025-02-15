import type { Provider } from ".";


export class LangStatus  {
  id!: number;
  arb_name?: string;
  eng_name?: string;
  // LangStatus hasMany Provider via arabic_status
  providers!: Provider[];
  // LangStatus hasMany Provider via english_status
  public  toJson():string {
    return JSON.stringify({
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name
    })
}

public static fromJson(json:any):LangStatus {
let row:LangStatus = new LangStatus();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
return row;
}
}
