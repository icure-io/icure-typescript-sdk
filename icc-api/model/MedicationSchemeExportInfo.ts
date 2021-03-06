/**
 * iCure Data Stack API Documentation
 * The iCure Data Stack Application API is the native interface to iCure. This version is obsolete, please use v2.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HealthcareParty } from './HealthcareParty'
import { Service } from './Service'

export class MedicationSchemeExportInfo {
  constructor(json: JSON | any) {
    Object.assign(this as MedicationSchemeExportInfo, json)
  }

  secretForeignKeys?: Array<string>
  services?: Array<Service>
  serviceAuthors?: Array<HealthcareParty>
  recipient?: HealthcareParty
  comment?: string
}
