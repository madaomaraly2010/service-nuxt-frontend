export const requiredValidation =
  (i18t: (key: string, params?: string[]) => string | any, fieldName: string) =>
  (value: any) =>
    !!value || i18t("error.field_is_required", [i18t(fieldName)]);
