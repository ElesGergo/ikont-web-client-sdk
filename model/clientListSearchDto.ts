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

export interface ClientListSearchDto {
  clientName?: string;
  registrationNumber?: string;
  taxNumber?: string;
  address?: string;
  email?: string;
  phone?: string;
  website?: string;
  contactName?: string;
  contactPosition?: Array<string>;
  customer?: boolean;
  subcontractor?: boolean;
  sortField: string;
  sortOrder: number;
  first?: number;
  rows: number;
}
