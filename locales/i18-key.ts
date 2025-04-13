export class I18Bank {
  };
export class I18Childstatus {
  };
export class I18City {
  };
export class I18Cookstatus {
  };
export class I18Country {
  };
export class I18Drawer {
    static Items = class Items {
      public static main: string = "drawer.items.main";
      public static employees: string = "drawer.items.employees";
      public static customers: string = "drawer.items.customers";
      public static workers: string = "drawer.items.workers";
      public static requests: string = "drawer.items.requests";
      public static packages: string = "drawer.items.packages";
      public static logout: string = "drawer.items.logout";
      public static settings: string = "drawer.items.settings";
      public static aboutus: string = "drawer.items.aboutus";
    };
  };
export class I18Errors {
    public static email_incorrect: string = "errors.email_incorrect";
    public static password_incorrect: string = "errors.password_incorrect";
    public static email_password_incorrect: string = "errors.email_password_incorrect";
    public static greater_than_max: string = "errors.greater_than_max";
    public static less_than_min: string = "errors.less_than_min";
    public static field_is_required: string = "errors.field_is_required";
    public static field_mustbe_number: string = "errors.field_mustbe_number";
    public static two_fields_are_not_match: string = "errors.two_fields_are_not_match";
  };
export class I18Global {
    public static details: string = "global.details";
    public static male: string = "global.male";
    public static female: string = "global.female";
    public static save: string = "global.save";
    public static cancel: string = "global.cancel";
    public static add_new_row: string = "global.add_new_row";
  };
export class I18Labels {
    public static today: string = "labels.today";
    public static last_week: string = "labels.last_week";
    public static last_month: string = "labels.last_month";
  };
export class I18Langstatus {
  };
export class I18Location {
  };
export class I18Login {
    public static title: string = "login.title";
    public static login: string = "login.login";
    public static submit: string = "login.submit";
    public static password: string = "login.password";
    public static email: string = "login.email";
    public static forgetpassword: string = "login.forgetpassword";
    public static confirm_password: string = "login.confirm_password";
  };
export class I18Message {
  };
export class I18Messages {
    public static loading_data: string = "messages.loading_data";
    public static user_authenticated: string = "messages.user_authenticated";
    public static user_not_authenticated: string = "messages.user_not_authenticated";
    public static greater_than_max: string = "messages.greater_than_max";
    public static less_than_min: string = "messages.less_than_min";
    public static operation_successed: string = "messages.operation_successed";
  };
export class I18Package {
    public static title: string = "package.title";
    static Fields = class Fields {
      public static name: string = "package.fields.name";
      public static start_date: string = "package.fields.start_date";
      public static end_date: string = "package.fields.end_date";
      public static valid_days: string = "package.fields.valid_days";
      public static is_active: string = "package.fields.is_active";
    };
  };
export class I18Packageitem {
    public static title: string = "packageitem.title";
    static Fields = class Fields {
      public static name: string = "packageitem.fields.name";
      public static month_number: string = "packageitem.fields.month_number";
      public static down_payment_percent: string = "packageitem.fields.down_payment_percent";
      public static discount_percent: string = "packageitem.fields.discount_percent";
    };
  };
export class I18Provider {
    public static title: string = "provider.title";
    static Tabs = class Tabs {
      public static account: string = "provider.tabs.account";
      public static personal: string = "provider.tabs.personal";
      public static contact: string = "provider.tabs.contact";
      public static employment: string = "provider.tabs.employment";
      public static documents: string = "provider.tabs.documents";
      public static additional: string = "provider.tabs.additional";
    };
    static Fields = class Fields {
      public static address: string = "provider.fields.address";
      public static city: string = "provider.fields.city";
      public static state: string = "provider.fields.state";
      public static zipcode: string = "provider.fields.zipcode";
      public static profile_picture: string = "provider.fields.profile_picture";
      public static bio: string = "provider.fields.bio";
      public static rating: string = "provider.fields.rating";
      public static rent_status_id: string = "provider.fields.rent_status_id";
      public static country_id: string = "provider.fields.country_id";
      public static religion_status_id: string = "provider.fields.religion_status_id";
      public static arabic_status_id: string = "provider.fields.arabic_status_id";
      public static english_status_id: string = "provider.fields.english_status_id";
      public static nick_name: string = "provider.fields.nick_name";
      public static net_salary: string = "provider.fields.net_salary";
      public static wage_amount: string = "provider.fields.wage_amount";
      public static card_number: string = "provider.fields.card_number";
      public static card_expire: string = "provider.fields.card_expire";
      public static passport_number: string = "provider.fields.passport_number";
      public static passport_expire: string = "provider.fields.passport_expire";
      public static experience_date: string = "provider.fields.experience_date";
      public static max_children: string = "provider.fields.max_children";
      public static child_status_id: string = "provider.fields.child_status_id";
      public static license_number: string = "provider.fields.license_number";
      public static license_expiry: string = "provider.fields.license_expiry";
      public static work_id: string = "provider.fields.work_id";
      public static package_id: string = "provider.fields.package_id";
      public static cook_status_id: string = "provider.fields.cook_status_id";
      public static notes: string = "provider.fields.notes";
      public static date_birth: string = "provider.fields.date_birth";
      public static gender: string = "provider.fields.gender";
    };
  };
export class I18Religionstatus {
  };
export class I18Rentstatus {
  };
export class I18Requestattach {
  };
export class I18Requestcustomer {
    public static title: string = "requestcustomer.title";
    static Fields = class Fields {
      public static id: string = "requestcustomer.fields.id";
      public static request_date: string = "requestcustomer.fields.request_date";
      public static request_status: string = "requestcustomer.fields.request_status";
      public static provider_fullname: string = "requestcustomer.fields.provider_fullname";
      public static user_fullname: string = "requestcustomer.fields.user_fullname";
      public static pending: string = "requestcustomer.fields.pending";
      public static approved: string = "requestcustomer.fields.approved";
      public static inprogress: string = "requestcustomer.fields.inprogress";
      public static completed: string = "requestcustomer.fields.completed";
      public static cancelled: string = "requestcustomer.fields.cancelled";
      public static rejected: string = "requestcustomer.fields.rejected";
      public static expired: string = "requestcustomer.fields.expired";
      public static all: string = "requestcustomer.fields.all";
      public static month_number: string = "requestcustomer.fields.month_number";
      public static net_total_amount: string = "requestcustomer.fields.net_total_amount";
      public static total_before_discount: string = "requestcustomer.fields.total_before_discount";
      public static down_payment: string = "requestcustomer.fields.down_payment";
      public static discount_value: string = "requestcustomer.fields.discount_value";
      public static discount_percent: string = "requestcustomer.fields.discount_percent";
    };
  };
export class I18Requestpayment {
  };
export class I18Requeststatus {
  };
export class I18Setting {
  };
export class I18User {
    public static title: string = "user.title";
    static Fields = class Fields {
      public static first_name: string = "user.fields.first_name";
      public static last_name: string = "user.fields.last_name";
      public static full_name: string = "user.fields.full_name";
      public static email: string = "user.fields.email";
      public static mobile: string = "user.fields.mobile";
      public static username: string = "user.fields.username";
      public static password_hash: string = "user.fields.password_hash";
      public static confirm_password: string = "user.fields.confirm_password";
    };
  };
export class I18Work {
  };
export class I18Workcategory {
  };
