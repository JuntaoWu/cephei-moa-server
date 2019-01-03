import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private authService: NbAuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('intercepted request ... ');

        // const token = localStorage.getItem('token');
        return this.authService.getToken().pipe(switchMap(token => {

            // Clone the request to add the new header.
            const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token.getValue()}`) });

            console.log('Sending request with new header now ...');

            // send the newly created request
            return next.handle(authReq).pipe(
                catchError((error: HttpErrorResponse, caught) => {
                    // intercept the response error and displace it to the console
                    console.log('Error Occurred');
                    console.log(error);

                    if (error.status === 401) {
                        location.href = '/auth/login';
                        return;
                    }

                    // return the error to the method that called it
                    return throwError(error);
                })
            );
        }));
    }
}
