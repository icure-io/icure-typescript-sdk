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
import { PermissionItem } from "./PermissionItem"

/**
 * If permission to modify patient data is granted or revoked
 */
import { decodeBase64 } from "./ModelHelper"

export class Permission {
  constructor(json: JSON | any) {
    Object.assign(this as Permission, json)
  }

  /**
   * Granted permissions.
   */
  grants?: Array<PermissionItem>
  /**
   * Revoked permissions.
   */
  revokes?: Array<PermissionItem>
}
