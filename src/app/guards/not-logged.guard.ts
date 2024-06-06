import { CanActivateChildFn, CanActivateFn } from '@angular/router';

/**
 * Protect the route from logged users
 * Routes available only for not-logged users
 *
 * @param route 
 * @param state 
 * @returns 
 */
export const NotLoggedGuard: CanActivateChildFn = (route, state) => {
  if (localStorage.getItem('user') === null) {
    return true;
  }
  return false;
};
