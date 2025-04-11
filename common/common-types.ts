import type { RequestCustomer } from "~/Data/Models";

export type TableActionType = "Add" | "Edit" | "Delete";

export interface IBaseFormProps {
  // onSave?: () => Promise<ModelResponse<ModelType>>;
  dialogRef?: Ref<any>;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
  saveLoading?: boolean;
}

export interface IRequestDetailsFormProps extends IBaseFormProps {
  requestCustomer: RequestCustomer;
}

export interface ILoginFormProps extends IBaseFormProps {}
