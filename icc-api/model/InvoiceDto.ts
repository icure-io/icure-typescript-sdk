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
import { CodeStubDto } from "./CodeStubDto"
import { DelegationDto } from "./DelegationDto"
import { IdentityDocumentReaderDto } from "./IdentityDocumentReaderDto"
import { InvoicingCodeDto } from "./InvoicingCodeDto"
import { PaymentDto } from "./PaymentDto"

export class InvoiceDto {
  constructor(json: JSON | any) {
    Object.assign(this as InvoiceDto, json)
  }

  id?: string
  rev?: string
  created?: number
  modified?: number
  author?: string
  responsible?: string
  medicalLocationId?: string
  tags?: Array<CodeStubDto>
  codes?: Array<CodeStubDto>
  endOfLife?: number
  deletionDate?: number
  invoiceDate?: number
  sentDate?: number
  printedDate?: number
  invoicingCodes?: Array<InvoicingCodeDto>
  receipts?: { [key: string]: string }
  recipientType?: string
  recipientId?: string
  invoiceReference?: string
  thirdPartyReference?: string
  thirdPartyPaymentJustification?: string
  thirdPartyPaymentReason?: string
  reason?: string
  invoiceType?: InvoiceDto.InvoiceTypeEnum
  sentMediumType?: InvoiceDto.SentMediumTypeEnum
  interventionType?: InvoiceDto.InterventionTypeEnum
  groupId?: string
  paymentType?: InvoiceDto.PaymentTypeEnum
  paid?: number
  payments?: Array<PaymentDto>
  gnotionNihii?: string
  gnotionSsin?: string
  gnotionLastName?: string
  gnotionFirstName?: string
  gnotionCdHcParty?: string
  invoicePeriod?: number
  careProviderType?: string
  internshipNihii?: string
  internshipSsin?: string
  internshipLastName?: string
  internshipFirstName?: string
  internshipCdHcParty?: string
  internshipCbe?: string
  supervisorNihii?: string
  supervisorSsin?: string
  supervisorLastName?: string
  supervisorFirstName?: string
  supervisorCdHcParty?: string
  supervisorCbe?: string
  error?: string
  encounterLocationName?: string
  encounterLocationNihii?: string
  encounterLocationNorm?: number
  longDelayJustification?: number
  correctiveInvoiceId?: string
  correctedInvoiceId?: string
  creditNote?: boolean
  creditNoteRelatedInvoiceId?: string
  idDocument?: IdentityDocumentReaderDto
  cancelReason?: string
  cancelDate?: number
  secretForeignKeys?: Array<string>
  cryptedForeignKeys?: { [key: string]: Array<DelegationDto> }
  delegations?: { [key: string]: Array<DelegationDto> }
  encryptionKeys?: { [key: string]: Array<DelegationDto> }
  encryptedSelf?: string
}
export namespace InvoiceDto {
  export type InvoiceTypeEnum =
    | "patient"
    | "mutualfund"
    | "payingagency"
    | "insurance"
    | "efact"
    | "other"
  export const InvoiceTypeEnum = {
    Patient: "patient" as InvoiceTypeEnum,
    Mutualfund: "mutualfund" as InvoiceTypeEnum,
    Payingagency: "payingagency" as InvoiceTypeEnum,
    Insurance: "insurance" as InvoiceTypeEnum,
    Efact: "efact" as InvoiceTypeEnum,
    Other: "other" as InvoiceTypeEnum
  }
  export type SentMediumTypeEnum = "cdrom" | "eattest" | "efact" | "email" | "mediprima" | "paper"
  export const SentMediumTypeEnum = {
    Cdrom: "cdrom" as SentMediumTypeEnum,
    Eattest: "eattest" as SentMediumTypeEnum,
    Efact: "efact" as SentMediumTypeEnum,
    Email: "email" as SentMediumTypeEnum,
    Mediprima: "mediprima" as SentMediumTypeEnum,
    Paper: "paper" as SentMediumTypeEnum
  }
  export type InterventionTypeEnum = "total" | "userfees"
  export const InterventionTypeEnum = {
    Total: "total" as InterventionTypeEnum,
    Userfees: "userfees" as InterventionTypeEnum
  }
  export type PaymentTypeEnum =
    | "cash"
    | "wired"
    | "insurance"
    | "creditcard"
    | "debitcard"
    | "paypal"
    | "bitcoin"
    | "other"
  export const PaymentTypeEnum = {
    Cash: "cash" as PaymentTypeEnum,
    Wired: "wired" as PaymentTypeEnum,
    Insurance: "insurance" as PaymentTypeEnum,
    Creditcard: "creditcard" as PaymentTypeEnum,
    Debitcard: "debitcard" as PaymentTypeEnum,
    Paypal: "paypal" as PaymentTypeEnum,
    Bitcoin: "bitcoin" as PaymentTypeEnum,
    Other: "other" as PaymentTypeEnum
  }
}
