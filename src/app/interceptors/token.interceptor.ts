import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('api.themoviedb.org')) {
    const userToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTFhMjAwNTRhMWZkYzZlNTk4N2U4MWMzODE1MWZmZiIsInN1YiI6IjY2MTJmZWViYmYzMWYyMDE2NTgwYmJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Re777UxUMFivdLMsur24ZiiVZv2yGqEUQXCxwOIb9FQ'; 
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    });
    return next(modifiedReq);
  }
  return next(req);
};
