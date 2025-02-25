import { HttpInterceptorFn } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment.development';

export const setInterceptor: HttpInterceptorFn = (req, next) => {

  let req_clone = req.clone({
    url: `${enviroment.apiUrl}/${req.url}`
  })
  console.log(req_clone.url)
  return next(req_clone);
};
