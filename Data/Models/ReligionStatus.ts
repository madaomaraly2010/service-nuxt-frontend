import type { Provider } from "./Provider";
export class ReligionStatus  {
  id!: number;
  arb_name!: string;
  eng_name?: string;

  // ReligionStatus hasMany Provider via religion_status
  providers!: Provider[];
  
  public  toJson():string {
    return JSON.stringify({
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name
    })
}

public static fromJson(json:any):ReligionStatus {
let row:ReligionStatus = new ReligionStatus();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
return row;
}
  
}
