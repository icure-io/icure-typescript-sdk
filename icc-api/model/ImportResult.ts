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
import { Contact } from './Contact'
import { Document } from './Document'
import { Form } from './Form'
import { HealthElement } from './HealthElement'
import { HealthcareParty } from './HealthcareParty'
import { MimeAttachment } from './MimeAttachment'
import { Patient } from './Patient'

export class ImportResult {
  constructor(json: JSON | any) {
    Object.assign(this as ImportResult, json)
  }

  patient?: Patient
  hes?: Array<HealthElement>
  ctcs?: Array<Contact>
  warnings?: Array<string>
  errors?: Array<string>
  forms?: Array<Form>
  hcps?: Array<HealthcareParty>
  documents?: Array<Document>
  attachments?: { [key: string]: MimeAttachment }
}
