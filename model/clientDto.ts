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
import { ClientContact } from './clientContact';
import { ClientAddress } from './clientAddress';
import { GeneralClientInformation } from './generalClientInformation';

export interface ClientDto {
  general: GeneralClientInformation;
  addresses: Array<ClientAddress>;
  contacts: Array<ClientContact>;
  website: string;
}