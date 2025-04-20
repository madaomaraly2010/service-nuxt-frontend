import { I18Errors } from "~/locales/i18-key";

export class ValidatorRules {
  static required(i18t: (key: string, params?: string[]) => string | any) {
    return (val: any) => !!val || `${i18t(I18Errors.field_is_required)}`;
  }

  static email(i18t: (key: string, params?: string[]) => string | any) {
    return (val: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
      `${i18t(I18Errors.email_incorrect)}`;
  }
  static mobile(i18t: (key: string, params?: string[]) => string | any) {
    return (val: string) =>
      /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(val) ||
      `${i18t(I18Errors.mobile_is_incorrect)}`;
  }

  static minValue(
    i18t: (key: string, params?: string[]) => string | any,
    min: number
  ) {
    return (val: string) =>
      (val && +val >= min) ||
      `${i18t(I18Errors.less_than_min, [min.toString()])}`;
  }

  static maxValue(
    i18t: (key: string, params?: string[]) => string | any,
    max: number
  ) {
    return (val: string) =>
      (val && +val <= max) ||
      `${i18t(I18Errors.greater_than_max, [max.toString()])}`;
  }

  static number(
    i18t: (key: string, params?: string[]) => string | any,
    fieldName: string = "This field"
  ) {
    return (val: any) =>
      !isNaN(Number(val)) ||
      `${i18t("error.field_mustbe_number", [i18t(fieldName)])}`;
  }

  static match(
    i18t: (key: string, params?: string[]) => string | any,
    otherValue: () => string,
    fieldName: string = "This field",
    otherFieldName: string
  ) {
    return (val: string) =>
      val === otherValue() ||
      `${i18t("error.two_fields_are_not_match", [
        i18t(fieldName),
        i18t(otherFieldName),
      ])}`;
  }
}
