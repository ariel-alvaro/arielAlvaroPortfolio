import { HttpInterceptorFn } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

export const setInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes("/")){
    return next(req);
  }

  let req_clone = req.clone({
    url: `${enviroment.apiUrl}/${req.url}`
  })


  return next(req_clone);
};
