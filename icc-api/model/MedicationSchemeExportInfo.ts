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
import { HealthcareParty } from './HealthcareParty'
import { Service } from './Service'

export class MedicationSchemeExportInfo {
  constructor(json: JSON | any) {
    Object.assign(this as MedicationSchemeExportInfo, json)
  }

  secretForeignKeys?: Array<string>
  services?: Array<Service>
  recipient?: HealthcareParty
  comment?: string
}