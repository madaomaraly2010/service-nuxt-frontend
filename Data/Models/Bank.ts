import type { IBankAttributes } from "../Models-Row-Attributes";

export class Bank {
  id!: number;
  bank_name?: string;
  bank_account?: string;
  public toDbRow(): IBankAttributes {
    const row: IBankAttributes = {};
    row.id = this.id;
    row.bank_name = this.bank_name;
    row.bank_account = this.bank_account;
    return row;
  }

  public static fromDbRow(dbRow: IBankAttributes): Bank {
    const row: Bank = new Bank();
    row.id = dbRow.id ?? 0;
    row.bank_name = dbRow.bank_name;
    row.bank_account = dbRow.bank_account;
    return row;
  }
}
