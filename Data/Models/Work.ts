import { Provider, WorkCategory } from ".";
import type { IWorkAttributes } from "../Models-Row-Attributes";

export class Work {
  id!: number;
  arb_name!: string | undefined;
  eng_name!: string | undefined;
  work_category_id!: number | undefined;
  workCategory?: WorkCategory;
  providerList?: Provider[];

  public toDbRow(): IWorkAttributes {
    let row: IWorkAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IWorkAttributes): Work {
    let row: Work = new Work();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.providers) {
      row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
    }
    if (dbRow.work_category) {
      row.workCategory = WorkCategory.fromDbRow(dbRow.work_category);
    }
    return row;
  }
}
