import type { ICookStatusAttributes } from "../Models-Row-Attributes";
import { Provider } from "./Provider";

export class CookStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;

  // CookStatus hasMany Provider via cook_status
  providerList!: Provider[];
  public toDbRow(): ICookStatusAttributes {
    const row: ICookStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: ICookStatusAttributes): CookStatus {
    const row: CookStatus = new CookStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.providers) {
      row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
    }
    return row;
  }
}
