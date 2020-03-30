/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export class TypedValue {
  constructor(json: JSON | any) {
    Object.assign(this as TypedValue, json)
  }

  type?: TypedValue.TypeEnum
  booleanValue?: boolean
  integerValue?: number
  doubleValue?: number
  stringValue?: string
  dateValue?: number
}
export namespace TypedValue {
  export type TypeEnum = "BOOLEAN" | "INTEGER" | "DOUBLE" | "STRING" | "DATE" | "CLOB" | "JSON"
  export const TypeEnum = {
    BOOLEAN: "BOOLEAN" as TypeEnum,
    INTEGER: "INTEGER" as TypeEnum,
    DOUBLE: "DOUBLE" as TypeEnum,
    STRING: "STRING" as TypeEnum,
    DATE: "DATE" as TypeEnum,
    CLOB: "CLOB" as TypeEnum,
    JSON: "JSON" as TypeEnum
  }
}
