export * from './clientManagement.service';
import { ClientManagementService } from './clientManagement.service';
export * from './default.service';
import { DefaultService } from './default.service';
export const APIS = [ClientManagementService, DefaultService];
