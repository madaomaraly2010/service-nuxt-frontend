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
      /** الرئيسية */
      public static main: string = "drawer.items.main";
      /** الموظفيين */
      public static employees: string = "drawer.items.employees";
      /** العملاء */
      public static customers: string = "drawer.items.customers";
      /** العمالة */
      public static workers: string = "drawer.items.workers";
      /** الطلبات */
      public static requests: string = "drawer.items.requests";
      /** الباقات */
      public static packages: string = "drawer.items.packages";
      /** خروج */
      public static logout: string = "drawer.items.logout";
      /** الإعدادات */
      public static settings: string = "drawer.items.settings";
      /** من نحن */
      public static aboutus: string = "drawer.items.aboutus";
    };
  };
export class I18Errors {
    /** بريد إلكترونى غير صحيح */
    public static email_incorrect: string = "errors.email_incorrect";
    /** خطأ فى كلمة المرور */
    public static password_incorrect: string = "errors.password_incorrect";
    /** خطأ فى اسم المستخدم أو كلمة المرور */
    public static email_password_incorrect: string = "errors.email_password_incorrect";
    /** يجب الا تزيد القيمة عن {val} */
    public static greater_than_max: string = "errors.greater_than_max";
    /** يجب الا تقل القيمة عن {val} */
    public static less_than_min: string = "errors.less_than_min";
    /** حقل {0} إلزامى */
    public static field_is_required: string = "errors.field_is_required";
    /** حقل {0} لابد ان يكون رقم */
    public static field_mustbe_number: string = "errors.field_mustbe_number";
    /** الحقلان [{0}]  [{1}] غير متطابقان */
    public static two_fields_are_not_match: string = "errors.two_fields_are_not_match";
  };
export class I18Global {
    /** التفاصيل */
    public static details: string = "global.details";
    /** ذكر */
    public static male: string = "global.male";
    /** أنثى */
    public static female: string = "global.female";
    /** حفظ */
    public static save: string = "global.save";
    /** تراجع */
    public static cancel: string = "global.cancel";
  };
export class I18Labels {
    /** اليوم */
    public static today: string = "labels.today";
    /** الاسبوع الماضى */
    public static last_week: string = "labels.last_week";
    /** الشهر الماضى */
    public static last_month: string = "labels.last_month";
  };
export class I18Langstatus {
  };
export class I18Location {
  };
export class I18Login {
    /**  */
    public static title: string = "login.title";
    /** دخول */
    public static login: string = "login.login";
    /** دخول */
    public static submit: string = "login.submit";
    /** كلمة المرور */
    public static password: string = "login.password";
    /** البريد الإكترونى */
    public static email: string = "login.email";
    /** نسيت كلمة المرور */
    public static forgetpassword: string = "login.forgetpassword";
    /** تأكيد كلمة المرور */
    public static confirm_password: string = "login.confirm_password";
  };
export class I18Message {
  };
export class I18Messages {
    /** جارى تحميل البيانات... */
    public static loading_data: string = "messages.loading_data";
    /** المستخدم تم التحقق من هويته. */
    public static user_authenticated: string = "messages.user_authenticated";
    /** خطأ فى اسم المستخدم أو كلمة المرور */
    public static user_not_authenticated: string = "messages.user_not_authenticated";
    /** يجب الا تزيد القيمة عن {val} */
    public static greater_than_max: string = "messages.greater_than_max";
    /** يجب الا تقل القيمة عن {val} */
    public static less_than_min: string = "messages.less_than_min";
    /** تمت العملية بنجاح */
    public static operation_successed: string = "messages.operation_successed";
  };
export class I18Package {
    /** العروض */
    public static title: string = "package.title";
    static Fields = class Fields {
      /** عنوان العرض */
      public static name: string = "package.fields.name";
      /** سارى من  */
      public static start_date: string = "package.fields.start_date";
      /** سارى إالى */
      public static end_date: string = "package.fields.end_date";
      /** العرض ساري عدد أيام */
      public static valid_days: string = "package.fields.valid_days";
      /** نشط */
      public static is_active: string = "package.fields.is_active";
    };
  };
export class I18Packageitem {
    /** المستخدميين */
    public static title: string = "packageitem.title";
    static Fields = class Fields {
      /** عنوان العرض */
      public static name: string = "packageitem.fields.name";
      /** عدد الأشهر */
      public static month_number: string = "packageitem.fields.month_number";
      /** نسبة العربون */
      public static down_payment_percent: string = "packageitem.fields.down_payment_percent";
      /** نسبة التخفيض */
      public static discount_percent: string = "packageitem.fields.discount_percent";
    };
  };
