import type { ISettingAttributes } from "../Models-Row-Attributes";

export class Setting {
  id!: number;
  created_at?: Date;
  auto_cancel_request?: number;
  max_hour?: number;
  payment_method?: number;
  down_payment_percent?: number;
  public toDbRow(): ISettingAttributes {
    const row: ISettingAttributes = {};
    row.id = this.id;
    row.auto_cancel_request = this.auto_cancel_request;
    row.max_hour = this.max_hour;
    row.payment_method = this.payment_method;
    row.down_payment_percent = this.down_payment_percent;
    return row;
  }

  public static fromDbRow(dbRow: ISettingAttributes): Setting {
    const row: Setting = new Setting();
    row.id = dbRow.id ?? 0;
    row.auto_cancel_request = dbRow.auto_cancel_request;
    row.max_hour = dbRow.max_hour;
    row.payment_method = dbRow.payment_method;
    row.down_payment_percent = dbRow.down_payment_percent;
    return row;
  }
}
