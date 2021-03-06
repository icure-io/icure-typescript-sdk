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
import { AbstractFilterService } from './AbstractFilterService'
import { Predicate } from './Predicate'

export class FilterChainService {
  $type: string = 'FilterChain'
  constructor(json: JSON | any) {
    Object.assign(this as FilterChainService, json)
  }

  filter?: AbstractFilterService
  predicate?: Predicate
}
