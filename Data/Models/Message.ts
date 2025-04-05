import { RequestCustomer } from ".";
import type { IMessageAttributes } from "../Models-Row-Attributes";

export class Message {
  id!: number;
  created_at?: Date;
  title?: string;
  description?: string;
  row?: object;
  read?: number;
  type?: number;

  public toDbRow(): IMessageAttributes {
    const row: IMessageAttributes = {};
    row.id = this.id;

    row.created_at = this.created_at;
    row.description = this.description;
    row.title = this.title;
    row.row = this.row;
    row.type = this.type;
    return row;
  }
  public static callStaticMethod() {
    window.alert("OK Reflection");
  }
  public static fromDbRow(dbRow: IMessageAttributes): Message {
    const row: Message = new Message();
    row.id = dbRow.id ?? 0;
    row.created_at = dbRow.created_at;
    row.description = dbRow.description;
    row.title = dbRow.title;
    row.row = dbRow.row;
    if (dbRow.row && dbRow.type == 1) {
      row.row = RequestCustomer.fromDbRow(dbRow.row);
    }
    return row;
  }
}
