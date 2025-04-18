import type { QTableColumn } from "quasar";

export const useTableHelper = () => {
  const nuxtApp = useNuxtApp();

  const createButtonColumn = (
    label: string,
    columnName: string
  ): QTableColumn => ({
    name: columnName,
    label: "",
    field: "id",
    headerClasses: "bg-grey-3",
    headerStyle: "font-weight:bold;color:grey;font-size:medium",
    align: "center",
  });

  const createColumn = (
    // tableName: string,
    fieldName: string,
    label: string,
    columnName?: string,
    i18Name?: string,
    options?: QTableColumn
  ): QTableColumn => {
    let _colName = columnName ?? fieldName;
    // let _i18Name = i18Name ?? fieldName ?? columnName;

    return {
      name: `${_colName}`,
      // label: nuxtApp.$t(`${tableName}.fields.${_i18Name}`),
      label,
      field: `${fieldName}`,
      sortable: true,
      headerClasses: "bg-grey-3",
      headerStyle: "font-weight:bold;color:grey;font-size:medium",
      align: "center",
      ...options,
    };
  };
  return {
    createButtonColumn,
    createColumn,
  };
};
