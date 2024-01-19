import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

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
@Injectable()
export class CustomErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

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

    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      this.router.navigate(['/login']);
    }

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
