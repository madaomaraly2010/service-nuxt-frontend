import { JsonKey, JsonSerializable } from "~/common/json-serialize.decorator";
import { Provider, WorkCategory } from ".";
import type { IWorkAttributes } from "../Models-Row-Attributes";

@JsonSerializable()
export class Work {
  @JsonKey()
  id!: number;
  @JsonKey()
  arb_name!: string | undefined;
  @JsonKey()
  eng_name!: string | undefined;
  @JsonKey()
  work_category_id!: number | undefined;
  @JsonKey()
  image_url?: string;
  @JsonKey()
  icon?: string;

  @JsonKey({
    type: () => WorkCategory,
    name: "work_category",
    includeToDbRow: false,
  })
  workCategory?: WorkCategory;
  @JsonKey({
    type: () => Provider,
    name: "providers",
    includeToDbRow: false,
  })
  providerList?: Provider[];
  //@ts-ignore
  public toDbRow(): IWorkAttributes {
    //====will be overriden by the decorator
  }

  //@ts-ignore
  public static fromDbRow(dbRow: IWorkAttributes): Work {
    //====will be overriden by the decorator
  }

  // public toDbRow(): IWorkAttributes {
  //   const row: IWorkAttributes = {};
  //   row.id = this.id;
  //   row.arb_name = this.arb_name;
  //   row.eng_name = this.eng_name;
  //   row.image_url = this.image_url;
  //   row.icon = this.icon;
  //   return row;
  // }
  public static callStaticMethod() {
    window.alert("OK Reflection");
  }
  // public static fromDbRow(dbRow: IWorkAttributes): Work {
  //   const row: Work = new Work();
  //   row.id = dbRow.id ?? 0;
  //   row.arb_name = dbRow.arb_name;
  //   row.eng_name = dbRow.eng_name;
  //   row.image_url = dbRow.image_url;
  //   row.icon = dbRow.icon;
  //   if (dbRow.providers) {
  //     row.providerList = dbRow.providers.map((it) => Provider.fromDbRow(it));
  //   }
  //   if (dbRow.work_category) {
  //     row.workCategory = WorkCategory.fromDbRow(dbRow.work_category);
  //   }
  //   return row;
  // }
}
