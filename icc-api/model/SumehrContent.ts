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
import { HealthElement } from './HealthElement'
import { Partnership } from './Partnership'
import { PatientHealthCareParty } from './PatientHealthCareParty'
import { Service } from './Service'

export class SumehrContent {
  constructor(json: JSON | any) {
    Object.assign(this as SumehrContent, json)
  }

  services?: Array<Service>
  healthElements?: Array<HealthElement>
  partnerships?: Array<Partnership>
  patientHealthcareParties?: Array<PatientHealthCareParty>
}
