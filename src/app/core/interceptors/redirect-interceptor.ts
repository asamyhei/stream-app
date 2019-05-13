import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class RedirectInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(rsp => {
        if (rsp.status === 403) {
          this.router.navigate(['/403']);
        }
        if (rsp.status === 404) {
          this.router.navigate(['/404']);
        }
        return throwError(rsp);
      })
    );
  }
}
