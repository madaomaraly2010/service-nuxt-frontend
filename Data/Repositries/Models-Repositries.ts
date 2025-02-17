import type {
  ChildStatus,
  CookStatus,
  Country,
  Package,
  PackageItem,
  Provider,
  ReligionStatus,
  RentStatus,
  RequestCustomer,
  RequestPayment,
  User,
  Work,
  WorkCategory,
} from "../Models";
import type { LangStatus } from "../Models/LangStatus";
import type { IRepositry } from "./IRepositry";

export interface ICountryRepositry extends IRepositry<Country> {}

export interface IUserRepositry extends IRepositry<User> {
  //   getAllUser(): User[];
}

export interface IProviderRepositry extends IRepositry<Provider> {
  getByCountry(countryId: number): Promise<Provider[]>;
  getByWork(workId: number): Promise<Provider[]>;
}

export interface IWorkRepositry extends IRepositry<Work> {}

export interface IWorkCategoryRepositry extends IRepositry<WorkCategory> {}

export interface IPackageRepositry extends IRepositry<Package> {}

export interface IPackageItemRepositry extends IRepositry<PackageItem> {}

export interface IRequestCustomerRepositry
  extends IRepositry<RequestCustomer> {}

export interface IRequestPaymentRepositry extends IRepositry<RequestPayment> {}

export interface ICookStatusRepositry extends IRepositry<CookStatus> {}

export interface ILangStatusRepositry extends IRepositry<LangStatus> {}

export interface IChildStatusRepositry extends IRepositry<ChildStatus> {}

export interface IReligionStatusRepositry extends IRepositry<ReligionStatus> {}

export interface IRentStatusRepositry extends IRepositry<RentStatus> {}
