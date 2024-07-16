import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const Token = "Auth Token";
  const authReq = req.clone({
    setHeaders:{
      Authorization : `Bearer ${Token}`
    }
  })
  return next(authReq);
};
