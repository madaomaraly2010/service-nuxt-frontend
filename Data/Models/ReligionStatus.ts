import type { IReligionStatusAttributes } from "../Models-Row-Attributes";
import { Provider } from "./Provider";
export class ReligionStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;

  // ReligionStatus hasMany Provider via religion_status
  providerList!: Provider[];
  public toDbRow(): IReligionStatusAttributes {
    let row: IReligionStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IReligionStatusAttributes): ReligionStatus {
    let row: ReligionStatus = new ReligionStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.providers) {
      row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
    }
    return row;
  }
}