export class I18Provider {
    /** العامليين */
    public static title: string = "provider.title";
    static Tabs = class Tabs {
      /** بيانات الحساب */
      public static account: string = "provider.tabs.account";
      /** بيانات شخصية */
      public static personal: string = "provider.tabs.personal";
      /** بيانات الإتصال */
      public static contact: string = "provider.tabs.contact";
      /** بيانات توظيفية */
      public static employment: string = "provider.tabs.employment";
      /** الوثائق و الحالات */
      public static documents: string = "provider.tabs.documents";
      /** بيانات أخرى */
      public static additional: string = "provider.tabs.additional";
    };
    static Fields = class Fields {
      /** العنوان */
      public static address: string = "provider.fields.address";
      /** المدينة */
      public static city: string = "provider.fields.city";
      /** المقاطعة */
      public static state: string = "provider.fields.state";
      /** الرمز البريدى */
      public static zipcode: string = "provider.fields.zipcode";
      /** الصورة الشخصية */
      public static profile_picture: string = "provider.fields.profile_picture";
      /** السيرة الذاتية */
      public static bio: string = "provider.fields.bio";
      /** التقييم */
      public static rating: string = "provider.fields.rating";
      /** حالة التأجير */
      public static rent_status_id: string = "provider.fields.rent_status_id";
      /** الجنسية */
      public static country_id: string = "provider.fields.country_id";
      /** الديانة */
      public static religion_status_id: string = "provider.fields.religion_status_id";
      /** اللغة العربية */
      public static arabic_status_id: string = "provider.fields.arabic_status_id";
      /** اللغة الإنجليزية */
      public static english_status_id: string = "provider.fields.english_status_id";
      /** الكنية */
      public static nick_name: string = "provider.fields.nick_name";
      /** الراتب الشهرى */
      public static net_salary: string = "provider.fields.net_salary";
      /** الأجرة الشهرية */
      public static wage_amount: string = "provider.fields.wage_amount";
      /** رقم البطاقة */
      public static card_number: string = "provider.fields.card_number";
      /** تاريخ إنتهاء  */
      public static card_expire: string = "provider.fields.card_expire";
      /** رقم الجواز */
      public static passport_number: string = "provider.fields.passport_number";
      /** تاريخ إنتهاءه */
      public static passport_expire: string = "provider.fields.passport_expire";
      /** تاريخ بء الخبرة */
      public static experience_date: string = "provider.fields.experience_date";
      /** عدد الاطفال */
      public static max_children: string = "provider.fields.max_children";
      /** الطفولة */
      public static child_status_id: string = "provider.fields.child_status_id";
      /** رقم الرخصة */
      public static license_number: string = "provider.fields.license_number";
      /** تاريخ إنتهائها */
      public static license_expiry: string = "provider.fields.license_expiry";
      /** العمل */
      public static work_id: string = "provider.fields.work_id";
      /**  */
      public static package_id: string = "provider.fields.package_id";
      /** الطهى */
      public static cook_status_id: string = "provider.fields.cook_status_id";
      /** ملاحظات */
      public static notes: string = "provider.fields.notes";
      /** تاريخ الميلاد */
      public static date_birth: string = "provider.fields.date_birth";
      /** الجنس */
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
    /** الطلبات */
    public static title: string = "requestcustomer.title";
    static Fields = class Fields {
      /** السجل */
      public static id: string = "requestcustomer.fields.id";
      /** تاريخ الطلب */
      public static request_date: string = "requestcustomer.fields.request_date";
      /** حالة الطلب */
      public static request_status: string = "requestcustomer.fields.request_status";
      /** اسم العامل */
      public static provider_fullname: string = "requestcustomer.fields.provider_fullname";
      /** اسم العميل */
      public static user_fullname: string = "requestcustomer.fields.user_fullname";
      /** قيد الانتظار */
      public static pending: string = "requestcustomer.fields.pending";
      /** موافق عليه */
      public static approved: string = "requestcustomer.fields.approved";
      /** قيد التنفيذ */
      public static inprogress: string = "requestcustomer.fields.inprogress";
      /** مكتمل */
      public static completed: string = "requestcustomer.fields.completed";
      /** ملغى */
      public static cancelled: string = "requestcustomer.fields.cancelled";
      /** مرفوض */
      public static rejected: string = "requestcustomer.fields.rejected";
      /** منتهي الصلاحية */
      public static expired: string = "requestcustomer.fields.expired";
      /** الكل */
      public static all: string = "requestcustomer.fields.all";
      /** عدد الأشهر */
      public static month_number: string = "requestcustomer.fields.month_number";
      /** الصافى */
      public static net_total_amount: string = "requestcustomer.fields.net_total_amount";
      /**  الإجمالى قبل الخصم */
      public static total_before_discount: string = "requestcustomer.fields.total_before_discount";
      /** العربون */
      public static down_payment: string = "requestcustomer.fields.down_payment";
      /** إجمالى الخصم */
      public static discount_value: string = "requestcustomer.fields.discount_value";
      /** نسبة الخصم */
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
    /** المستخدميين */
    public static title: string = "user.title";
    static Fields = class Fields {
      /** الاسم الاول */
      public static first_name: string = "user.fields.first_name";
      /** اللقب */
      public static last_name: string = "user.fields.last_name";
      /** اسم المستخدم */
      public static full_name: string = "user.fields.full_name";
      /** البريد الإكترونى */
      public static email: string = "user.fields.email";
      /** موبايل */
      public static mobile: string = "user.fields.mobile";
      /** اسم المستخدم */
      public static username: string = "user.fields.username";
      /** كلمة المرور */
      public static password_hash: string = "user.fields.password_hash";
      /** تأكيد كلمة المرور */
      public static confirm_password: string = "user.fields.confirm_password";
    };
  };
export class I18Work {
  };
export class I18Workcategory {
  };
