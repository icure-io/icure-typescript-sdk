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
import { CareTeamMembership } from "./CareTeamMembership"
import { CodeStub } from "./CodeStub"

/**
 * List of healthcare approaches.
 */
import { decodeBase64 } from "./ModelHelper"

export class PlanOfAction {
  constructor(json: JSON | any) {
    Object.assign(this as PlanOfAction, json)
  }

  id?: string
  /**
   * The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  created?: number
  /**
   * The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  modified?: number
  /**
   * The id of the User that has created this form, will be filled automatically if missing. Not enforced by the application server.
   */
  author?: string
  /**
   * The id of the HealthcareParty that is responsible for this form, will be filled automatically if missing. Not enforced by the application server.
   */
  responsible?: string
  /**
   * The id of the medical location where this entity was created.
   */
  medicalLocationId?: string
  /**
   * A tag is an item from a codification system that qualifies an entity as being member of a certain class, whatever the value it might have taken. If the tag qualifies the content of a field, it means that whatever the content of the field, the tag will always apply. For example, the label of a field is qualified using a tag. LOINC is a codification system typically used for tags.
   */
  tags?: Array<CodeStub>
  /**
   * A code is an item from a codification system that qualifies the content of this entity. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes
   */
  codes?: Array<CodeStub>
  /**
   * Soft delete (unix epoch in ms) timestamp of the object.
   */
  endOfLife?: number
  /**
   * The id of the hcp who prescribed this healthcare approach
   */
  prescriberId?: string
  /**
   * The date (unix epoch in ms) when the healthcare approach is noted to have started and also closes on the same date
   */
  valueDate?: number
  /**
   * The date (unix epoch in ms) of the start of the healthcare approach.
   */
  openingDate?: number
  /**
   * The date (unix epoch in ms) marking the end of the healthcare approach.
   */
  closingDate?: number
  /**
   * The date (unix epoch in ms) when the healthcare approach has to be carried out.
   */
  deadlineDate?: number
  /**
   * The name of the healthcare approach.
   */
  name?: string
  /**
   * Description of the healthcare approach.
   */
  descr?: string
  /**
   * Note about the healthcare approach.
   */
  note?: string
  /**
   * Id of the opening contact when the healthcare approach was created.
   */
  idOpeningContact?: string
  /**
   * Id of the closing contact for the healthcare approach.
   */
  idClosingContact?: string
  /**
   * bit 0: active/inactive, bit 1: relevant/irrelevant, bit 2 : present/absent, ex: 0 = active,relevant and present
   */
  status?: number
  documentIds?: Array<string>
  /**
   * The number of individual cares already performed in the course of this healthcare approach
   */
  numberOfCares?: number
  /**
   * Members of the careteam involved in this approach
   */
  careTeamMemberships?: Array<CareTeamMembership>
  relevant?: boolean
  /**
   * The base64 encoded data of this object, formatted as JSON and encrypted in AES using the random master key from encryptionKeys.
   */
  encryptedSelf?: string
}
