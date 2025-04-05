import type { IChildStatusAttributes } from "../Models-Row-Attributes";

export class ChildStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;
  public toDbRow(): IChildStatusAttributes {
    const row: IChildStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IChildStatusAttributes): ChildStatus {
    const row: ChildStatus = new ChildStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    return row;
  }
}
