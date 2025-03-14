import { RequestCustomer } from ".";
import type { IRequestAttachAttributes } from "../Models-Row-Attributes";

export class RequestAttach {
  id!: number;
  created_at?: Date;
  file_path?: string;
  file_name?: string;
  file_type?: string;
  uploaded_at?: Date;
  request_id?: number;
  request?: RequestCustomer
  public toDbRow(): IRequestAttachAttributes {
    let row: IRequestAttachAttributes = {};
    row.id = this.id;
    row.file_name = this.file_name;
    row.file_path = this.file_path;
    row.file_type = this.file_type;
    row.request_id = this.request_id;
    row.uploaded_at = this.uploaded_at;

    return row;
  }

  public static fromDbRow(dbRow: IRequestAttachAttributes): RequestAttach {
    let row: RequestAttach = new RequestAttach();
    row.id = dbRow.id ?? 0;
    row.file_name = dbRow.file_name;
    row.file_path = dbRow.file_path;
    row.file_type = dbRow.file_type;
    row.request_id = dbRow.request_id;
    row.uploaded_at = dbRow.uploaded_at;
    if(dbRow.request){
      row.request = RequestCustomer.fromDbRow(dbRow.request);
    }
    return row;
  }
}
