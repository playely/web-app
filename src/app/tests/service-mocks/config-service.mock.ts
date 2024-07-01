import { ConfigService } from "../../services/config.service";

export const configMockService: jasmine.SpyObj<ConfigService> = 
jasmine.createSpyObj('ConfigService', ['getTMDBConfig', 'getConfig'])
// .getTMDBConfig.and.returnValue(configMock)
// .config.and.returnValue(configMock)
;