/**
 * Ikont Web Api tttt
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

// @ts-ignore
import { ClientDto } from '../model/clientDto';
// @ts-ignore
import { ClientExistsResponseDto } from '../model/clientExistsResponseDto';
// @ts-ignore
import { ClientListDto } from '../model/clientListDto';
// @ts-ignore
import { FailedFileUploadDto } from '../model/failedFileUploadDto';
// @ts-ignore
import { FullClientDto } from '../model/fullClientDto';
// @ts-ignore
import { IdRepsponeDto } from '../model/idRepsponeDto';
// @ts-ignore
import { IdsRepsponeDto } from '../model/idsRepsponeDto';
// @ts-ignore
import { PositionDto } from '../model/positionDto';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable({
  providedIn: 'root',
})
export class ClientManagementService {
  protected basePath = 'http://localhost';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  // @ts-ignore
  private addToHttpParams(
    httpParams: HttpParams,
    value: any,
    key?: string
  ): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(
    httpParams: HttpParams,
    value?: any,
    key?: string
  ): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        (value as any[]).forEach(
          (elem) =>
            (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
        );
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(
            key,
            (value as Date).toISOString().substr(0, 10)
          );
        } else {
          throw Error('key may not be null if value is Date');
        }
      } else {
        Object.keys(value).forEach(
          (k) =>
            (httpParams = this.addToHttpParamsRecursive(
              httpParams,
              value[k],
              key != null ? `${key}.${k}` : k
            ))
        );
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error('key may not be null if value is not object or array');
    }
    return httpParams;
  }

  /**
   * @param name
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerClientExists(
    name: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<ClientExistsResponseDto>;
  public clientManagementControllerClientExists(
    name: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<ClientExistsResponseDto>>;
  public clientManagementControllerClientExists(
    name: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<ClientExistsResponseDto>>;
  public clientManagementControllerClientExists(
    name: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (name === null || name === undefined) {
      throw new Error(
        'Required parameter name was null or undefined when calling clientManagementControllerClientExists.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<ClientExistsResponseDto>(
      `${
        this.configuration.basePath
      }/v0/client-management/client-exists/${encodeURIComponent(String(name))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param clientDto
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerCreate(
    clientDto: ClientDto,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<FullClientDto>;
  public clientManagementControllerCreate(
    clientDto: ClientDto,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<FullClientDto>>;
  public clientManagementControllerCreate(
    clientDto: ClientDto,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<FullClientDto>>;
  public clientManagementControllerCreate(
    clientDto: ClientDto,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (clientDto === null || clientDto === undefined) {
      throw new Error(
        'Required parameter clientDto was null or undefined when calling clientManagementControllerCreate.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Content-Type',
        httpContentTypeSelected
      );
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.post<FullClientDto>(
      `${this.configuration.basePath}/v0/client-management`,
      clientDto,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerExportClientExample(
    observe?: 'body',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/octet-stream';
      context?: HttpContext;
    }
  ): Observable<object>;
  public clientManagementControllerExportClientExample(
    observe?: 'response',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/octet-stream';
      context?: HttpContext;
    }
  ): Observable<HttpResponse<object>>;
  public clientManagementControllerExportClientExample(
    observe?: 'events',
    reportProgress?: boolean,
    options?: {
      httpHeaderAccept?: 'application/octet-stream';
      context?: HttpContext;
    }
  ): Observable<HttpEvent<object>>;
  public clientManagementControllerExportClientExample(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: {
      httpHeaderAccept?: 'application/octet-stream';
      context?: HttpContext;
    }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/octet-stream'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<object>(
      `${this.configuration.basePath}/v0/client-management/example-file`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerFindAll(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<Array<ClientListDto>>;
  public clientManagementControllerFindAll(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<Array<ClientListDto>>>;
  public clientManagementControllerFindAll(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<Array<ClientListDto>>>;
  public clientManagementControllerFindAll(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<Array<ClientListDto>>(
      `${this.configuration.basePath}/v0/client-management`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerFindOne(
    id: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<FullClientDto>;
  public clientManagementControllerFindOne(
    id: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<FullClientDto>>;
  public clientManagementControllerFindOne(
    id: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<FullClientDto>>;
  public clientManagementControllerFindOne(
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling clientManagementControllerFindOne.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<FullClientDto>(
      `${this.configuration.basePath}/v0/client-management/${encodeURIComponent(
        String(id)
      )}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerFindPositions(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<Array<PositionDto>>;
  public clientManagementControllerFindPositions(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<Array<PositionDto>>>;
  public clientManagementControllerFindPositions(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<Array<PositionDto>>>;
  public clientManagementControllerFindPositions(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.get<Array<PositionDto>>(
      `${this.configuration.basePath}/v0/client-management/positions`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerRemove(
    id: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<IdRepsponeDto>;
  public clientManagementControllerRemove(
    id: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<IdRepsponeDto>>;
  public clientManagementControllerRemove(
    id: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<IdRepsponeDto>>;
  public clientManagementControllerRemove(
    id: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling clientManagementControllerRemove.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.delete<IdRepsponeDto>(
      `${this.configuration.basePath}/v0/client-management/${encodeURIComponent(
        String(id)
      )}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param ids
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerRemoveMany(
    ids: string,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<IdsRepsponeDto>;
  public clientManagementControllerRemoveMany(
    ids: string,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<IdsRepsponeDto>>;
  public clientManagementControllerRemoveMany(
    ids: string,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<IdsRepsponeDto>>;
  public clientManagementControllerRemoveMany(
    ids: string,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (ids === null || ids === undefined) {
      throw new Error(
        'Required parameter ids was null or undefined when calling clientManagementControllerRemoveMany.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.delete<IdsRepsponeDto>(
      `${
        this.configuration.basePath
      }/v0/client-management/bulk/${encodeURIComponent(String(ids))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param fullClientDto
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerUpdate(
    fullClientDto: FullClientDto,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<FullClientDto>;
  public clientManagementControllerUpdate(
    fullClientDto: FullClientDto,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<FullClientDto>>;
  public clientManagementControllerUpdate(
    fullClientDto: FullClientDto,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<FullClientDto>>;
  public clientManagementControllerUpdate(
    fullClientDto: FullClientDto,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    if (fullClientDto === null || fullClientDto === undefined) {
      throw new Error(
        'Required parameter fullClientDto was null or undefined when calling clientManagementControllerUpdate.'
      );
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Content-Type',
        httpContentTypeSelected
      );
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.patch<FullClientDto>(
      `${this.configuration.basePath}/v0/client-management`,
      fullClientDto,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public clientManagementControllerUpdateClients(
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any>;
  public clientManagementControllerUpdateClients(
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<any>>;
  public clientManagementControllerUpdateClients(
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<any>>;
  public clientManagementControllerUpdateClients(
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined =
      options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json'];
      localVarHttpHeaderAcceptSelected =
        this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set(
        'Accept',
        localVarHttpHeaderAcceptSelected
      );
    }

    let localVarHttpContext: HttpContext | undefined =
      options && options.context;
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext();
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json';
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text';
      } else if (
        this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)
      ) {
        responseType_ = 'json';
      } else {
        responseType_ = 'blob';
      }
    }

    return this.httpClient.post<any>(
      `${this.configuration.basePath}/v0/client-management/upload-clients`,
      null,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
