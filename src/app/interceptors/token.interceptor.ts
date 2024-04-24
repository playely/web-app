import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('api.themoviedb.org')) {
    const userToken = 'secret-token'; 
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    });
    return next(modifiedReq);
  }
  return next(req);
};
