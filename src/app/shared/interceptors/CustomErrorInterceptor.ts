import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

class CustomError {
  constructor(code: any, message: string) {
    this.status = {
      code,
      message
    };
  }
  status: {
    code: string;
    message: string;
  };
}

export class CustomErrorInterceptor implements HttpInterceptor {

  private static checkCustomError(error: any) {
    let isCustomError = false;
    if (error.hasOwnProperty('status')) {
      const status = error.status;
      if (status.hasOwnProperty('code') && status.hasOwnProperty('message')) {
        isCustomError = true;
      }
    }
    return isCustomError;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
    .handle(req)
    .pipe(
        catchError((error: HttpErrorResponse) => {
          if (CustomErrorInterceptor.checkCustomError(error.error)) {
            return throwError(error.error);
          } else {
            return throwError(new CustomError(null, error.message));
          }
        })
    );
  }
}
