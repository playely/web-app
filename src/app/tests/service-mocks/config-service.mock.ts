import { ConfigService } from "../../services/config.service";

const configMockService: jasmine.SpyObj<ConfigService> = 
jasmine.createSpyObj('ConfigService', ['getTMDBConfig', 'getConfig']);
configMockService.getConfig.and.returnValue({
    change_keys: '',
    images: {
        backdrop_sizes: [],
        base_url: 'http://localhost:4200/assets/images/',
        logo_sizes: [],
        poster_sizes: [],
        profile_sizes: [],
        secure_base_url: '',
        still_sizes: [],
    }
})

export default configMockService;
;