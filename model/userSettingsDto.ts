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
import { ListColumnSort } from './listColumnSort';
import { ClientListColumnVisibility } from './clientListColumnVisibility';

export interface UserSettingsDto {
  clientListColumnVisibility: ClientListColumnVisibility;
  listColumnSort: ListColumnSort;
  clientListColumnOrder: Array<string>;
}
