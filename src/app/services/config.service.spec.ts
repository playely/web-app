import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { configMock } from '../tests/data-mocks/config.mock';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(ConfigService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetch config', async () => {
    const response$ = service.getTMDBConfig();
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/configuration', 'Request to load config');
    expect(req.request.method).toBe('GET');
    req.flush(configMock);
    await response$;
    expect(service.getConfig()).toEqual(configMock);
    httpTesting.verify();
  });
});
