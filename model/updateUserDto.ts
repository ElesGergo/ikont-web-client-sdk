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
import { LabelValue } from './labelValue';

export interface UpdateUserDto {
  id: number;
  name: string;
  email: string;
  roles: Array<LabelValue>;
  claims: Array<LabelValue>;
}