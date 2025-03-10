import {
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
import type { Message } from "../Models/Message";
import { ModelResponse } from "./ModelResponse-Class";

export class UserResponse extends ModelResponse<User> {
  isAuthenticated?: boolean = false;
}

export class ProviderResponse extends ModelResponse<Provider> {}

export class MessageResponse extends ModelResponse<Message> {}

export class PackageResponse extends ModelResponse<Package> {}

export class PackageItemResponse extends ModelResponse<PackageItem> {}

export class RequestCustomerResponse extends ModelResponse<RequestCustomer> {}

export class RequestPaymentResponse extends ModelResponse<RequestPayment> {}

export class RentStatusResponse extends ModelResponse<RentStatus> {}

export class ReligionStatusResponse extends ModelResponse<ReligionStatus> {}

export class LangStatusResponse extends ModelResponse<LangStatus> {}

export class ChildStatusResponse extends ModelResponse<ChildStatus> {}

export class CookStatusResponse extends ModelResponse<CookStatus> {}

export class CountryResponse extends ModelResponse<Country> {}

export class WorkResponse extends ModelResponse<Work> {}

export class WorkCategoryResponse extends ModelResponse<WorkCategory> {}
