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
import * as models from "./models"
export declare class CalendarItemDto {
  constructor(json: JSON | any)
  id?: string
  rev?: string
  deletionDate?: number
  created?: number
  modified?: number
  endOfLife?: number
  author?: string
  responsible?: string
  medicalLocationId?: string
  encryptedSelf?: string
  codes?: Array<models.CodeDto>
  tags?: Array<models.CodeDto>
  secretForeignKeys?: Array<string>
  cryptedForeignKeys?: {
    [key: string]: Array<models.DelegationDto>
  }
  delegations?: {
    [key: string]: Array<models.DelegationDto>
  }
  encryptionKeys?: {
    [key: string]: Array<models.DelegationDto>
  }
  title?: string
  calendarItemTypeId?: string
  masterCalendarItemId?: string
  patientId?: string
  important?: boolean
  homeVisit?: boolean
  phoneNumber?: string
  placeId?: string
  address?: models.AddressDto
  addressText?: string
  startTime?: number
  endTime?: number
  confirmationTime?: number
  confirmationId?: string
  duration?: number
  allDay?: boolean
  details?: string
  agendaId?: string
  wasMigrated?: boolean
  meetingTags?: Array<models.CalendarItemTagDto>
  flowItem?: models.FlowItemDto
}
