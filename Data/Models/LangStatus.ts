import { Provider } from ".";
import type { ILangStatusAttributes } from "../Models-Row-Attributes";
export class LangStatus {
  id!: number;
  arb_name?: string;
  eng_name?: string;
  // LangStatus hasMany Provider via arabic_status
  arabicProviderList!: Provider[];
  englishProviderList!: Provider[];

  public toDbRow(): ILangStatusAttributes {
    let row: ILangStatusAttributes = {};
    row.id = this.id;
    row.arb_name = this.arb_name;
    row.eng_name = this.eng_name;
    return row;
  }

  public static fromDbRow(dbRow: ILangStatusAttributes): LangStatus {
    let row: LangStatus = new LangStatus();
    row.id = dbRow.id ?? 0;
    row.arb_name = dbRow.arb_name;
    row.eng_name = dbRow.eng_name;
    if (dbRow.arabic_status_providers) {
      row.arabicProviderList = dbRow.arabic_status_providers.map((it) =>
        Provider.fromDbRow(it)
      );
    }
    if (dbRow.english_status_providers) {
      row.englishProviderList = dbRow.english_status_providers.map((it) =>
        Provider.fromDbRow(it)
      );
    }
    return row;
  }
}
