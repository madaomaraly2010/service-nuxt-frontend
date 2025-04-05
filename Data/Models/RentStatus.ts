import type { IRentStatusAttributes } from "../Models-Row-Attributes";

export class RentStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;

  public toDbRow(): IRentStatusAttributes {
    const row: IRentStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IRentStatusAttributes): RentStatus {
    const row: RentStatus = new RentStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;

    return row;
  }
}
