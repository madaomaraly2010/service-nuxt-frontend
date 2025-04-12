export class I18Provider {
  public static Title: string = "العامليين";
  static Tabs = class Tabs {
    public static Account: string = "بيانات الحساب";
    public static Personal: string = "بيانات شخصية";
    public static Contact: string = "بيانات الإتصال";
    public static Employment: string = "بيانات توظيفية";
    public static Documents: string = "الوثائق و الحالات";
    public static Additional: string = "بيانات أخرى";
  };
  static Fields = class Fields {
    public static Address: string = "العنوان";
    public static City: string = "المدينة";
    public static State: string = "المقاطعة";
    public static Zipcode: string = "الرمز البريدى";
    public static Profile_picture: string = "الصورة الشخصية";
    public static Bio: string = "السيرة الذاتية";
    public static Rating: string = "التقييم";
    public static Rent_status_id: string = "حالة التأجير";
    public static Country_id: string = "الجنسية";
    public static Religion_status_id: string = "الديانة";
    public static Arabic_status_id: string = "اللغة العربية";
    public static English_status_id: string = "اللغة الإنجليزية";
    public static Nick_name: string = "الكنية";
    public static Net_salary: string = "الراتب الشهرى";
    public static Wage_amount: string = "الأجرة الشهرية";
    public static Card_number: string = "رقم البطاقة";
    public static Card_expire: string = "تاريخ إنتهاء ";
    public static Passport_number: string = "رقم الجواز";
    public static Passport_expire: string = "تاريخ إنتهاءه";
    public static Experience_date: string = "تاريخ بء الخبرة";
    public static Max_children: string = "عدد الاطفال";
    public static Child_status_id: string = "الطفولة";
    public static License_number: string = "رقم الرخصة";
    public static License_expiry: string = "تاريخ إنتهائها";
    public static Work_id: string = "العمل";
    public static Package_id: string = "";
    public static Cook_status_id: string = "الطهى";
    public static Notes: string = "ملاحظات";
    public static Date_birth: string = "تاريخ الميلاد";
    public static Gender: string = "الجنس";
  };
}
export class I18User {
  public static Title: string = "المستخدميين";
  static Fields = class Fields {
    public static First_name: string = "الاسم الاول";
    public static Last_name: string = "اللقب";
    public static Full_name: string = "اسم المستخدم";
    public static Email: string = "البريد الإكترونى";
    public static Mobile: string = "موبايل";
    public static Username: string = "اسم المستخدم";
    public static Password_hash: string = "كلمة المرور";
    public static Confirm_password: string = "تأكيد كلمة المرور";
  };
}
export class I18Package {
  public static Title: string = "العروض";
  static Fields = class Fields {
    public static Name: string = "عنوان العرض";
    public static Start_date: string = "سارى من ";
    public static End_date: string = "سارى إالى";
    public static Valid_days: string = "العرض ساري عدد أيام";
    public static Is_active: string = "نشط";
  };
}
export class I18Packageitem {
  public static Title: string = "المستخدميين";
  static Fields = class Fields {
    public static Name: string = "عنوان العرض";
    public static Month_number: string = "عدد الأشهر";
    public static Down_payment_percent: string = "نسبة العربون";
    public static Discount_percent: string = "نسبة التخفيض";
  };
}
export class I18Login {
  public static Title: string = "";
  public static Login: string = "دخول";
  public static Submit: string = "دخول";
  public static Password: string = "كلمة المرور";
  public static Email: string = "البريد الإكترونى";
  public static Forgetpassword: string = "نسيت كلمة المرور";
  public static Confirm_password: string = "تأكيد كلمة المرور";
}
export class I18Request_customer {
  public static Title: string = "الطلبات";
  static Fields = class Fields {
    public static Id: string = "السجل";
    public static Request_date: string = "تاريخ الطلب";
    public static Request_status: string = "حالة الطلب";
    public static Provider_fullname: string = "اسم العامل";
    public static User_fullname: string = "اسم العميل";
    public static Pending: string = "قيد الانتظار";
    public static Approved: string = "موافق عليه";
    public static Inprogress: string = "قيد التنفيذ";
    public static Completed: string = "مكتمل";
    public static Cancelled: string = "ملغى";
    public static Rejected: string = "مرفوض";
    public static Expired: string = "منتهي الصلاحية";
    public static All: string = "الكل";
    public static Month_number: string = "عدد الأشهر";
    public static Net_total_amount: string = "الصافى";
    public static Total_before_discount: string = " الإجمالى قبل الخصم";
    public static Down_payment: string = "العربون";
    public static Discount_value: string = "إجمالى الخصم";
    public static Discount_percent: string = "نسبة الخصم";
  };
}
export class I18Messages {
  public static Loading_data: string = "جارى تحميل البيانات...";
  public static User_authenticated: string = "المستخدم تم التحقق من هويته.";
  public static User_not_authenticated: string =
    "خطأ فى اسم المستخدم أو كلمة المرور";
  public static Greater_than_max: string = "يجب الا تزيد القيمة عن {val}";
  public static Less_than_min: string = "يجب الا تقل القيمة عن {val}";
  public static Operation_successed: string = "تمت العملية بنجاح";
}
export class I18Error {
  public static Email_incorrect: string = "بريد إلكترونى غير صحيح";
  public static Password_incorrect: string = "خطأ فى كلمة المرور";
  public static Email_password_incorrect: string =
    "خطأ فى اسم المستخدم أو كلمة المرور";
  public static Greater_than_max: string = "يجب الا تزيد القيمة عن {val}";
  public static Less_than_min: string = "يجب الا تقل القيمة عن {val}";
  public static Field_is_required: string = "حقل {0} إلزامى";
  public static Field_mustbe_number: string = "حقل {0} لابد ان يكون رقم";
  public static Two_fields_are_not_match: string =
    "الحقلان [{0}]  [{1}] غير متطابقان";
}
export class I18Drawer {
  static Items = class Items {
    public static Main: string = "الرئيسية";
    public static Employees: string = "الموظفيين";
    public static Customers: string = "العملاء";
    public static Workers: string = "العمالة";
    public static Requests: string = "الطلبات";
    public static Logout: string = "خروج";
    public static Settings: string = "الإعدادات";
    public static Aboutus: string = "من نحن";
  };
}
export class I18Global {
  public static Details: string = "التفاصيل";
  public static Male: string = "ذكر";
  public static Female: string = "أنثى";
  public static Save: string = "حفظ";
  public static Cancel: string = "تراجع";
}
export class I18Labels {
  public static Today: string = "اليوم";
  public static Last_week: string = "الاسبوع الماضى";
  public static Last_month: string = "الشهر الماضى";
}
