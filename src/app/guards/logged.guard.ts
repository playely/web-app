import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Protect the route from not-logged users
 * Route available only for logged users
 * 
 * @param route 
 * @param state 
 * @returns 
 */
export const LoggedGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if (localStorage.getItem('user') === null) {
    router.navigate(['/auth/sign-in']);
    return false;
  }
  return true;
};
