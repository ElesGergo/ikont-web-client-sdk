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
import { LabelValueDto } from './labelValueDto';

export interface UserListDto {
  id: number;
  userName: string;
  userEmail: string;
  roles: Array<LabelValueDto>;
  claims: Array<LabelValueDto>;
  userState: UserListDto.UserStateEnum;
  registrationState: UserListDto.RegistrationStateEnum;
}
export namespace UserListDto {
  export type UserStateEnum = 'active' | 'suspended';
  export const UserStateEnum = {
    Active: 'active' as UserStateEnum,
    Suspended: 'suspended' as UserStateEnum,
  };
  export type RegistrationStateEnum = 'inProgress' | 'registered' | 'active';
  export const RegistrationStateEnum = {
    InProgress: 'inProgress' as RegistrationStateEnum,
    Registered: 'registered' as RegistrationStateEnum,
    Active: 'active' as RegistrationStateEnum,
  };
}
