import type {
  Bank,
  ChildStatus,
  CookStatus,
  Country,
  Location,
  Package,
  PackageItem,
  Provider,
  ReligionStatus,
  RentStatus,
  RequestCustomer,
  RequestPayment,
  Setting,
  User,
  Work,
  WorkCategory,
} from "../Models";
import type { City } from "../Models/City";
import type { LangStatus } from "../Models/LangStatus";
import type { Message } from "../Models/Message";
import type { RequestAttach } from "../Models/RequestAttach";
import type {
  ProviderResponse,
  UserResponse,
} from "../Responses/Model-Responses";
import type { IRepositry } from "./IRepositry";

export interface ICountryRepositry extends IRepositry<Country> {}

export interface IUserRepositry extends IRepositry<User> {
  login(username: string, password: string): Promise<UserResponse>;
}

export interface IProviderRepositry extends IRepositry<Provider> {
  getByCountry(countryId: number): Promise<ProviderResponse>;
  getByWork(workId: number): Promise<ProviderResponse>;
}

export interface IWorkRepositry extends IRepositry<Work> {}

export interface IWorkCategoryRepositry extends IRepositry<WorkCategory> {}

export interface IPackageRepositry extends IRepositry<Package> {}

export interface IMessageRepositry extends IRepositry<Message> {}

export interface IPackageItemRepositry extends IRepositry<PackageItem> {}

export interface IRequestCustomerRepositry
  extends IRepositry<RequestCustomer> {}

export interface IRequestPaymentRepositry extends IRepositry<RequestPayment> {}

export interface ICookStatusRepositry extends IRepositry<CookStatus> {}

export interface ILangStatusRepositry extends IRepositry<LangStatus> {}

export interface IChildStatusRepositry extends IRepositry<ChildStatus> {}

export interface IReligionStatusRepositry extends IRepositry<ReligionStatus> {}

export interface IRentStatusRepositry extends IRepositry<RentStatus> {}

export interface IBankRepositry extends IRepositry<Bank> {}
export interface ISettingRepositry extends IRepositry<Setting> {}
export interface ILocationRepositry extends IRepositry<Location> {}

export interface ICityRepositry extends IRepositry<City> {}

export interface IRequestAttachRepositry extends IRepositry<RequestAttach> {}
