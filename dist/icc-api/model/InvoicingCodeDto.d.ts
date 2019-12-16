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
export declare class InvoicingCodeDto {
  constructor(json: JSON | any)
  dateCode?: number
  id?: string
  logicalId?: string
  contactId?: string
  serviceId?: string
  tarificationId?: string
  label?: string
  paymentType?: InvoicingCodeDto.PaymentTypeEnum
  paid?: number
  totalAmount?: number
  reimbursement?: number
  patientIntervention?: number
  conventionAmount?: number
  doctorSupplement?: number
  vat?: number
  transplantationCode?: number
  code?: string
  error?: string
  contract?: string
  contractDate?: number
  units?: number
  side?: number
  timeOfDay?: number
  eidReadingHour?: number
  eidReadingValue?: string
  override3rdPayerCode?: number
  override3rdPayerReason?: string
  prescriberNorm?: number
  percentNorm?: number
  derogationMaxNumber?: number
  prescriberNihii?: string
  relatedCode?: string
  canceled?: boolean
  accepted?: boolean
  pending?: boolean
  resent?: boolean
  archived?: boolean
  lost?: boolean
  insuranceJustification?: number
  cancelPatientInterventionReason?: number
  prescriberSsin?: string
  prescriberLastName?: string
  prescriberFirstName?: string
  prescriberCdHcParty?: string
  locationNihii?: string
  locationCdHcParty?: string
  locationService?: number
  prescriptionDate?: number
  status?: number
}
export declare namespace InvoicingCodeDto {
  enum PaymentTypeEnum {
    Wired,
    Cash,
    Insurance,
    Creditcard,
    Debitcard,
    Paypal,
    Bitcoin
  }
}
