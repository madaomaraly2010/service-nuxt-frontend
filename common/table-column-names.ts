export class WorkCategoryColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
  static image_url: string = "image_url";
  static icon: string = "icon";
}

export class MessageColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static title: string = "title";
  static description: string = "description";
  static row: string = "row";
  static read: string = "read";
  static type: string = "type";
}

export class ProviderColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static profile_picture: string = "profile_picture";
  static user_id: string = "user_id";
  static bio: string = "bio";
  static rating: string = "rating";
  static rent_status_id: string = "rent_status_id";
  static country_id: string = "country_id";
  static religion_status_id: string = "religion_status_id";
  static arabic_status_id: string = "arabic_status_id";
  static english_status_id: string = "english_status_id";
  static nick_name: string = "nick_name";
  static net_salary: string = "net_salary";
  static wage_per_month: string = "wage_per_month";
  static card_number: string = "card_number";
  static card_expire: string = "card_expire";
  static passport_number: string = "passport_number";
  static passport_expire: string = "passport_expire";
  static experience_date: string = "experience_date";
  static max_children: string = "max_children";
  static child_status_id: string = "child_status_id";
  static license_number: string = "license_number";
  static license_expiry: string = "license_expiry";
  static work_id: string = "work_id";
  static package_id: string = "package_id";
  static cook_status_id: string = "cook_status_id";
  static notes: string = "notes";
  static phone: string = "phone";
  static gender: string = "gender";
  static date_birth: string = "date_birth";
}

export class RequestAttachColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static file_path: string = "file_path";
  static file_name: string = "file_name";
  static file_type: string = "file_type";
  static uploaded_at: string = "uploaded_at";
  static request_id: string = "request_id";
}

export class WorkColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
  static work_category_id: string = "work_category_id";
  static image_url: string = "image_url";
  static icon: string = "icon";
}

export class UserColumns {
  static id: string = "id";
  static email: string = "email";
  static password_hash: string = "password_hash";
  static is_active: string = "is_active";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static first_name: string = "first_name";
  static mobile: string = "mobile";
  static location_id: string = "location_id";
}

export class LocationColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static user_id: string = "user_id";
  static address: string = "address";
  static city_id: string = "city_id";
  static state: string = "state";
  static post_code: string = "post_code";
  static lat: string = "lat";
  static lng: string = "lng";
  static country_id: string = "country_id";
}

export class RoleColumns {
  static id: string = "id";
  static name: string = "name";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
}

export class UserRoleColumns {
  static id: string = "id";
  static user_id: string = "user_id";
  static role_id: string = "role_id";
  static created_at: string = "created_at";
}

export class PageColumns {
  static id: string = "id";
  static name: string = "name";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
}

export class PermissionColumns {
  static id: string = "id";
  static name: string = "name";
  static created_at: string = "created_at";
}

export class RolePermissionColumns {
  static id: string = "id";
  static role_id: string = "role_id";
  static page_id: string = "page_id";
  static permission_id: string = "permission_id";
  static created_at: string = "created_at";
}

export class CountryColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static eng_name: string = "eng_name";
  static flag_url: string = "flag_url";
  static iso_code: string = "iso_code";
  static arb_name: string = "arb_name";
}

export class ReligionStatusColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}

export class BankColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static bank_name: string = "bank_name";
  static bank_account: string = "bank_account";
}

export class CityColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
  static country_id: string = "country_id";
  static lat: string = "lat";
  static lng: string = "lng";
}

export class RentStatusColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}

export class SettingColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static auto_cancel_request: string = "auto_cancel_request";
  static max_hour: string = "max_hour";
  static payment_method: string = "payment_method";
  static down_payment_percent: string = "down_payment_percent";
}

export class PackageItemColumns {
  static id: string = "id";
  static package_id: string = "package_id";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static month_number: string = "month_number";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
  static down_payment_percent: string = "down_payment_percent";
  static discount_percent: string = "discount_percent";
}

export class PackageColumns {
  static id: string = "id";
  static eng_name: string = "eng_name";
  static arb_name: string = "arb_name";
  static is_active: string = "is_active";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static start_date: string = "start_date";
  static end_date: string = "end_date";
  static valid_days: string = "valid_days";
}

export class LangStatusColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}

export class RequestCustomerColumns {
  static id: string = "id";
  static user_id: string = "user_id";
  static request_date: string = "request_date";
  static request_status_id: string = "request_status_id";
  static payment_id: string = "payment_id";
  static created_at: string = "created_at";
  static updated_at: string = "updated_at";
  static provider_id: string = "provider_id";
  static wage_amount: string = "wage_amount";
  static package_item_id: string = "package_item_id";
  static month_number: string = "month_number";
  static pay_status: string = "pay_status";
  static down_payment: string = "down_payment";
  static payment_method: string = "payment_method";
  static work_id: string = "work_id";
  static total_before_discount: string = "total_before_discount";
}

export class RequestPaymentColumns {
  static id: string = "id";
  static request_customer_id: string = "request_customer_id";
  static user_id: string = "user_id";
  static amount: string = "amount";
  static currency: string = "currency";
  static payment_method: string = "payment_method";
  static payment_status: string = "payment_status";
  static transaction_id: string = "transaction_id";
  static created_at: string = "created_at";
}

export class RequestStatusColumns {
  static id: string = "id";
  static created_at: string = "created_at";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}

export class CookStatusColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}

export class ChildStatusColumns {
  static id: string = "id";
  static arb_name: string = "arb_name";
  static eng_name: string = "eng_name";
}
