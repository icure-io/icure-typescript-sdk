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
import { Identifier } from '../../icc-api/model/Identifier'
import { AbstractFilterService } from '../../icc-api/model/AbstractFilterService'

export class ServiceByHcPartyIdentifiersFilter extends AbstractFilterService {
  $type: string = 'ServiceByHcPartyIdentifiersFilter'
  constructor(json: JSON | any) {
    super(json)

    Object.assign(this as ServiceByHcPartyIdentifiersFilter, json)
  }

  healthcarePartyId?: string
  desc?: string
  identifiers?: Array<Identifier>
}
