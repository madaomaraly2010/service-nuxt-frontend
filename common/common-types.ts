import type { QTableProps } from "quasar";
import type { Package, RequestCustomer } from "~/Data/Models";

export type TableActionType = "Add" | "Edit" | "Delete";

export interface IBaseFormProps {
  onSave?: () => Promise<void>;
  isNew?: boolean;
  dialogRef?: any;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
}

export interface IBaseTableProps extends QTableProps {
  showActions?: boolean;
  showToolbar?: boolean;
  showCreateButton?: boolean;
}

export interface IBaseDialogProps {
  // formRef: Ref;
  title?: string;
  subtitle?: string;

  icon?: string;
  minWidth?: string;
  maxWidth?: string;

  width?: string;
  height?: string;
  maxHeight?: string;

  persistent?: boolean;
  closable?: boolean;
  transitionShow?: string;
  transitionHide?: string;
}

export interface IRequestCustomerFormProps extends IBaseFormProps {
  editRow: RequestCustomer;
}

export interface IPackageFormProps extends IBaseFormProps {
  editRow: Package;
}

export interface ILoginFormProps extends IBaseFormProps {}

export interface IRequestCustomerDialogProps extends IBaseDialogProps {
  editRow: RequestCustomer;
}

export interface IPackageDialogProps extends IBaseDialogProps {
  editRow: Package;
}
