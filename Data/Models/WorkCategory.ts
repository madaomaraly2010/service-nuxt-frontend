import type { Provider, Work } from ".";
import type { IWorkCategoryAttributes } from "../Models-Row-Attributes";

export class WorkCategory {
  id!: number;
  arb_name!: string | undefined;
  eng_name!: string | undefined;
  image_url?: string;
  icon?: string;
  providers!: Provider[];
  works!: Work[];

  public toDbRow(): IWorkCategoryAttributes {
    const row: IWorkCategoryAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    row.image_url = this.image_url;
    row.icon = this.icon;
    return row;
  }

  public static fromDbRow(dbRow: IWorkCategoryAttributes): WorkCategory {
    const row: WorkCategory = new WorkCategory();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    row.image_url = dbRow.image_url;
    row.icon = dbRow.icon;
    return row;
  }
}
