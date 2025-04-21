export interface JsonKeyOptions {
  name?: string;
  type?: any | (() => any);
  ignore?: boolean;
  includeIfNull?: boolean;

  includeFromDbRow?: boolean;
  includeToDbRow?: boolean;
}

const classFieldMap = new WeakMap<
  any,
  Map<string, JsonKeyOptions & { propertyKey: string }>
>();

export function JsonKey(options: JsonKeyOptions = {}) {
  return function (target: any, propertyKey: string) {
    const constructor = target.constructor;
    if (!classFieldMap.has(constructor)) {
      classFieldMap.set(constructor, new Map());
    }
    const {
      type = null,
      ignore = false,
      includeIfNull = true,
      includeFromDbRow = true,
      includeToDbRow = true,
    } = options ?? {};

    classFieldMap.get(constructor)!.set(propertyKey, {
      type,
      ignore,
      includeIfNull,
      includeFromDbRow,
      includeToDbRow,
      propertyKey,
      name: options.name ?? propertyKey,
    });
  };
}

export function JsonSerializable<T extends { new (...args: any[]): {} }>(): (
  constructor: T
) => void {
  return function (constructor: T): void {
    const fields = classFieldMap.get(constructor);
    if (!fields) return;

    (constructor as any).fromDbRow = function (json: any) {
      const instance = new constructor();
      for (const [, field] of fields.entries()) {
        const { name, propertyKey, ignore, includeFromDbRow } = field;
        if (ignore || includeFromDbRow === false) continue;

        const value = json[name!];
        if (value === undefined) continue;

        const actualType =
          typeof field.type === "function" ? field.type() : field.type;

        if (actualType && value !== null) {
          if (Array.isArray(value)) {
            (instance as any)[propertyKey] = value.map((v: any) =>
              typeof actualType.fromDbRow === "function"
                ? actualType.fromDbRow(v)
                : v
            );
          } else {
            (instance as any)[propertyKey] =
              typeof actualType.fromDbRow === "function"
                ? actualType.fromDbRow(value)
                : value;
          }
        } else {
          (instance as any)[propertyKey] = value;
        }
      }
      return instance;
    };

    const formatDate = (val: any): any => {
      
      // Skip formatting for numbers, booleans, etc.
      if (typeof val === "number" || typeof val === "boolean") return val;

      // Format real Date objects
      if (val instanceof Date) return val.toISOString().split("T")[0];

      // Format valid ISO date strings only
      if (typeof val === "string" /*&& /^\d{4}-\d{2}-\d{2}$/.test(val)*/) {
        const d = new Date(val);
        if (!isNaN(d.getTime())) {
          return d.toISOString().split("T")[0];
        }
      }

      return val;
    };

    constructor.prototype.toDbRow = function () {
      

      const result: any = {};
      for (const [, field] of fields.entries()) {
        const { name, propertyKey, ignore, includeToDbRow, includeIfNull } =
          field;
        if (ignore || includeToDbRow === false) continue;

        let value = (this as any)[propertyKey];
        if (value === undefined || (value === null && includeIfNull === false))
          continue;

        const actualType =
          typeof field.type === "function" ? field.type() : field.type;

        if (actualType && value !== null) {
          if (Array.isArray(value)) {
            result[name!] = value.map((v: any) =>
              typeof v?.toDbRow === "function" ? v.toDbRow() : formatDate(v)
            );
          } else {
            result[name!] =
              typeof value?.toDbRow === "function"
                ? value.toDbRow()
                : formatDate(value);
          }
        } else {
          result[name!] = formatDate(value);
        }
      }
      return result;
    };

    // constructor.prototype.toDbRow = function () {
    //   const result: any = {};
    //   for (const [, field] of fields.entries()) {
    //     const { name, propertyKey, ignore, includeToDbRow, includeIfNull } =
    //       field;
    //     if (ignore || includeToDbRow === false) continue;

    //     let value = (this as any)[propertyKey];
    //     if (value === undefined || (value === null && includeIfNull === false))
    //       continue;

    //     const actualType =
    //       typeof field.type === "function" ? field.type() : field.type;

    //     if (actualType && value !== null) {
    //       if (Array.isArray(value)) {
    //         result[name!] = value.map((v: any) =>
    //           typeof v?.toDbRow === "function" ? v.toDbRow() : formatDate(v)
    //         );
    //       } else if (value instanceof Date) {
    //         debugger;
    //         result[name!] = value.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    //       } else {
    //         result[name!] =
    //           typeof value?.toDbRow === "function" ? value.toDbRow() : value;
    //       }
    //     } else {
    //       debugger;

    //       result[name!] =
    //         value instanceof Date ? value.toISOString().split("T")[0] : value;
    //     }
    //   }
    //   return result;
    // };

    // constructor.prototype.toDbRow = function () {
    //   const result: any = {};
    //   for (const [, field] of fields.entries()) {
    //     const { name, propertyKey, ignore, includeToDbRow, includeIfNull } =
    //       field;
    //     if (ignore || includeToDbRow === false) continue;

    //     const value = (this as any)[propertyKey];
    //     if (value === undefined || (value === null && includeIfNull === false))
    //       continue;

    //     const actualType =
    //       typeof field.type === "function" ? field.type() : field.type;

    //     if (actualType && value !== null) {
    //       if (Array.isArray(value)) {
    //         result[name!] = value.map((v: any) =>
    //           typeof v?.toDbRow === "function" ? v.toDbRow() : v
    //         );
    //       } else {
    //         result[name!] =
    //           typeof value?.toDbRow === "function" ? value.toDbRow() : value;
    //       }
    //     } else {
    //       result[name!] = value;
    //     }
    //   }
    //   return result;
    // };
  };
}

