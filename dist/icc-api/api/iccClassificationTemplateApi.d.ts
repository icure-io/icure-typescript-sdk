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
import { XHR } from "./XHR"
import * as models from "../model/models"
export declare class iccClassificationTemplateApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  )
  setHeaders(h: Array<XHR.Header>): void
  handleError(e: XHR.Data): void
  createClassificationTemplate(
    body?: models.ClassificationTemplateDto
  ): Promise<models.ClassificationTemplateDto | any>
  deleteClassificationTemplates(classificationTemplateIds: string): Promise<Array<string> | any>
  findByHCPartyPatientSecretFKeys(
    hcPartyId?: string,
    secretFKeys?: string
  ): Promise<Array<models.ClassificationDto> | any>
  getClassificationTemplate(
    classificationTemplateId: string
  ): Promise<models.ClassificationTemplateDto | any>
  getClassificationTemplateByIds(
    ids: string
  ): Promise<Array<models.ClassificationTemplateDto> | any>
  listClassificationTemplates(
    startKey?: string,
    startDocumentId?: string,
    limit?: string
  ): Promise<models.ClassificationTemplatePaginatedList | any>
  modifyClassificationTemplate(
    body?: models.ClassificationTemplateDto
  ): Promise<models.ClassificationTemplateDto | any>
  newDelegations(
    classificationTemplateId: string,
    body?: Array<models.DelegationDto>
  ): Promise<models.ClassificationTemplateDto | any>
}
