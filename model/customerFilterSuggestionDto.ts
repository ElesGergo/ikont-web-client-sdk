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

export interface CustomerFilterSuggestionDto {
  field: CustomerFilterSuggestionDto.FieldEnum;
  value: string | null;
}
export namespace CustomerFilterSuggestionDto {
  export type FieldEnum =
    | 'clientName'
    | 'adminPerson'
    | 'email'
    | 'productName'
    | 'serialNumbers';
  export const FieldEnum = {
    ClientName: 'clientName' as FieldEnum,
    AdminPerson: 'adminPerson' as FieldEnum,
    Email: 'email' as FieldEnum,
    ProductName: 'productName' as FieldEnum,
    SerialNumbers: 'serialNumbers' as FieldEnum,
  };
}