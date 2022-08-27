export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './clientManagement.service';
import { ClientManagementService } from './clientManagement.service';
export * from './location.service';
import { LocationService } from './location.service';
export * from './userManagement.service';
import { UserManagementService } from './userManagement.service';
export * from './userSettings.service';
import { UserSettingsService } from './userSettings.service';
export const APIS = [
  AuthenticationService,
  ClientManagementService,
  LocationService,
  UserManagementService,
  UserSettingsService,
];
