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
import { Device } from '../../icc-api/model/Device'
import { AbstractFilterDevice } from '../../icc-api/model/AbstractFilterDevice'

export class DeviceByHcPartyFilter extends AbstractFilterDevice {
  $type: string = 'DeviceByHcPartyFilter'
  constructor(json: JSON | any) {
    super(json)

    Object.assign(this as DeviceByHcPartyFilter, json)
  }

  desc?: string
  responsibleId?: string
}
