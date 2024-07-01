import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false for an invalid user on sign in', () => {
    const isSigned = service.signIn('user@test.com', '12345');
    expect(isSigned).toBeFalse();
    expect(localStorage.getItem('user')).toBeNull();
  });

  it('should return true for a valid user on sign in', () => {
    const isSigned = service.signIn('user@playely.com', 'play123456');
    expect(isSigned).toBeTrue();
    expect(localStorage.getItem('user')).toBeTruthy();
  });

  it('should return true for a valid user on sign up', () => {
    const isSigned = service.signUp('user@test.com', '12345', 'User');
    expect(isSigned).toBeTrue();
    expect(localStorage.getItem('user')).toBeTruthy();
  });

  it('should return false for an ivalid user on sign up (already registered)', () => {
    const isSigned = service.signUp('user@playely.com', 'play123456', 'User');
    expect(isSigned).toBeFalse();
    expect(localStorage.getItem('user')).toBeNull();
  });

  it('should return true for a valid email on reset password', () => {
    const isReset = service.resetPassword('user@test.com');
    expect(isReset).toBeTrue();
  });

  it('should return true for a valid user on set new password', () => {
    const isSet = service.setNewPassword('1', '123456');
    expect(isSet).toBeTrue();
  });

  it('should remove user from storage on logout', () => {
    service.logout();
    expect(localStorage.getItem('user')).toBeNull();
  });
});
