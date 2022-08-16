export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './clientManagement.service';
import { ClientManagementService } from './clientManagement.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './location.service';
import { LocationService } from './location.service';
export const APIS = [
  AuthenticationService,
  ClientManagementService,
  DefaultService,
  LocationService,
];
