import type { Provider, Work } from ".";
import type { IWorkCategoryAttributes } from "../Models-Row-Attributes";

export class WorkCategory {
  id!: number;
  arb_name!: string | undefined;
  eng_name!: string | undefined;
  // WorkCategory hasMany Provider via work_id
  providers!: Provider[];
  works!: Work[];

  public toDbRow(): IWorkCategoryAttributes {
    let row: IWorkCategoryAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: IWorkCategoryAttributes): WorkCategory {
    let row: WorkCategory = new WorkCategory();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    return row;
  }
}
