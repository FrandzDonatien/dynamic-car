import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import { environment } from "../../../environments/environment.dev";
import { getJwtLocalDataStorage } from "../../shared/utils/local-storage.utils";

export const appHttpInterceptor: HttpInterceptorFn = (req, next)  =>{

  // const authService = inject(AuthService);
  console.log(`Sending request to ${req.url}`);

  if (
    req.url.endsWith("/api/v1/auth/login") || req.url.endsWith("/api/v1/refresh/token")
    || req.url.endsWith("/api/v1/auth/register") || req.url.endsWith("/api/v1/valid-token")
    || req.url.endsWith("/api/v1/auth/verification-token") || req.url.endsWith("/api/v1/reset-password")
  ) {
    return next(req);
  } else {
    const authToken = getJwtLocalDataStorage(`${environment.appVersion}-${environment.USERDATA_KEY}`);
    console.log('tk', authToken?.accessToken)
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken?.accessToken}`)
    });
    return next(authReq).pipe(
      catchError((error) => {
        console.log("interceptor",error.status);
        if (error.status === 401) {
          // authService.getRefreshToken().pipe(
          //     switchMap(() => next.handle(req))
          // ).subscribe();
          return next(req);
        }
        return throwError(error);
      })
    );
  }

}