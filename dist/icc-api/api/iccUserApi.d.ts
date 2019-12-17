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
export declare class iccUserApi {
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
  assignHealthcareParty(healthcarePartyId: string): Promise<models.UserDto | any>
  checkPassword(password?: string): Promise<boolean | any>
  createUser(body?: models.UserDto): Promise<models.UserDto | any>
  deleteUser(userId: string): Promise<Array<string> | any>
  findByHcpartyId(id: string): Promise<Array<string> | any>
  forgottenPassword(email: string, body?: models.EmailTemplateDto): Promise<boolean | any>
  getCurrentSession(): Promise<string | any>
  getCurrentUser(): Promise<models.UserDto | any>
  getMatchingUsers(): Promise<Array<models.UserDto> | any>
  getUser(userId: string): Promise<models.UserDto | any>
  getUserByEmail(email: string): Promise<models.UserDto | any>
  listUsers(
    startKey?: string,
    startDocumentId?: string,
    limit?: string
  ): Promise<models.UserPaginatedList | any>
  modifyProperties(userId: string, body?: Array<models.PropertyDto>): Promise<models.UserDto | any>
  modifyUser(body?: models.UserDto): Promise<models.UserDto | any>
}