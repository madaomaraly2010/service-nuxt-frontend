export class RentStatus  {
  id!: number;
  arb_name?: string;
  eng_name?: string;


  
  public  toJson():string {
    return JSON.stringify({
      id:this.id,
      arb_name:this.arb_name,
      eng_name:this.eng_name
    })
}

public static fromJson(json:any):RentStatus {
let row:RentStatus = new RentStatus();
 row.id = json.id
 row.arb_name = json.arb_name
 row.eng_name = json.eng_name
return row;
}
}
