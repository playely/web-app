import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { NotLoggedGuard } from './not-logged.guard';


describe('notLoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => NotLoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
