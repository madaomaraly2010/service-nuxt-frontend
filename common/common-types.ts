import type { QForm, QTableProps } from "quasar";
import type {
  Package,
  PackageItem,
  Provider,
  RequestCustomer,
} from "~/Data/Models";

export type TableActionType = "Add" | "Edit" | "Delete";

export interface IBaseFormProps {
  onSave?: () => Promise<void>;
  onPrevalidate?: (form: QForm) => Promise<boolean>;
  isNew?: boolean;
  dialogRef?: any;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
  title?: string;
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
//==============================PackageItem===============
export interface IPackageItemDialogProps extends IBaseDialogProps {
  editRow: PackageItem;
  packageRow: Package;
}

export interface IPackageItemTableProps
  extends /* @vue-ignore */ Omit<IBaseTableProps, keyof QTableProps> {
  packageRow: Package;
}

export interface IPackageItemFormProps extends IBaseFormProps {
  editRow: PackageItem;
  packageRow: Package;
}
//===============================================================
export interface IProviderDialogProps extends IBaseDialogProps {
  editRow: Provider;
}

export interface IProviderFormProps extends IBaseFormProps {
  editRow: Provider;
}
