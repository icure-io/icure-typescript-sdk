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
import { MimeAttachment } from './MimeAttachment'

export class EmailOrSmsMessage {
  constructor(json: JSON | any) {
    Object.assign(this as EmailOrSmsMessage, json)
  }

  attachments?: Array<MimeAttachment>
  destination?: string
  destinationIsNotPatient?: boolean
  destinationName?: string
  sendCopyToSender?: boolean
  senderName?: string
  replyToEmail?: string
  content?: string
  messageId?: string
  patientId?: string
  senderId?: string
  subject?: string
  type?: EmailOrSmsMessage.TypeEnum
}
export namespace EmailOrSmsMessage {
  export type TypeEnum = 'EMAIL' | 'SMS'
  export const TypeEnum = {
    EMAIL: 'EMAIL' as TypeEnum,
    SMS: 'SMS' as TypeEnum,
  }
}