// interface JsonFieldOptions {
//   key?: string;
//   type?: any;
//   name?: string;
//   ignore?: boolean;
//   includefromDbRow?: boolean;
//   includetoDbRow?: boolean;
//   includeIfNull?: boolean;
// }

// const classFieldMap = new WeakMap<
//   any,
//   Map<string, JsonFieldOptions & { propertyKey: string }>
// >();

// export function JsonKey(options: JsonFieldOptions = {}) {
//   return function (target: any, propertyKey: string) {
//     const constructor = target.constructor;
//     if (!classFieldMap.has(constructor)) {
//       classFieldMap.set(constructor, new Map());
//     }
//     classFieldMap.get(constructor)!.set(propertyKey, {
//       ...options,
//       propertyKey,
//       key: options.key ?? propertyKey,
//       type: options.type,
//     });
//   };
// }

// export function Serializable<T extends { new (...args: any[]): {} }>(): (
//   constructor: T
// ) => void {
//   return function (constructor: T): void {
//     const fields = classFieldMap.get(constructor);
//     if (!fields) return;

//     // Static fromDbRow method
//     (constructor as any).fromDbRow = function (json: any) {
//       const instance = new constructor();
//       for (const [, field] of fields.entries()) {
//         const { name, propertyKey, ignore, includefromDbRow, type } = field;

//         if (ignore || includefromDbRow === false) continue;
//         const value = json[name!];
//         if (value === undefined) continue;

//         if (type && value !== null) {
//           if (Array.isArray(value)) {
//             (instance as any)[propertyKey] = value.map((v: any) =>
//               typeof type.fromDbRow === "function" ? type.fromDbRow(v) : v
//             );
//           } else {
//             (instance as any)[propertyKey] =
//               typeof type.fromDbRow === "function"
//                 ? type.fromDbRow(value)
//                 : value;
//           }
//         } else {
//           (instance as any)[propertyKey] = value;
//         }
//       }
//       return instance;
//     };

//     // Instance toDbRow method
//     constructor.prototype.toDbRow = function () {
//       const result: any = {};
//       for (const [, field] of fields.entries()) {
//         const {
//           name,
//           propertyKey,
//           ignore,
//           includetoDbRow,
//           includeIfNull,
//           type,
//         } = field;

//         if (ignore || includetoDbRow === false) continue;

//         const value = (this as any)[propertyKey];
//         if (value === undefined || (value === null && includeIfNull === false))
//           continue;

//         if (type && value !== null) {
//           if (Array.isArray(value)) {
//             result[name!] = value.map((v: any) =>
//               typeof v?.toDbRow === "function" ? v.toDbRow() : v
//             );
//           } else {
//             result[name!] =
//               typeof value?.toDbRow === "function" ? value.toDbRow() : value;
//           }
//         } else {
//           result[name!] = value;
//         }
//       }
//       return result;
//     };
//   };
// }

// // export function Serializable() {
// //   return function <T extends { new (...args: any[]): {} }>(
// //     constructor: T
// //   ): void {
// //     const map = classFieldMap.get(constructor);
// //     if (!map) return;

// //     (constructor as any).fromDbRow = function (json: any) {
// //       const instance = new constructor();
// //       for (const [, { propertyKey, key, type, isArray }] of map.entries()) {
// //         const value = (json as any)[key!];
// //         if (value === undefined) continue;

// //         if (type) {
// //           if (isArray && Array.isArray(value)) {
// //             (instance as any)[propertyKey] = value.map((v: any) =>
// //               typeof type.fromDbRow === "function" ? type.fromDbRow(v) : v
// //             );
// //           } else if (!isArray) {
// //             (instance as any)[propertyKey] =
// //               typeof type.fromDbRow === "function"
// //                 ? type.fromDbRow(value)
// //                 : value;
// //           }
// //         } else {
// //           (instance as any)[propertyKey] = value;
// //         }
// //       }
// //       return instance;
// //     };

// //     constructor.prototype.toDbRow = function () {
// //       const result: any = {};
// //       for (const [, { propertyKey, key, type, isArray }] of map.entries()) {
// //         const value = this[propertyKey];
// //         if (value === undefined) continue;

// //         if (type) {
// //           if (isArray && Array.isArray(value)) {
// //             result[key!] = value.map((v: any) =>
// //               typeof v.toDbRow === "function" ? v.toDbRow() : v
// //             );
// //           } else {
// //             result[key!] =
// //               typeof value?.toDbRow === "function" ? value.toDbRow() : value;
// //           }
// //         } else {
// //           result[key!] = value;
// //         }
// //       }
// //       return result;
// //     };
// //   };
// // }
