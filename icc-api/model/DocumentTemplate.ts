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
import { CodeStub } from './CodeStub'
import { DocumentGroup } from './DocumentGroup'

import { b64_2ab } from './ModelHelper'
export class DocumentTemplate {
  constructor(json: JSON | any) {
    Object.assign(this as DocumentTemplate, json, json.attachment ? { attachment: b64_2ab(json.attachment) } : {})
  }

  id?: string
  rev?: string
  /**
   * The timestamp (unix epoch in ms) of creation of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  created?: number
  /**
   * The date (unix epoch in ms) of the latest modification of this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  modified?: number
  /**
   * The id of the User that has created this entity, will be filled automatically if missing. Not enforced by the application server.
   */
  author?: string
  /**
   * The id of the HealthcareParty that is responsible for this entity, will be filled automatically if missing. Not enforced by the application server.
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
   * hard delete (unix epoch in ms) timestamp of the object. Filled automatically when deletePatient is called.
   */
  deletionDate?: number
  attachment?: ArrayBuffer
  /**
   * The type of document, ex: admission, clinical path, document report,invoice, etc.
   */
  documentType?: DocumentTemplate.DocumentTypeEnum
  mainUti?: string
  name?: string
  otherUtis?: Array<string>
  attachmentId?: string
  version?: DocumentTemplate.VersionEnum
  owner?: string
  guid?: string
  group?: DocumentGroup
  descr?: string
  disabled?: string
  specialty?: CodeStub
}
export namespace DocumentTemplate {
  export type DocumentTypeEnum =
    | 'admission'
    | 'alert'
    | 'bvt_sample'
    | 'clinicalpath'
    | 'clinicalsummary'
    | 'contactreport'
    | 'quote'
    | 'invoice'
    | 'death'
    | 'discharge'
    | 'dischargereport'
    | 'ebirth_baby_medicalform'
    | 'ebirth_baby_notification'
    | 'ebirth_mother_medicalform'
    | 'ebirth_mother_notification'
    | 'ecare_safe_consultation'
    | 'epidemiology'
    | 'intervention'
    | 'labrequest'
    | 'labresult'
    | 'medicaladvisoragreement'
    | 'medicationschemeelement'
    | 'note'
    | 'notification'
    | 'pharmaceuticalprescription'
    | 'prescription'
    | 'productdelivery'
    | 'quickdischargereport'
    | 'radiationexposuremonitoring'
    | 'referral'
    | 'report'
    | 'request'
    | 'result'
    | 'sumehr'
    | 'telemonitoring'
    | 'template'
    | 'template_admin'
    | 'treatmentsuspension'
    | 'vaccination'
  export const DocumentTypeEnum = {
    Admission: 'admission' as DocumentTypeEnum,
    Alert: 'alert' as DocumentTypeEnum,
    BvtSample: 'bvt_sample' as DocumentTypeEnum,
    Clinicalpath: 'clinicalpath' as DocumentTypeEnum,
    Clinicalsummary: 'clinicalsummary' as DocumentTypeEnum,
    Contactreport: 'contactreport' as DocumentTypeEnum,
    Quote: 'quote' as DocumentTypeEnum,
    Invoice: 'invoice' as DocumentTypeEnum,
    Death: 'death' as DocumentTypeEnum,
    Discharge: 'discharge' as DocumentTypeEnum,
    Dischargereport: 'dischargereport' as DocumentTypeEnum,
    EbirthBabyMedicalform: 'ebirth_baby_medicalform' as DocumentTypeEnum,
    EbirthBabyNotification: 'ebirth_baby_notification' as DocumentTypeEnum,
    EbirthMotherMedicalform: 'ebirth_mother_medicalform' as DocumentTypeEnum,
    EbirthMotherNotification: 'ebirth_mother_notification' as DocumentTypeEnum,
    EcareSafeConsultation: 'ecare_safe_consultation' as DocumentTypeEnum,
    Epidemiology: 'epidemiology' as DocumentTypeEnum,
    Intervention: 'intervention' as DocumentTypeEnum,
    Labrequest: 'labrequest' as DocumentTypeEnum,
    Labresult: 'labresult' as DocumentTypeEnum,
    Medicaladvisoragreement: 'medicaladvisoragreement' as DocumentTypeEnum,
    Medicationschemeelement: 'medicationschemeelement' as DocumentTypeEnum,
    Note: 'note' as DocumentTypeEnum,
    Notification: 'notification' as DocumentTypeEnum,
    Pharmaceuticalprescription: 'pharmaceuticalprescription' as DocumentTypeEnum,
    Prescription: 'prescription' as DocumentTypeEnum,
    Productdelivery: 'productdelivery' as DocumentTypeEnum,
    Quickdischargereport: 'quickdischargereport' as DocumentTypeEnum,
    Radiationexposuremonitoring: 'radiationexposuremonitoring' as DocumentTypeEnum,
    Referral: 'referral' as DocumentTypeEnum,
    Report: 'report' as DocumentTypeEnum,
    Request: 'request' as DocumentTypeEnum,
    Result: 'result' as DocumentTypeEnum,
    Sumehr: 'sumehr' as DocumentTypeEnum,
    Telemonitoring: 'telemonitoring' as DocumentTypeEnum,
    Template: 'template' as DocumentTypeEnum,
    TemplateAdmin: 'template_admin' as DocumentTypeEnum,
    Treatmentsuspension: 'treatmentsuspension' as DocumentTypeEnum,
    Vaccination: 'vaccination' as DocumentTypeEnum,
  }
  export type VersionEnum = 'V1_0_0'
  export const VersionEnum = {
    _0: 'V1_0_0' as VersionEnum,
  }
}
