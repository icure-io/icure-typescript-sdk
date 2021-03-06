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
import { Filter } from './filters'
import { HealthElement } from '../../icc-api/model/HealthElement'
import { AbstractFilterHealthElement } from '../../icc-api/model/AbstractFilterHealthElement'

export class HealthElementByHcPartySecretForeignKeysFilter extends AbstractFilterHealthElement {
  $type: string = 'HealthElementByHcPartySecretForeignKeysFilter'
  constructor(json: JSON | any) {
    super(json)

    Object.assign(this as HealthElementByHcPartySecretForeignKeysFilter, json)
  }

  desc?: string
  healthcarePartyId?: string
  patientSecretForeignKeys?: Array<string>
}
