export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './authentication.serviceInterface';
export * from './clientManagement.service';
import { ClientManagementService } from './clientManagement.service';
export * from './clientManagement.serviceInterface';
export * from './location.service';
import { LocationService } from './location.service';
export * from './location.serviceInterface';
export const APIS = [
  AuthenticationService,
  ClientManagementService,
  LocationService,
];
