"use strict"
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true })
class DocumentDto {
  constructor(json) {
    Object.assign(this, json)
  }
}
exports.DocumentDto = DocumentDto
;(function(DocumentDto) {
  let DocumentLocationEnum
  ;(function(DocumentLocationEnum) {
    DocumentLocationEnum[(DocumentLocationEnum["Annex"] = "annex")] = "Annex"
    DocumentLocationEnum[(DocumentLocationEnum["Body"] = "body")] = "Body"
  })(
    (DocumentLocationEnum =
      DocumentDto.DocumentLocationEnum || (DocumentDto.DocumentLocationEnum = {}))
  )
  let DocumentTypeEnum
  ;(function(DocumentTypeEnum) {
    DocumentTypeEnum[(DocumentTypeEnum["Admission"] = "admission")] = "Admission"
    DocumentTypeEnum[(DocumentTypeEnum["Alert"] = "alert")] = "Alert"
    DocumentTypeEnum[(DocumentTypeEnum["BvtSample"] = "bvt_sample")] = "BvtSample"
    DocumentTypeEnum[(DocumentTypeEnum["Clinicalpath"] = "clinicalpath")] = "Clinicalpath"
    DocumentTypeEnum[(DocumentTypeEnum["Clinicalsummary"] = "clinicalsummary")] = "Clinicalsummary"
    DocumentTypeEnum[(DocumentTypeEnum["Contactreport"] = "contactreport")] = "Contactreport"
    DocumentTypeEnum[(DocumentTypeEnum["Quote"] = "quote")] = "Quote"
    DocumentTypeEnum[(DocumentTypeEnum["Invoice"] = "invoice")] = "Invoice"
    DocumentTypeEnum[(DocumentTypeEnum["Death"] = "death")] = "Death"
    DocumentTypeEnum[(DocumentTypeEnum["Discharge"] = "discharge")] = "Discharge"
    DocumentTypeEnum[(DocumentTypeEnum["Dischargereport"] = "dischargereport")] = "Dischargereport"
    DocumentTypeEnum[(DocumentTypeEnum["EbirthBabyMedicalform"] = "ebirth_baby_medicalform")] =
      "EbirthBabyMedicalform"
    DocumentTypeEnum[(DocumentTypeEnum["EbirthBabyNotification"] = "ebirth_baby_notification")] =
      "EbirthBabyNotification"
    DocumentTypeEnum[(DocumentTypeEnum["EbirthMotherMedicalform"] = "ebirth_mother_medicalform")] =
      "EbirthMotherMedicalform"
    DocumentTypeEnum[
      (DocumentTypeEnum["EbirthMotherNotification"] = "ebirth_mother_notification")
    ] =
      "EbirthMotherNotification"
    DocumentTypeEnum[(DocumentTypeEnum["EcareSafeConsultation"] = "ecare_safe_consultation")] =
      "EcareSafeConsultation"
    DocumentTypeEnum[(DocumentTypeEnum["Epidemiology"] = "epidemiology")] = "Epidemiology"
    DocumentTypeEnum[(DocumentTypeEnum["Intervention"] = "intervention")] = "Intervention"
    DocumentTypeEnum[(DocumentTypeEnum["Labrequest"] = "labrequest")] = "Labrequest"
    DocumentTypeEnum[(DocumentTypeEnum["Labresult"] = "labresult")] = "Labresult"
    DocumentTypeEnum[(DocumentTypeEnum["Medicaladvisoragreement"] = "medicaladvisoragreement")] =
      "Medicaladvisoragreement"
    DocumentTypeEnum[(DocumentTypeEnum["Medicationschemeelement"] = "medicationschemeelement")] =
      "Medicationschemeelement"
    DocumentTypeEnum[(DocumentTypeEnum["Note"] = "note")] = "Note"
    DocumentTypeEnum[(DocumentTypeEnum["Notification"] = "notification")] = "Notification"
    DocumentTypeEnum[
      (DocumentTypeEnum["Pharmaceuticalprescription"] = "pharmaceuticalprescription")
    ] =
      "Pharmaceuticalprescription"
    DocumentTypeEnum[(DocumentTypeEnum["Prescription"] = "prescription")] = "Prescription"
    DocumentTypeEnum[(DocumentTypeEnum["Productdelivery"] = "productdelivery")] = "Productdelivery"
    DocumentTypeEnum[(DocumentTypeEnum["Quickdischargereport"] = "quickdischargereport")] =
      "Quickdischargereport"
    DocumentTypeEnum[
      (DocumentTypeEnum["Radiationexposuremonitoring"] = "radiationexposuremonitoring")
    ] =
      "Radiationexposuremonitoring"
    DocumentTypeEnum[(DocumentTypeEnum["Referral"] = "referral")] = "Referral"
    DocumentTypeEnum[(DocumentTypeEnum["Report"] = "report")] = "Report"
    DocumentTypeEnum[(DocumentTypeEnum["Request"] = "request")] = "Request"
    DocumentTypeEnum[(DocumentTypeEnum["Result"] = "result")] = "Result"
    DocumentTypeEnum[(DocumentTypeEnum["Sumehr"] = "sumehr")] = "Sumehr"
    DocumentTypeEnum[(DocumentTypeEnum["Telemonitoring"] = "telemonitoring")] = "Telemonitoring"
    DocumentTypeEnum[(DocumentTypeEnum["Template"] = "template")] = "Template"
    DocumentTypeEnum[(DocumentTypeEnum["TemplateAdmin"] = "template_admin")] = "TemplateAdmin"
    DocumentTypeEnum[(DocumentTypeEnum["Treatmentsuspension"] = "treatmentsuspension")] =
      "Treatmentsuspension"
    DocumentTypeEnum[(DocumentTypeEnum["Vaccination"] = "vaccination")] = "Vaccination"
  })((DocumentTypeEnum = DocumentDto.DocumentTypeEnum || (DocumentDto.DocumentTypeEnum = {})))
  let DocumentStatusEnum
  ;(function(DocumentStatusEnum) {
    DocumentStatusEnum[(DocumentStatusEnum["Draft"] = "draft")] = "Draft"
    DocumentStatusEnum[(DocumentStatusEnum["Finalized"] = "finalized")] = "Finalized"
    DocumentStatusEnum[(DocumentStatusEnum["PendingReview"] = "pending_review")] = "PendingReview"
    DocumentStatusEnum[(DocumentStatusEnum["Reviewed"] = "reviewed")] = "Reviewed"
    DocumentStatusEnum[(DocumentStatusEnum["PendingSignature"] = "pending_signature")] =
      "PendingSignature"
    DocumentStatusEnum[(DocumentStatusEnum["Signed"] = "signed")] = "Signed"
    DocumentStatusEnum[(DocumentStatusEnum["Canceled"] = "canceled")] = "Canceled"
    DocumentStatusEnum[(DocumentStatusEnum["Sent"] = "sent")] = "Sent"
    DocumentStatusEnum[(DocumentStatusEnum["Delivered"] = "delivered")] = "Delivered"
  })((DocumentStatusEnum = DocumentDto.DocumentStatusEnum || (DocumentDto.DocumentStatusEnum = {})))
})((DocumentDto = exports.DocumentDto || (exports.DocumentDto = {})))
//# sourceMappingURL=DocumentDto.js.map
