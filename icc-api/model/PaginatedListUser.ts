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
import { PaginatedDocumentKeyIdPairObject } from './PaginatedDocumentKeyIdPairObject'
import { User } from './User'

export class PaginatedListUser {
  constructor(json: JSON | any) {
    Object.assign(this as PaginatedListUser, json)
  }

  pageSize?: number
  totalSize?: number
  rows?: Array<User>
  nextKeyPair?: PaginatedDocumentKeyIdPairObject
}
