export class ValidatorRules {
  static required(
    i18t: (key: string, params?: string[]) => string | any,
    fieldName: string = "This field"
  ) {
    return (val: any) =>
      !!val || `${i18t("error.field_is_required", [i18t(fieldName)])}`;
  }

  static email(i18t: (key: string, params?: string[]) => string | any) {
    return (val: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
      `${i18t("error.email_incorrect")}`;
  }

  static minValue(
    i18t: (key: string, params?: string[]) => string | any,
    min: number
  ) {
    return (val: string) =>
      (val && val.length >= min) ||
      `${i18t("error.less_than_min", [min.toString()])}`;
  }

  static maxValue(
    i18t: (key: string, params?: string[]) => string | any,
    max: number
  ) {
    return (val: string) =>
      (val && val.length <= max) ||
      `${i18t("error.greater_than_max", [max.toString()])}`;
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
