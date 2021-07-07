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
import { XHR } from './XHR'
import { AccessLog } from '../model/AccessLog'
import { DocIdentifier } from '../model/DocIdentifier'
import { PaginatedListAccessLog } from '../model/PaginatedListAccessLog'

export class IccAccesslogApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(host: string, headers: any, fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
    this.host = host
    this.headers = Object.keys(headers).map((k) => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.XHRError): never {
    throw e
  }

  /**
   *
   * @summary Creates an access log
   * @param body
   */
  createAccessLog(body?: AccessLog): Promise<AccessLog> {
    let _body = null
    _body = body

    const _url = this.host + `/accesslog` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('POST', _url, headers, _body, this.fetchImpl)
      .then((doc) => new AccessLog(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Deletes an access log
   * @param accessLogIds
   */
  deleteAccessLog(accessLogIds: string): Promise<Array<DocIdentifier>> {
    const _body = null

    const _url = this.host + `/accesslog/${encodeURIComponent(String(accessLogIds))}` + '?ts=' + new Date().getTime()
    const headers = this.headers
    return XHR.sendCommand('DELETE', _url, headers, _body, this.fetchImpl)
      .then((doc) => (doc.body as Array<JSON>).map((it) => new DocIdentifier(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary List access logs found By Healthcare Party and secret foreign keyelementIds.
   * @param hcPartyId
   * @param secretFKeys
   */
  findAccessLogsByHCPartyPatientForeignKeys(hcPartyId: string, secretFKeys: string): Promise<Array<AccessLog>> {
    const _body = null

    const _url =
      this.host +
      `/accesslog/byHcPartySecretForeignKeys` +
      '?ts=' +
      new Date().getTime() +
      (hcPartyId ? '&hcPartyId=' + encodeURIComponent(String(hcPartyId)) : '') +
      (secretFKeys ? '&secretFKeys=' + encodeURIComponent(String(secretFKeys)) : '')
    const headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl)
      .then((doc) => (doc.body as Array<JSON>).map((it) => new AccessLog(it)))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Get Paginated List of Access logs
   * @param userId A User ID
   * @param accessType The type of access (COMPUTER or USER)
   * @param startDate The start search epoch
   * @param startKey The start key for pagination
   * @param startDocumentId A patient document ID
   * @param limit Number of rows
   * @param descending Descending order
   */
  findByUserAfterDate(
    userId: string,
    accessType?: string,
    startDate?: number,
    startKey?: string,
    startDocumentId?: string,
    limit?: number,
    descending?: boolean
  ): Promise<PaginatedListAccessLog> {
    let _body = null

    const _url =
      this.host +
      `/accesslog/byUser` +
      '?ts=' +
      new Date().getTime() +
      (userId ? '&userId=' + encodeURIComponent(String(userId)) : '') +
      (accessType ? '&accessType=' + encodeURIComponent(String(accessType)) : '') +
      (startDate ? '&startDate=' + encodeURIComponent(String(startDate)) : '') +
      (startKey ? '&startKey=' + encodeURIComponent(String(startKey)) : '') +
      (startDocumentId ? '&startDocumentId=' + encodeURIComponent(String(startDocumentId)) : '') +
      (limit ? '&limit=' + encodeURIComponent(String(limit)) : '') +
      (descending ? '&descending=' + encodeURIComponent(String(descending)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl)
      .then((doc) => new PaginatedListAccessLog(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Gets an access log
   * @param accessLogId
   */
  getAccessLog(accessLogId: string): Promise<AccessLog> {
    let _body = null

    const _url = this.host + `/accesslog/${encodeURIComponent(String(accessLogId))}` + '?ts=' + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl)
      .then((doc) => new AccessLog(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Lists access logs
   * @param fromEpoch
   * @param toEpoch
   * @param startKey
   * @param startDocumentId
   * @param limit
   * @param descending
   */
  listAccessLogs(
    fromEpoch?: number,
    toEpoch?: number,
    startKey?: number,
    startDocumentId?: string,
    limit?: number,
    descending?: boolean
  ): Promise<PaginatedListAccessLog> {
    let _body = null

    const _url =
      this.host +
      `/accesslog` +
      '?ts=' +
      new Date().getTime() +
      (fromEpoch ? '&fromEpoch=' + encodeURIComponent(String(fromEpoch)) : '') +
      (toEpoch ? '&toEpoch=' + encodeURIComponent(String(toEpoch)) : '') +
      (startKey ? '&startKey=' + encodeURIComponent(String(startKey)) : '') +
      (startDocumentId ? '&startDocumentId=' + encodeURIComponent(String(startDocumentId)) : '') +
      (limit ? '&limit=' + encodeURIComponent(String(limit)) : '') +
      (descending ? '&descending=' + encodeURIComponent(String(descending)) : '')
    let headers = this.headers
    return XHR.sendCommand('GET', _url, headers, _body, this.fetchImpl)
      .then((doc) => new PaginatedListAccessLog(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }

  /**
   *
   * @summary Modifies an access log
   * @param body
   */
  modifyAccessLog(body?: AccessLog): Promise<AccessLog> {
    let _body = null
    _body = body

    const _url = this.host + `/accesslog` + '?ts=' + new Date().getTime()
    let headers = this.headers
    headers = headers.filter((h) => h.header !== 'Content-Type').concat(new XHR.Header('Content-Type', 'application/json'))
    return XHR.sendCommand('PUT', _url, headers, _body, this.fetchImpl)
      .then((doc) => new AccessLog(doc.body as JSON))
      .catch((err) => this.handleError(err))
  }
}