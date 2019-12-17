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
const XHR_1 = require("./XHR")
const models = require("../model/models")
class iccHelementApi {
  constructor(host, headers, fetchImpl) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR_1.XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }
  setHeaders(h) {
    this.headers = h
  }
  handleError(e) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }
  createHealthElement(body) {
    let _body = null
    _body = body
    const _url = this.host + "/helement" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthElementDto(doc.body))
      .catch(err => this.handleError(err))
  }
  deleteHealthElements(healthElementIds) {
    let _body = null
    const _url =
      this.host +
      "/helement/{healthElementIds}".replace("{healthElementIds}", healthElementIds + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body.map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  filterBy(body) {
    let _body = null
    _body = body
    const _url = this.host + "/helement/filter" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body.map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }
  findByHCPartyPatientSecretFKeys(hcPartyId, secretFKeys) {
    let _body = null
    const _url =
      this.host +
      "/helement/byHcPartySecretForeignKeys" +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + hcPartyId : "") +
      (secretFKeys ? "&secretFKeys=" + secretFKeys : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body.map(it => new models.HealthElementDto(it)))
      .catch(err => this.handleError(err))
  }
  findDelegationsStubsByHCPartyPatientSecretFKeys(hcPartyId, secretFKeys) {
    let _body = null
    const _url =
      this.host +
      "/helement/byHcPartySecretForeignKeys/delegations" +
      "?ts=" +
      new Date().getTime() +
      (hcPartyId ? "&hcPartyId=" + hcPartyId : "") +
      (secretFKeys ? "&secretFKeys=" + secretFKeys : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body.map(it => new models.IcureStubDto(it)))
      .catch(err => this.handleError(err))
  }
  getHealthElement(healthElementId) {
    let _body = null
    const _url =
      this.host +
      "/helement/{healthElementId}".replace("{healthElementId}", healthElementId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthElementDto(doc.body))
      .catch(err => this.handleError(err))
  }
  modifyHealthElement(body) {
    let _body = null
    _body = body
    const _url = this.host + "/helement" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthElementDto(doc.body))
      .catch(err => this.handleError(err))
  }
  modifyHealthElements(body) {
    let _body = null
    _body = body
    const _url = this.host + "/helement/batch" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body.map(it => new models.HealthElementDto(it)))
      .catch(err => this.handleError(err))
  }
  newDelegations(healthElementId, body) {
    let _body = null
    _body = body
    const _url =
      this.host +
      "/helement/{healthElementId}/delegate".replace("{healthElementId}", healthElementId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.HealthElementDto(doc.body))
      .catch(err => this.handleError(err))
  }
  setHealthElementsDelegations(body) {
    let _body = null
    _body = body
    const _url = this.host + "/helement/delegations" + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR_1.XHR.Header("Content-Type", "application/json"))
    return XHR_1.XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }
}
exports.iccHelementApi = iccHelementApi
//# sourceMappingURL=iccHelementApi.js.map